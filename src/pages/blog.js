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

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      const posts = await getBlog();
      setBlogPosts(posts);
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
        className="pt-24 md:m-0 md:min-h-screen md:text-left md:flex-row md:justify-between lg:px-48 md:px-12 px-4 text-black bg-gray-100 animate-fadein"
      >
        <div>blog posts</div>
        {blogPosts.map((blog) => (
          <div key={blog._id}>{blog.name}</div>
        ))}
      </main>
    </>
  );
}
