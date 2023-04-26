import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "@/components/date";
import { Navbar } from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { ca } from "date-fns/locale";
import Featured from "@/components/featured";
import { getProducts } from "../../sanity/sanity-utils";
import PlaceholderCard from "@/components/PlaceholderCard";
import Divider from "@/components/Divider";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeHolders = [];
  for(let i = 0; i < 20; i++){
    placeHolders.push(<PlaceholderCard />);
  }

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Featured Products</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore HomeSyncHub's Blog for the latest in-depth review and smart home automation tips to transform your living space into a connected, intelligent haven."
        />
      </Head>
      <Navbar />
      <main
        name="Homesync Blog"
        className="pt-32 md:m-0 md:min-h-screen md:text-left lg:px-48 md:px-12 px-4 text-black bg-gray-100 animate-fadein"
      >
        <h1 className="text-3xl font-semibold text-center md:text-left">Featured Products</h1>
        <Divider />
        <div className="flex flex-row flex-wrap lg:justify-start md:items-center justify-center">
          {loading ? (
            <>
              {placeHolders.map((placeholder) => (placeholder))}

            </>
          ) : (
            <>
              {products.map((product) => (
                  <div key={product._id}>{product.name}</div>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
}
