import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import PostStatusEnum from '../enums/i-i-s-sample-for-metrics-post-status';

export default FlexberryEnum.extend({
  enum: PostStatusEnum,
  sourceType: 'IIS.SampleForMetrics.PostStatus'
});
