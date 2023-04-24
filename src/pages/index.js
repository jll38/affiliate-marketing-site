import { Navbar } from "./../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Homesync Guru</title>
        <meta
          name="description"
          content="Explore HomeSyncHub for expert advice, in-depth reviews, and smart home automation tips to transform your living space into a connected, intelligent haven."
        />
        <meta
          name="keywords"
          content="smart home, home automation, IoT devices, 
        home gadgets, smart home solutions, connected home, intelligent living, 
        smart home reviews, home tech tips, smart home guide, smart home blog, 
        smart home systems, home security, energy efficiency, home entertainment"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="text-white">
        <section
          name="Hero"
          class="bg-secondary bg-[url('https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover"
        >
          <div className="pt-24 md:mt-0 md:h-screen flex justify-center text-center md:text-left md:flex-row md:justify-between items-center lg:px-48 md:px-12 px-4 backdrop-blur-sm bg-opacity-50 bg-gray-500">
            <div class="md:flex-1 md:mr-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-center">
              <h1 class="font-pt-serif text-5xl font-bold mb-7 drop-shadow-md mb-0">
                Empower your home
                <br />
                <span class="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100% text-red-500">
                  With Smart Solutions
                </span>
              </h1>
              <p class="font-pt-serif font-normal mb-7">
                Discover Insights, Tips, and Reviews for a Connected,
                Intelligent Living Space
              </p>
              <div class="font-montserrat">
                <button class="bg-red-500/75 px-6 py-4 rounded-lg border-2 border-red-500/25 border-solid text-white mr-2 mb-2">
                  View our Blog
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24 md:mt-0 md:h-screen flex justify-center  md:text-left md:flex-row md:justify-between lg:px-48 md:px-12 px-4 text-black">
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  );
}
