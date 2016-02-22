/* initialize and bootstrap application */
requirejs(['itemAttributes/configs/entity.module'], function() {
    angular.bootstrap(document, ['itemAttributeTypesApp']);
});

/* load UI messages */
emr.loadMessages([
    "openhmis.inventory.general.new",
    "openhmis.inventory.general.error.notFound",
    "openhmis.inventory.general.created.success",
    "openhmis.inventory.general.updated.success",
    "openhmis.inventory.general.retired.success",
    "openhmis.inventory.general.unretired.success",
    "openhmis.inventory.general.confirm.delete",
    "openhmis.inventory.general.deleted.success",
    "openhmis.inventory.general.name.required",
    "openhmis.inventory.general.retireReason.required",
    "openhmis.inventory.general.unretire",
    "openhmis.inventory.general.retire",
    "openhmis.inventory.general.delete",
    "openhmis.inventory.general.retired.reason",
    "general.edit",
    "general.new",
    "general.name",
    "general.description",
    "general.cancel",
    "general.save",
    "general.retireReason",
    "general.purge",
    "openhmis.inventory.general.error.entityName",
    "openhmis.inventory.general.error.restName",
    "openhmis.inventory.general.error.uuid",
    "openhmis.inventory.general.error.retired",
    "openhmis.inventory.general.error.retireReason",
    "openhmis.backboneforms.attribute.type.name",
    "openhmis.backboneforms.attribute.type.namePlural",

    "openhmis.inventory.admin.item.attribute.types",

    "openhmis.inventory.item.delete.confirm.AttributeType",

    "openhmis.backboneforms.attribute.type.name",

    "openhmis.backboneforms.required.field.name",

    "openhmis.inventory.itemAttributeType",
    "openhmis.inventory.itemAttributeType_rest",
    "FormField.required",
    "PersonAttributeType.foreignKey",
    "PersonAttributeType.format",
    "PatientIdentifierType.format",
    "Obs.order",
    "Field.attributeName",
]);
