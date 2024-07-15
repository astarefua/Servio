// schemas/section.js
export default {
    name: 'section',
    title: 'Section',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'card' } }],
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
  