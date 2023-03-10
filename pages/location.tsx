import styles from "@/styles/Location.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";

import location1 from "../public/colin-lloyd-JHWZv4fBZIk-unsplash.jpg";
import location2 from "../public/robert-ritchie-JEicDFy5Cd8-unsplash.jpg";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Location({ setLoading }: Props) {
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);

  useEffect(() => {
    if (imagesLoaded === 2) {
      setLoading(false);
    }
  }, [imagesLoaded, setLoading]);

  useEffect(() => {
    const h = document.getElementById("hours") as HTMLElement;
    h.innerHTML =
      "Monday: 7am - 3pm <br /> Tuesday: Closed <br /> Wednesday: 7am - 3pm <br /> Thursday: 7am - 3pm <br /> Friday: 7am - 3pm <br /> Saturday: 8am - 4pm <br /> Sunday: 8am -4pm <br />";
    window.addEventListener("resize", () => {
      const h = document.getElementById("hours") as HTMLElement;
      if (window.innerWidth < 1000) {
        h.innerHTML =
          "M: 7am - 3pm <br /> Tu: Closed <br /> W: 7am - 3pm <br /> Th: 7am - 3pm <br /> F: 7am - 3pm <br /> Sa: 8am - 4pm <br /> Su: 8am -4pm <br />";
      } else {
        h.innerHTML =
          "Monday: 7am - 3pm <br /> Tuesday: Closed <br /> Wednesday: 7am - 3pm <br /> Thursday: 7am - 3pm <br /> Friday: 7am - 3pm <br /> Saturday: 8am - 4pm <br /> Sunday: 8am -4pm <br />";
      }
    });
  });

  return (
    <>
      <Head>
        <title>got coffee?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coffee-bean.png" />
      </Head>
      <section className={styles.location}>
        <div className={styles.location_grid}>
          <div className={styles.title_container}>
            <div className={styles.title}>Location</div>
          </div>
          <div className={styles.address_container}>
            <div className={styles.address}>
              1912 Pike Place,
              <br />
              Seattle, WA 98101
            </div>
          </div>
          <div className={styles.directions_container}>
            <div className={styles.directions}>
              Located just north of the Pike Place and Stewart Street
              intersection.
            </div>
          </div>
          <div className={styles.hours_container}>
            <div className={styles.hours} id="hours"></div>
          </div>
          <div className={styles.phone_container}>
            <div className={styles.phone}>(206) 448-8762</div>
          </div>
          <div className={styles.market_container}>
            <Image
              priority
              src={location1}
              alt=""
              className={styles.market_img}
              onLoadingComplete={() =>
                setImagesLoaded((prevImagesLoaded) => prevImagesLoaded + 1)
              }
            />
          </div>
          <div className={styles.needle_container}>
            <Image
              priority
              src={location2}
              alt=""
              className={styles.needle_img}
              onLoadingComplete={() =>
                setImagesLoaded((prevImagesLoaded) => prevImagesLoaded + 1)
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;

export async function getStaticProps(context: any) {
  return {
    props: {},
  };
}
