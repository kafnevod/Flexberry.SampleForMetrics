import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sample-for-metrics-blog-post-l');
  this.route('i-i-s-sample-for-metrics-blog-post-e',
  { path: 'i-i-s-sample-for-metrics-blog-post-e/:id' });
  this.route('i-i-s-sample-for-metrics-blog-post-e.new',
  { path: 'i-i-s-sample-for-metrics-blog-post-e/new' });
  this.route('i-i-s-sample-for-metrics-post-author-l');
  this.route('i-i-s-sample-for-metrics-post-author-e',
  { path: 'i-i-s-sample-for-metrics-post-author-e/:id' });
  this.route('i-i-s-sample-for-metrics-post-author-e.new',
  { path: 'i-i-s-sample-for-metrics-post-author-e/new' });
  this.route('i-i-s-sample-for-metrics-tag-type-l');
  this.route('i-i-s-sample-for-metrics-tag-type-e',
  { path: 'i-i-s-sample-for-metrics-tag-type-e/:id' });
  this.route('i-i-s-sample-for-metrics-tag-type-e.new',
  { path: 'i-i-s-sample-for-metrics-tag-type-e/new' });
});

export default Router;
