import styles from "@/styles/About.module.css";
import Head from "next/head";
import Image from "next/image";

function About() {
  return (
    <>
      <Head>
        <title>got coffee?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coffee-bean.png" />
      </Head>
      <div id="wrapper" className={styles.wrapper}>
        <section className={styles.about}>
          <div className={styles.title_container}>
            <div className={styles.title}>
              About&nbsp;<span> got coffee?</span>
            </div>
          </div>
          <div className={styles.paragraph_container}>
            <div className={styles.paragraph}>
              In February of 2020, we opened the doors of our cozy, little space
              in the heart of Seattle, Washington. Thanks to our loyal
              employees, we managed to weather the storm of the COVID-19
              quarantine and stay in business by delivering fresh, hot cups of
              coffee to all of our customers nearby!
              <br />
              <br />
              Now that COVID-19 restrictions are less strict, our doors are open
              for new and returning customers to come sit, relax, and chat!
              <br />
              <br />
              If you visit us on the weekend, be sure to ask us about our pastry
              of the day! We have a new pastry every Saturday and Sunday!
            </div>
          </div>
          <div className={styles.img_container}>
            <Image
              src="/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg"
              alt=""
              className={styles.img}
              width={5472}
              height={3648}
              priority={true}
            />
          </div>
        </section>
        <section className={styles.founder}>
          <div className={styles.info}>
            <div className={styles.founder_title_container}>
              <div className={styles.founder_title}>
                Founder of&nbsp;<span>got coffee?</span>
              </div>
            </div>
            <div className={styles.founder_name_container}>
              <div className={styles.founder_name}>JULIA EMSIB</div>
            </div>
            <div className={styles.founder_intro_container}>
              <div className={styles.founder_intro}>
                Julia Emsib was born in California and eventually moved to
                Washington to attend UW. While studying at various coffee shops
                on campus for her BS in Economics, she was never satisfied with
                their quality of coffee. Her competetive and creative nature
                drove her to dive into the world of coffee and start
                brainstorming for what would become&nbsp;
                <strong>got coffee?</strong>.
                <br />
                <br />
                During her free time, Julia loves to read books, trek through
                forests and mountains, and spend time with her cat, Chewy. She
                also likes to experiment with new baking recipes and search for
                the next best nitro stout in Washington.
                <br />
                <br />
                Be sure to say, &quot;Hi,&quot; the next time you see Julia!
              </div>
            </div>
          </div>
          <div className={styles.img_container}>
            <Image
              src="/gian-cescon-GxQ13MXLTHQ-unsplash.jpg"
              alt=""
              className={styles.img}
              width={2880}
              height={3600}
              priority={true}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;

export async function getStaticProps(context: any) {
  return {
    props: {},
  };
}
