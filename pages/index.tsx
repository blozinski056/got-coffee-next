import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Image from "next/image";

import hero1 from "../public/tina-guina-obV_LM0KjxY-unsplash.jpg";
import hero2 from "../public/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";
import hero3 from "../public/empreinte-02O1bXB_fgk-unsplash.jpg";
import hero4 from "../public/nathan-dumlao-Ic8RmXGyfNc-unsplash.jpg";
import hero5 from "../public/pariwat-pannium-lKQFFWoCjr8-unsplash.jpg";

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
          />
          <Image
            priority
            src={hero2}
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <Image
            priority
            src={hero3}
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <Image
            priority
            src={hero4}
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <Image
            priority
            src={hero5}
            alt=""
            className={styles.hero_image}
            id="hero_image"
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
