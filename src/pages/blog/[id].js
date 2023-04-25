import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const tailwindRenderer = {
  h1: (props) => <h1 as="h1" className="text-3xl text-bold my-5" {...props} />,
  h2: (props) => <h2 as="h2" className="text-2xl my-5" {...props} />,
  h3: (props) => <h3 as="h3" className="text-xl my-5 font-bold" {...props} />,
  h4: (props) => <h4 as="h4" size="md" my="5" {...props} />,
  h5: (props) => <h5 as="h5" size="sm" my="5" {...props} />,
  h6: (props) => <h6 as="h6" size="xs" my="5" {...props} />,
  p: (props) => <p {...props} />,
  ol: (props) => <ol pl="1.5rem" {...props} />,
  ul: (props) => <ul pl="1.5rem" {...props} />,
  li: (props) => <li {...props} />,
  img: (props) => (
    <Image
      className="w-full h-auto my-5"
      width="1000"
      height="1000"
      {...props}
    />
  ),
  strong: (props) => <span className="font-bold" {...props} />,
  // Add more custom renderers for other elements as needed
};

export default function Post({ postData }) {
  return (
<>
  <Head>
    <title>{postData.title}</title>
  </Head>
  <Navbar />
  <div className='pt-24 md:mt-0 md:h-screen flex justify-center text-center md:text-left md:flex-row md:justify-between items-start lg:px-48 md:px-12 px-4 backdrop-blur-sm bg-opacity-50 bg-gray-100 overflow-hidden'>
    <article className='md:flex-1 md:mr-10 md:w-2/3 md:border-r md:min-h-full md:mr-10 pr-5 mt-10'>
      <div name='return-nav'>
        <Link href='/blog'>&#8592; Go Back</Link>
      </div>
      <div name='Article Header'>
        <h1 className="text-4xl font-semibold">
          {postData.title}
        </h1>
        <div className='text-gray-600'>
          <Date dateString={postData.date} />
        </div>
      </div>
      <div className='my-5 break-words'>
        <ReactMarkdown
          components={tailwindRenderer}
          rehypePlugins={[rehypeRaw]}
        >
          {postData.content}
        </ReactMarkdown>
      </div>
    </article>
    <nav className="md:w-1/3 mt-10 md:mt-0 md:ml-10 md:mt-10 text-center" name='sidebar-articles'>
      <h2 className="text-2xl font-semibold">Related Articles</h2>
    </nav>
  </div>
</>

  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
