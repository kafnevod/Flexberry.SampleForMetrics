import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-sample-for-metrics-blog-post-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-sample-for-metrics-post-tag+tagType':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'tagType',
            projection: 'TagTypeL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
