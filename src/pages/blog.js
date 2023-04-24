import Head from "next/head";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import Date from "@/components/date";
import { Navbar } from "@/components/Navbar";
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
      <main name="Homesync Blog" className="pt-24 md:mt-0 md:h-screen flex justify-center  md:text-left md:flex-row md:justify-between lg:px-48 md:px-12 px-4 text-black">
        <div>
          <ul>
            {allPostsData.map(({ id, date, title, thumbnail }) => (
              <li key={id}>
                <Link
                  href={`/blog/${id}`}
                  className="text-2xl"
                >
                  {title}
                </Link>
                <Image src={thumbnail} width='80' height='200'/>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center items-center">
        <section className="flex flex-col">
          <Link href="/">&#8592; Go Home</Link>
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold mb-2 divider">
            Blog
          </h1>
        </section>
      </div>
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
