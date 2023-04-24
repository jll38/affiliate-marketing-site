import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
