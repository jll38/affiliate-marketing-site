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
        className="pt-24 md:mt-0 md:h-screen flex justify-center  md:text-left md:flex-row md:justify-between lg:px-48 md:px-12 px-4 text-black flex-wrap bg-gray-100"
      >
        <Featured img='https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' imgAlt='Test' date='Date' category='Test'>Bababooey</Featured>
        <div className="mt-10">
          <ul className="animate-fadein flex-1">
            {allPostsData.map(({ id, date, title, thumbnail, category }) => (
              <li key={id}>
                <br />
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
              </li>
            ))}
          </ul>
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
