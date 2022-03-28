import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  text: DS.attr('string'),
  date: DS.attr('date'),
  postStatus: DS.attr('i-i-s-sample-for-metrics-post-status'),
  postAuthor: DS.belongsTo('i-i-s-sample-for-metrics-post-author', { inverse: null, async: false }),
  postTag: DS.hasMany('i-i-s-sample-for-metrics-post-tag', { inverse: 'blogPost', async: false })
});

export let ValidationRules = {
  text: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-blog-post.validations.text.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-blog-post.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  postStatus: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-blog-post.validations.postStatus.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  postAuthor: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-blog-post.validations.postAuthor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  postTag: {
    descriptionKey: 'models.i-i-s-sample-for-metrics-blog-post.validations.postTag.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BlogPostE', 'i-i-s-sample-for-metrics-blog-post', {
    text: attr('Text', { index: 0 }),
    date: attr('Date', { index: 1 }),
    postStatus: attr('Post status', { index: 2 }),
    postAuthor: belongsTo('i-i-s-sample-for-metrics-post-author', 'Post author', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    postTag: hasMany('i-i-s-sample-for-metrics-post-tag', 'Post tag', {
      order: attr('Order', { index: 0 }),
      tagType: belongsTo('i-i-s-sample-for-metrics-tag-type', 'Tag type', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('BlogPostL', 'i-i-s-sample-for-metrics-blog-post', {
    text: attr('Text', { index: 0 }),
    date: attr('Date', { index: 1 }),
    postStatus: attr('Post status', { index: 2 }),
    postAuthor: belongsTo('i-i-s-sample-for-metrics-post-author', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
