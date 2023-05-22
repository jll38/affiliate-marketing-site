import { Footer } from "./../components/Footer";
import { Navbar } from "./../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import NewsletterForm from "@/components/NewsletterForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <div className="fixed z-50 bottom-0 p-5">
        <NewsletterForm/>
      </div>
      <main className="text-white animate-fadein">
        <section
          name="Hero"
          className="bg-secondary bg-[url('https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover"
        >
          <div className="pt-24 md:mt-0 md:h-screen flex justify-center text-center md:text-left md:flex-row md:justify-between items-center lg:px-48 md:px-12 px-4 backdrop-blur-sm bg-opacity-50 bg-gray-500">
            <div className="md:flex-1 md:mr-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center my-32">
              <h1 className="font-pt-serif text-5xl font-bold mb-7 drop-shadow-md mb-0">
                Empower Your Home
                <br />
                <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100% text-red-500">
                  With Smart Solutions
                </span>
              </h1>
              <p className="font-pt-serif font-normal mb-7">
                Discover Insights, Tips, and Reviews for a Connected,
                Intelligent Living Space
              </p>
              <div className="font-montserrat">
                <button onClick={() => {
                  window.location.assign('/blog');
                }} className="bg-red-500/75 px-6 py-4 rounded-lg border-2 border-red-500/25 border-solid text-white mr-2 mb-2">
                  View Our Blog
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
