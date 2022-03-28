import { Serializer as BlogPostSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sample-for-metrics-blog-post';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BlogPostSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
