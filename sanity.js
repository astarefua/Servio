import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';



 const client = createClient({
  projectId: 'c2ju0fwk', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // find this at manage.sanity.io or in your sanity.json
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-01-01', // use a specific date (YYYY-MM-DD) to ensure a consistent API version

});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export default client
