import Head from "next/head";
import Image from "next/image";
import img from "@/public/images/candle.jpg";
import { roboto, monteserrat } from "@/utils/font";

export default function Home() {
  const imgUrl =
    "https://plus.unsplash.com/premium_photo-1763136100653-f25f301e011c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <Head>
        {/* CDN links for google font  */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sevillana&display=swap"
          rel="stylesheet"
        /> */}
        <title>Create Next App</title>
      </Head>

      <h2>Image Optimisation</h2>
      {/* image tag  */}
      {/* <img src="/unsplash.jpg" width={200} height={200} alt="candle" /> */}
      <img src="/images/candle.jpg" width={200} height={200} alt="candle" />

      <Image src={img} height={200} width={200}></Image>

      {/* It allow images to be added from trusted resources (see next.config.js file) */}
      <Image src={imgUrl} width={200} height={200} layout="responsive"></Image>

      <Image src="/unsplash.jpg" width={200} height={200} priority></Image>

      <h2>Font Optimisation</h2>
      <p style={{ fontFamily: "Sevillana" }}>Hello World</p>

      <p className={roboto.className}>Lorem Ipsum</p>
      <p style={{ fontFamily: `${monteserrat.variable}` }}>Lorem Ipsum</p>
    </>
  );
}
