import { Serializer as PostTagSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sample-for-metrics-post-tag';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PostTagSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
