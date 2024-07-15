import {defineField, defineType} from 'sanity'


// schemas/item.js
// schemas/item.js
export default {
  name: 'item',
  type: 'document',
  title: 'Item',
  fields: [
    
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};



