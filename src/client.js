import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
// import dotenv from 'dotenv';
// dotenv.config()





export const client = sanityClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-03-02',
    useCdn: 'true',
    token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);