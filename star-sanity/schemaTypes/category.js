import {defineField, defineType} from 'sanity'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'catItem' } }],
    },
  ],
};
