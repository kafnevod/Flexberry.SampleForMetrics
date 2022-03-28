import { Serializer as TagTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sample-for-metrics-tag-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TagTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
