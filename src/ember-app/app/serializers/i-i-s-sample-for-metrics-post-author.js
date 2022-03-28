import { Serializer as PostAuthorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sample-for-metrics-post-author';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PostAuthorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
