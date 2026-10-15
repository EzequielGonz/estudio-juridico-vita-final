-- ============================================================================
-- Tabla de consultas para Supabase (cuando se migre desde PocketBase).
-- 1) Ejecutar este archivo en Supabase → SQL Editor.
-- 2) En apps/web/src/lib/leads.ts: LEADS_PROVIDER = 'supabase' y completar
--    SUPABASE_CONFIG con la URL del proyecto y la anon key (Settings → API).
-- El sitio solo puede INSERTAR. Leer, editar o borrar consultas queda reservado
-- a usuarios autenticados del estudio (panel de Supabase o un CRM).
-- ============================================================================

create table if not exists public.consultas (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  nombre       text not null check (char_length(nombre) between 1 and 120),
  apellido     text not null check (char_length(apellido) between 1 and 120),
  telefono     text not null check (char_length(telefono) between 7 and 50),
  email        text not null check (char_length(email) <= 254),
  tipo         text not null check (tipo in ('Accidente de tránsito', 'Accidente laboral', 'Otro')),
  descripcion  text not null check (char_length(descripcion) <= 5000),
  origen       text check (char_length(origen) <= 300),
  -- Campos para el seguimiento del asesor (los completa el estudio, no el sitio)
  estado       text not null default 'nueva' check (estado in ('nueva', 'contactada', 'en curso', 'descartada', 'cliente')),
  notas        text
);

create index if not exists consultas_created_at_idx on public.consultas (created_at desc);

alter table public.consultas enable row level security;

-- El formulario público solo puede crear consultas nuevas, siempre en estado 'nueva'.
drop policy if exists "formulario publico inserta" on public.consultas;
create policy "formulario publico inserta"
  on public.consultas for insert
  to anon
  with check (estado = 'nueva' and notas is null);

-- El equipo del estudio (usuarios autenticados) ve y gestiona todas las consultas.
drop policy if exists "equipo gestiona consultas" on public.consultas;
create policy "equipo gestiona consultas"
  on public.consultas for all
  to authenticated
  using (true)
  with check (true);
