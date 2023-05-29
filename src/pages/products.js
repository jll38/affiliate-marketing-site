import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProducts } from "../../sanity/sanity-utils";
import PlaceholderCard from "@/components/PlaceholderCard";
import Divider from "@/components/Divider";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeHolders = [];
  for (let i = 0; i < 20; i++) {
    placeHolders.push(<PlaceholderCard />);
  }

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
      console.log(products);
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
          content="Explore HomeSyncHub's Featured Products and latest sales happening now!."
        />
      </Head>
      <Navbar />
      <main
        name="Homesync Products"
        className="pt-32 md:m-0 md:min-h-screen md:text-left lg:px-48 md:px-12 px-4 text-black bg-gray-100 animate-fadein"
      >
        <h1 className="text-6xl font-semibold text-center mb-5 text-gray-800">
          Home Sync Hub
        </h1>
        <Divider />
        <div className="flex justify-between mx-5">
          <ul
            name="categories"
            className="flex gap-5 text-gray-600 child-hover:text-gray-900"
          >
            <li>Entertainment</li>
            <li>Comfort</li>
            <li>Security</li>
            <li>Health & Wellness</li>
          </ul>
          <ul name="socials" className="flex gap-2 text-red-600">
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
        <Divider />
        <h1 className="text-2xl font-medium mt-5 text-gray-800">Featured Products</h1>
        <div className="flex flex-row flex-wrap lg:justify-start md:items-center justify-center">
          {loading ? (
            <>{placeHolders.map((placeholder) => placeholder)}</>
          ) : (
            <>
              {products.map((product) => (
                <Link href={"/products/" + product.slug} key={product._id}>
                  <ProductCard
                    img={product.image}
                    category={product.category}
                    price={product.price}
                  >
                    {product.name}
                  </ProductCard>
                </Link>
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
