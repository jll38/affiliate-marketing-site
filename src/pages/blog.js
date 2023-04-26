import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { getBlog } from "../../sanity/sanity-utils";
import { Footer } from "@/components/Footer";
import PlaceholderCard from "@/components/PlaceholderCard";
import Divider from "@/components/Divider";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeHolders = [];
  for (let i = 0; i < 20; i++) {
    placeHolders.push(<PlaceholderCard />);
  }

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
        <title>Home Sync Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore HomeSyncHub's Blog for the latest in-depth review and smart home automation tips to transform your living space into a connected, intelligent haven."
        />
      </Head>
      <Navbar />
      <main
        name="Homesync Blog"
        className="pt-32 md:m-0 md:min-h-screen md:text-left lg:px-40 md:px-12 px-4 text-black bg-gray-100 animate-fadein pb-10"
      >
        <h1 className="text-3xl font-semibold text-center md:text-left">
          Home Sync Blog
        </h1>
        <Divider />
        <div className="flex flex-row flex-wrap  md:items-center justify-center">
          {loading ? (
            <>{placeHolders.map((placeholder) => placeholder)}</>
          ) : (
            <>
              {blogPosts.map((blog) => (
                <Link key={blog._id} href={"/blog/" + blog.slug}>
                  <BlogCard
                    date={blog._createdAt}
                    img={blog.image}
                    category={blog.category}
                  >
                    {blog.name}
                  </BlogCard>
                </Link>
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
