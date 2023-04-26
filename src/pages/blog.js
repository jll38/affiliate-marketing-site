import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "@/components/date";
import { Navbar } from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { ca } from "date-fns/locale";
import Featured from "@/components/featured";
import { getBlog } from "../../sanity/sanity-utils";
import LoadingSpinner from "@/components/LoadingSpinner";
import PlaceholderCard from "@/components/PlaceholderCard";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      const posts = await getBlog();
      setBlogPosts(posts);
      setLoading(false);
    }

    fetchBlogPosts();
  }, []);

  return (
    <>
      <Head>
        <title>HomeSync Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore HomeSyncHub's Blog for the latest in-depth review and smart home automation tips to transform your living space into a connected, intelligent haven."
        />
      </Head>
      <Navbar />
      <main
        name="Homesync Blog"
        className="pt-24 md:m-0 md:min-h-screen md:text-left flex-row md:justify-center items-center lg:px-48 md:px-12 px-4 text-black bg-gray-100 animate-fadein divide-y-4"
      >
        <h1 className="text-3xl">Home Sync Blog</h1>
        {loading ? (
          <>
            <PlaceholderCard />
            <PlaceholderCard />
            <PlaceholderCard />
          </>
        ) : (
          <>
            {blogPosts.map((blog) => (
              <BlogCard
                key={blog._id}
                date={blog._createdAt}
                img={blog.image}
                category={blog.category}
              >
                {blog.name}
              </BlogCard>
            ))}
          </>
        )}
      </main>
    </>
  );
}
