import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Image from "next/image";

import hero1 from "../images/tina-guina-obV_LM0KjxY-unsplash.jpg";
import hero2 from "../images/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";
import hero3 from "../images/empreinte-02O1bXB_fgk-unsplash.jpg";
import hero4 from "../images/nathan-dumlao-Ic8RmXGyfNc-unsplash.jpg";
import hero5 from "../images/pariwat-pannium-lKQFFWoCjr8-unsplash.jpg";

export default function Home() {
  useEffect(() => {
    const pics = document.querySelectorAll("#hero_image");
    // animate each picture to first appear, then translate vertically
    for (let i = 0; i < pics.length; i++) {
      const currPic = pics[i] as HTMLElement;
      currPic.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 0.7,
          },
        ],
        {
          duration: 1000,
          fill: "forwards",
          delay: 500,
          easing: "ease-in",
        }
      );
      currPic.animate(
        [
          {
            transform: "none",
          },
          {
            transform: `translateY(calc(10% * (${i} - 2)))`,
          },
        ],
        {
          duration: 500,
          fill: "forwards",
          delay: 2000,
          easing: "ease-out",
        }
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>got coffee?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coffee-bean.png" />
      </Head>
      <section className={styles.hero}>
        <div className={styles.title_container}>
          <h1>got coffee?</h1>
          <h3>COFFEE SHOP</h3>
        </div>
        <div className={styles.image_container}>
          <Image
            priority
            src={hero1}
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={4096}
            height={273}
          />
          <Image
            priority
            src={hero2}
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={3673}
            height={5509}
          />
          <Image
            priority
            src={hero3}
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={3207}
            height={4811}
          />
          <Image
            priority
            src={hero4}
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={4480}
            height={6720}
          />
          <Image
            priority
            src={hero5}
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={3016}
            height={4528}
          />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {},
  };
}
