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
      </section>
    </>
  );
}

export default Location;
