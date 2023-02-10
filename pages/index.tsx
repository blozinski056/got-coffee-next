import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Image from "next/image";

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
            src="/tina-guina-obV_LM0KjxY-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={4096}
            height={273}
            priority={true}
          />
          <Image
            src="/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={3673}
            height={5509}
            priority={true}
          />
          <Image
            src="/empreinte-02O1bXB_fgk-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={3207}
            height={4811}
            priority={true}
          />
          <Image
            src="/nathan-dumlao-Ic8RmXGyfNc-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={4480}
            height={6720}
            priority={true}
          />
          <Image
            src="/pariwat-pannium-lKQFFWoCjr8-unsplash.jpg"
            alt=""
            className={styles.hero_image}
            id="hero_image"
            width={3016}
            height={4528}
            priority={true}
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
