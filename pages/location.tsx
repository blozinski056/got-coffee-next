import styles from "@/styles/Location.module.css";
import Head from "next/head";

function Location() {
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
            <div className={styles.hours}>
              Monday: 7am - 3pm <br />
              Tuesday: Closed <br />
              Wednesday: 7am - 3pm <br />
              Thursday: 7am - 3pm <br />
              Friday: 7am - 3pm <br />
              Saturday: 8am - 4pm <br />
              Sunday: 8am -4pm <br />
            </div>
          </div>
          <div className={styles.phone_container}>
            <div className={styles.phone}>(206) 448-8762</div>
          </div>
          <div className={styles.market_container}>
            <img
              src="/colin-lloyd-JHWZv4fBZIk-unsplash.jpg"
              alt=""
              className={styles.market_img}
            />
          </div>
          <div className={styles.needle_container}>
            <img
              src="/robert-ritchie-JEicDFy5Cd8-unsplash.jpg"
              alt=""
              className={styles.needle_img}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
