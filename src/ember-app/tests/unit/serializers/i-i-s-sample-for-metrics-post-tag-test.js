import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sample-for-metrics-post-tag', 'Unit | Serializer | i-i-s-sample-for-metrics-post-tag', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sample-for-metrics-post-tag',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sample-for-metrics-post-status',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
