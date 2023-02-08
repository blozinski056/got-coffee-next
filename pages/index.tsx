import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

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
        <h1>got coffee?</h1>
        <div className={styles.image_container}>
          <img
            src="/tina-guina-obV_LM0KjxY-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <img
            src="/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <img
            src="/empreinte-02O1bXB_fgk-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <img
            src="/nathan-dumlao-Ic8RmXGyfNc-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
          />
          <img
            src="/pariwat-pannium-lKQFFWoCjr8-unsplash.jpg"
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
