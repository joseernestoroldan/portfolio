import { createClient, groq } from "next-sanity";

const projectId = process.env.API_ID;
const dataset = "production"; // "production"
const apiVersion = "2023-05-03";
const token = process.env.API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

export async function getData(myquery) {
  const query = groq`*[_type == '${myquery}']{
    _id,
    _createdAt,
    title,
    description,
    netlify,
    git,
    vercel,
    externalLink,
    "image": mainImage.asset->url
  }`;
  
  const data = await client.fetch(query);
  return data;
}
