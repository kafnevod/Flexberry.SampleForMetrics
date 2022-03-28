import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.sample-for-metrics.caption'),
          title: i18n.t('forms.application.sitemap.sample-for-metrics.title'),
          children: [{
            link: 'i-i-s-sample-for-metrics-post-author-l',
            caption: i18n.t('forms.application.sitemap.sample-for-metrics.i-i-s-sample-for-metrics-post-author-l.caption'),
            title: i18n.t('forms.application.sitemap.sample-for-metrics.i-i-s-sample-for-metrics-post-author-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-sample-for-metrics-blog-post-l',
            caption: i18n.t('forms.application.sitemap.sample-for-metrics.i-i-s-sample-for-metrics-blog-post-l.caption'),
            title: i18n.t('forms.application.sitemap.sample-for-metrics.i-i-s-sample-for-metrics-blog-post-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-sample-for-metrics-tag-type-l',
            caption: i18n.t('forms.application.sitemap.sample-for-metrics.i-i-s-sample-for-metrics-tag-type-l.caption'),
            title: i18n.t('forms.application.sitemap.sample-for-metrics.i-i-s-sample-for-metrics-tag-type-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})