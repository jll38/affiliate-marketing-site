import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Divider from "@/components/Divider";
import Head from "next/head";
import Image from "next/image";
function about(props) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <main className="md:mt-0 md:min-h-screen bg-opacity-50 py-36 bg-gray-100">
        <div className="text-gray-800 w-1/2 mx-auto">
          <div className="mb-5">
            <div>
              <Image src="/images/logo.webp" width={400} height={50} />
            </div>
            <Divider />
          </div>
          Welcome to Home Sync Hub, your comprehensive destination for the
          latest advancements in smart home technology and automation. Our goal
          is to help you transform your living space into an efficient,
          comfortable, and enjoyable sanctuary. At Home Sync Hub, our enthusiasm
          for smart home innovations fuels our dedication to revolutionizing
          daily life. By integrating the right devices and systems, you can save
          time, energy, and money while elevating your home&apos;s comfort and
          convenience. That&apos;s why our website serves as your one-stop
          resource for all your smart home needs.
          <br />
          <br />
          Browse our extensive collection of top-quality smart home products
          from industry leaders such as Google, Amazon, and Samsung, available
          for purchase through our affiliate links. In addition, our website
          provides an abundance of insightful content covering various aspects
          of smart home technology and automation, including product reviews,
          step-by-step tutorials, and current industry news.
          <br />
          <br />
          Our devoted team of smart home enthusiasts is committed to helping you
          fully harness thepotential of your smart home technology. We endeavor
          to deliver a remarkable user experience on our website and assist you
          in choosing the ideal products and systems tailored to your
          requirements. We appreciate your trust in Home Sync Hub as your
          reliable source for smart home technology and automation. If you have
          any questions or feedback, please don&apos;t hesitate to contact us.
          We&apos;re always here to support you on your journey towards a
          smarter home.
        </div>
      </main>
      <Footer />
    </>
  );
}

export default about;
