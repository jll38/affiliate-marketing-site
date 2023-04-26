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
      price
    }`
  );
}

export async function getProducts() {
  const client = createClient({
    projectId: "o7n4curl",
    dataset: "production",
    title: "Home Sync Hub",
    apiVersion: "2023-04-25",
  });

  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
    }`
  );
}

export async function getProductsById(slug) {
  const client = createClient({
    projectId: "o7n4curl",
    dataset: "production",
    title: "Home Sync Hub",
    apiVersion: "2023-04-25",
  });

  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
    }`,
    { slug }
  );
}

export async function getBlogById(slug) {
  const client = createClient({
    projectId: "o7n4curl",
    dataset: "production",
    title: "Home Sync Hub",
    apiVersion: "2023-04-25",
  });

  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      category,
      "image": image.asset->url,
      url,
      content,
      price
    }`,
    { slug}
  );
}