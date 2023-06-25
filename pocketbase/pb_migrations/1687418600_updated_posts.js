migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqr7rbpuut0nqai")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyr8tlcg",
    "name": "text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqr7rbpuut0nqai")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyr8tlcg",
    "name": "test",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
