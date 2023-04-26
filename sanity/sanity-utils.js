import { createClient, groq } from "next-sanity";
export async function getBlog() {
  const client = createClient({
    projectId: "o7n4curl",
    dataset: "production",
    title: "Home Sync Hub",
    apiVersion: "2023-04-25",
  });

  return client.fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      category,
      "image": image.asset->url,
      url,
      content,
    }`
  );
}