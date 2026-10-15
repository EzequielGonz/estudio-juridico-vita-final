/// <reference path="../pb_data/types.d.ts" />

// Agrega el campo opcional "origen" a la colección "consultas": guarda desde qué
// página llegó cada consulta (home, artículo de moto, zona La Matanza, etc.).
migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("consultas");
    if (!collection.fields.getByName("origen")) {
      collection.fields.add(new TextField({ name: "origen", required: false, max: 300 }));
      app.save(collection);
    }
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("consultas");
    if (collection.fields.getByName("origen")) {
      collection.fields.removeByName("origen");
      app.save(collection);
    }
  },
);
