import Head from "next/head";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import Date from "@/components/date";
import { Navbar } from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { ca } from "date-fns/locale";
import Featured from "@/components/featured";

export default function Blog({ allPostsData }) {
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
        <div className="flex flex-row flex-wrap mb-10 items-center justify-center gap-7">
          <Featured
            img="https://thumbs.dreamstime.com/b/led-strip-dark-gray-background-diode-type-electric-lamp-164224251.jpg"
            imgAlt="Featured Image"
            date="April 25, 2023"
            category="Decore"
            className="mb-4"
          >
            You&apos;re using LED Strips wrong: 10 Ways to Spruce up Your Home
            With LEDs
          </Featured>
          <Featured
            img="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            imgAlt="Featured Image"
            date="Date"
            category="Test"
            className="mb-4"
          >
            Discover Insights, Tips, and Reviews for a Connected, Intelligent
            Living Space
          </Featured>
        </div>
        <div className="flex flex-row flex-wrap w-full gap-5 items-center justify-center">
          {allPostsData.map(({ id, date, title, thumbnail, category }) => (
            <div key={id} className="mb-4">
              <BlogCard
                img={thumbnail}
                category={category}
                date={
                  <small>
                    <Date dateString={date} />
                  </small>
                }
              >
                <Link href={`/blog/${id}`} className="text-1xl">
                  {title}
                </Link>
              </BlogCard>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
