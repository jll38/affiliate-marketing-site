import { useRouter } from "next/router";
import { getProducts, getProductsById } from "../../../sanity/sanity-utils";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import TextPlaceholder from "@/components/TextPlaceholder";
import ProductCard from "@/components/ProductCard";
import Date from "@/components/date";
import AmazonBox from "@/components/AmazonBox";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";

function Product() {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState();
  const [suggestedProducts, setSuggestedProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      if (slug) {
        const post = await getProductsById(slug);
        if (!post) {
          router.push("/blog/post-not-found");
        } else {
          setProduct(post);
          setLoading(false);
        }
      }
    }

    fetchProducts();
  }, [slug]);

  useEffect(() => {
    async function fetchProductList() {
      const productList = await getProducts();
      setSuggestedProducts(productList);
      console.log(productList);
      setLoadingList(false);
    }

    fetchProductList();
  }, []);
  
  return (
    <>
      <Head>
        <title>Featured Products</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore HomeSyncHub for expert advice, in-depth reviews, and smart home automation tips to transform your living space into a connected, intelligent haven."
        />
      </Head>
      <Navbar />
      <main className="animate-fadein pt-36 bg-gray-100 pb-5">
        <div className="md:mt-0 md:min-h-screen lg:px-48 md:px-12 px-4 bg-opacity-50 flex flex-wrap flex-row ">
          {loading ? (
            <>
              <div>
                <div
                  role="status"
                  class="space-y-2.5 animate-pulse max-w-lg mb-8"
                >
                  <div class="flex items-center w-full space-x-2">
                    <div class="h-6 bg-gray-400 rounded-full  w-3/4"></div>
                  </div>
                </div>

                <TextPlaceholder />
                <TextPlaceholder />
                <TextPlaceholder />
              </div>
            </>
          ) : (
            <>
              <article className="flex-0 max-w-4xl">
                <div name="Product Header" className="mb-6">
                  <img
                    src={product.image}
                    className="rounded-xl shadow-md mb-5 md:max-w-md"
                  ></img>
                  <h1 className="text-3xl font-semibold break-words">
                    {product.name}
                  </h1>
                  <p className="text-gray-500">${product.price}</p>
                  {product.url && <AmazonBox link={product.url}></AmazonBox>}
                </div>
                <div className="text-gray-800 md:w-3/4 break-words">
                  {product && <PortableText value={product.content} />}
                </div>
              </article>
              <div className="flex-1 md:ml-5 mt-5 flex flex-col items-center">
                {suggestedProducts.map((prod) => {
                  return prod.category !== product.category || prod.slug === product.slug ? (
                    <></>
                  ) : (
                    <Link href={"/products/" + prod.slug} key={prod._id}>
                      <ProductCard
                        img={prod.image}
                        category={prod.category}
                        price={prod.price}
                      >
                        {prod.name}
                      </ProductCard>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Product;
