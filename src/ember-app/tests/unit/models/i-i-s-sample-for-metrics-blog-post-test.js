import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sample-for-metrics-blog-post', 'Unit | Model | i-i-s-sample-for-metrics-blog-post', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sample-for-metrics-blog-post',
    'model:i-i-s-sample-for-metrics-post-author',
    'model:i-i-s-sample-for-metrics-post-tag',
    'model:i-i-s-sample-for-metrics-tag-type',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
