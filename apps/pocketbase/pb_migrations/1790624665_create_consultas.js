/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    let collection;
    try {
      collection = app.findCollectionByNameOrId("consultas");
    } catch (_) {
      collection = new Collection({
        type: "base",
        name: "consultas",
        listRule: null,
        viewRule: null,
        createRule: "",
        updateRule: null,
        deleteRule: null,
        fields: [
          { name: "nombre", type: "text", required: true, max: 120 },
          { name: "apellido", type: "text", required: true, max: 120 },
          { name: "telefono", type: "text", required: true, max: 50 },
          { name: "email", type: "email", required: true },
          { name: "tipo", type: "select", required: true, maxSelect: 1, values: ["Accidente de tránsito", "Accidente laboral", "Otro"] },
          { name: "descripcion", type: "text", required: true, max: 5000 },
          { name: "created", type: "autodate", onCreate: true, onUpdate: false },
          { name: "updated", type: "autodate", onCreate: true, onUpdate: true },
        ],
      });
      app.save(collection);
    }
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("consultas");
    app.delete(collection);
  },
);
