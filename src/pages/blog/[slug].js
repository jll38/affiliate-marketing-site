import { useRouter } from "next/router";
import { getBlogById } from "../../../sanity/sanity-utils";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import TextPlaceholder from "@/components/TextPlaceholder";
import Date from "@/components/date";
import Divider from "@/components/Divider";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import AmazonBox from "@/components/AmazonBox";

function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      if (slug) {
        const post = await getBlogById(slug);
        if (!post) {
          router.push("/blog/post-not-found");
        } else {
          setBlog(post);
          setLoading(false);
        }
      }
    }

    fetchBlogPosts();
  }, [slug]);

  return (
    <>
      <Head>
        <title>Home Sync Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore HomeSyncHub for expert advice, in-depth reviews, and smart home automation tips to transform your living space into a connected, intelligent haven."
        />
      </Head>
      <Navbar />
      <main className="animate-fadein pt-36 bg-gray-100 pb-5">
        <div className="md:mt-0 md:min-h-screen lg:px-48 md:px-12 px-4 bg-opacity-50 ">
          <div>
            {loading ? (
              <>
                <div
                  role="status"
                  class="space-y-2.5 animate-pulse max-w-lg mb-8"
                >
                  <div class="flex items-center w-full space-x-2">
                    <div class="h-6 bg-gray-400 rounded-full  w-3/4"></div>
                  </div>
                </div>

                <TextPlaceholder />
                <TextPlaceholder />
                <TextPlaceholder />
                <TextPlaceholder />
                <TextPlaceholder />
              </>
            ) : (
              <article className="md:w-3/4 px-5">
                <div name="Article Header" className="md:w-3/4">
                  <img src={blog.image} className="rounded-xl shadow-md mb-5 md:w-3/4"></img>
                  <h1 className="text-3xl font-semibold break-words">
                    {blog.name}
                  </h1>
                  <Date dateString={blog._createdAt} className="text-left"></Date>
                  <Divider class />
                  {blog.url && <AmazonBox link={blog.url}></AmazonBox>}
                </div>
                <div className="text-gray-800 md:w-3/4 break-words">
                  <PortableText value={blog.content}/>
                </div>
              </article>
            )}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default BlogPost;
