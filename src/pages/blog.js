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
  const [filter, setFilter] = useState("none");
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

  const handleFilter = (e) => {
    const text = e.target.textContent;
    if (text === filter) {
      setFilter("none");
    } else {
      setFilter(text);
    }
  };

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
        <h1 className="text-4xl sm:text-6xl font-semibold text-center mb-5 text-gray-800">
          Home Sync Hub Blog
        </h1>
        <Divider />
        <div className="flex jusitfy-center items-center sm:justify-between mx-5 text-sm">
          <div
            name="categories"
            className="flex jusitfy-center items-center sm:gap-5 text-gray-600 child-hover:text-gray-900 flex-wrap"
          >
            <button
              onClick={handleFilter}
              className={`${
                filter === "Entertainment" ? "bg-gray-200 rounded-lg" : ""
              } px-2 `}
            >
              Entertainment
            </button>
            <button
              onClick={handleFilter}
              className={`${
                filter === "Comfort" ? "bg-gray-200 rounded-lg" : ""
              } px-2 `}
            >
              Comfort
            </button>
            <button
              onClick={handleFilter}
              className={`${
                filter === "Home Security" ? "bg-gray-200 rounded-lg" : ""
              } px-2 `}
            >
              Home Security
            </button>
            <button
              onClick={handleFilter}
              className={`${
                filter === "Health & Wellness" ? "bg-gray-200 rounded-lg" : ""
              } px-2 `}
            >
              Health & Wellness
            </button>
          </div>
          <ul name="socials" className="flex gap-2 text-teal-600 jusitfy-center text-xl sm:text-lg">
            <li>
              <a target="_blank" href="https://www.instagram.com/homesynchub/"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </li>
          </ul>
        </div>
        <Divider />
        <h1 className="text-2xl font-medium my-5 text-gray-800">Latest</h1>

        <div className="flex flex-row flex-wrap  md:items-center justify-center">
          {loading ? (
            <>{placeHolders.map((placeholder) => placeholder)}</>
          ) : (
            <>
              {blogPosts.map((blog) => {
                // Exclude products if filter is not "none" and the category matches the filter
                if (filter !== "none" && blog.category !== filter) {
                  return null;
                }
                return (
                  <Link key={blog._id} href={"/blog/" + blog.slug}>
                    <BlogCard
                      date={blog._createdAt}
                      img={blog.image}
                      category={blog.category}
                    >
                      {blog.name}
                    </BlogCard>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
