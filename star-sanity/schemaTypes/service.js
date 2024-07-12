import {defineField, defineType} from 'sanity'



export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'iconLib',
      type: 'string',
      title: 'Icon Library',
    },
    {
      name: 'iconName',
      type: 'string',
      title: 'Icon Name',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'reference', to: [{ type: 'item' }] }],
    },
  ],
};

