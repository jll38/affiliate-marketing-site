import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import TextPlaceholder from "@/components/TextPlaceholder";
import Date from "@/components/date";
import Divider from "@/components/Divider";
import Link from "next/link";
import { Footer } from "@/components/Footer";

function BlogPost() {

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
          <div className="text-center">
            <h1 className="text-4xl">Article Not Found</h1>
            <Divider/>
            <Link href='/blog' className="hover:underline">Return to Blog</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default BlogPost;
