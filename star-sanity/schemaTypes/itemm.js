// named itemm so as to not conflict with item which is already available

// schemas/item.js
export default {
    name: 'itemm',
    title: 'Itemm',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
       
      {
        name: 'rating',
        type: 'number',
        title: 'Enter a number between 1 to 5',
        validation: rule => rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
      },
      {
        name: 'reviews',
        title: 'Reviews',
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
    ],
  };




//   {
//     name: 'reviews',
//     title: 'Reviews',
//     type: 'array',
//     of: [{ type: 'string' }],
//   },
  