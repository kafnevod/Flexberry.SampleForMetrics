import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  order: DS.attr('number'),
  tagType: DS.belongsTo('i-i-s-sample-for-metrics-tag-type', { inverse: null, async: false }),
  blogPost: DS.belongsTo('i-i-s-sample-for-metrics-blog-post', { inverse: 'postTag', async: false })
});

export let ValidationRules = {
  order: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-post-tag.validations.order.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  tagType: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-post-tag.validations.tagType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  blogPost: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-post-tag.validations.blogPost.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PostTagE', 'i-i-s-sample-for-metrics-post-tag', {
    order: attr('Order', { index: 0 }),
    tagType: belongsTo('i-i-s-sample-for-metrics-tag-type', 'Tag type', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
