import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sample for metrics',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sample for metrics',
          title: 'Sample for metrics'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
