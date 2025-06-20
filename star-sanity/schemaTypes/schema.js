import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import service from './service';
import item from './item';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([service, item]),
});
