import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSampleForMetricsBlogPostLForm from './forms/i-i-s-sample-for-metrics-blog-post-l';
import IISSampleForMetricsPostAuthorLForm from './forms/i-i-s-sample-for-metrics-post-author-l';
import IISSampleForMetricsTagTypeLForm from './forms/i-i-s-sample-for-metrics-tag-type-l';
import IISSampleForMetricsBlogPostEForm from './forms/i-i-s-sample-for-metrics-blog-post-e';
import IISSampleForMetricsPostAuthorEForm from './forms/i-i-s-sample-for-metrics-post-author-e';
import IISSampleForMetricsTagTypeEForm from './forms/i-i-s-sample-for-metrics-tag-type-e';
import IISSampleForMetricsBlogPostModel from './models/i-i-s-sample-for-metrics-blog-post';
import IISSampleForMetricsPostAuthorModel from './models/i-i-s-sample-for-metrics-post-author';
import IISSampleForMetricsPostTagModel from './models/i-i-s-sample-for-metrics-post-tag';
import IISSampleForMetricsTagTypeModel from './models/i-i-s-sample-for-metrics-tag-type';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sample-for-metrics-blog-post': IISSampleForMetricsBlogPostModel,
    'i-i-s-sample-for-metrics-post-author': IISSampleForMetricsPostAuthorModel,
    'i-i-s-sample-for-metrics-post-tag': IISSampleForMetricsPostTagModel,
    'i-i-s-sample-for-metrics-tag-type': IISSampleForMetricsTagTypeModel
  },

  'application-name': 'Sample for metrics',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sample for metrics',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sample for metrics',
          title: 'Sample for metrics'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'sample-for-metrics': {
          caption: 'SampleForMetrics',
          title: 'SampleForMetrics',
          'i-i-s-sample-for-metrics-post-author-l': {
            caption: 'Post author',
            title: ''
          },
          'i-i-s-sample-for-metrics-blog-post-l': {
            caption: 'Blog post',
            title: ''
          },
          'i-i-s-sample-for-metrics-tag-type-l': {
            caption: 'Tag type',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-sample-for-metrics-blog-post-l': IISSampleForMetricsBlogPostLForm,
    'i-i-s-sample-for-metrics-post-author-l': IISSampleForMetricsPostAuthorLForm,
    'i-i-s-sample-for-metrics-tag-type-l': IISSampleForMetricsTagTypeLForm,
    'i-i-s-sample-for-metrics-blog-post-e': IISSampleForMetricsBlogPostEForm,
    'i-i-s-sample-for-metrics-post-author-e': IISSampleForMetricsPostAuthorEForm,
    'i-i-s-sample-for-metrics-tag-type-e': IISSampleForMetricsTagTypeEForm
  },

});

export default translations;
