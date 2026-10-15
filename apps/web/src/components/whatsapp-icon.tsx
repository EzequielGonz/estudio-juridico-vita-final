type Props = { size?: number; strokeWidth?: number; className?: string };

// Icono de WhatsApp (lucide-react no incluye marca). Trazado simple, hereda currentColor.
export function WhatsAppIcon({ size = 18, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.5 20.5l1.3-4.2a8 8 0 1 1 3 3z" />
      <path d="M9 9.5c.3 1.5 1.5 2.8 3 3.2.6.2 1.2 0 1.5-.5l.3-.5c.2-.3.6-.4.9-.2l1.4.8c.3.2.4.6.2.9-.6 1-1.7 1.6-2.9 1.4-2.4-.4-4.4-2.4-4.8-4.8-.2-1.2.4-2.3 1.4-2.9.3-.2.7-.1.9.2l.8 1.4c.2.3.1.7-.2.9l-.5.3c-.5.3-.7.9-.5 1.5z" />
    </svg>
  );
}
