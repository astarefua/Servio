// schemas/card.js
export default {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'relatedImage',
        title: 'Related Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
      {
        name: 'text',
        title: 'Text',
        type: 'string',
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'itemm' } }],
      },
    ],
  };
  