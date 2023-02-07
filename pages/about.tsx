import styles from "@/styles/About.module.css";
import { useEffect } from "react";

function About() {
  return (
    <div id="wrapper" className={styles.wrapper}>
      <section className={styles.about}>
        <div className={styles.img_container}>
          <img
            src="/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg"
            alt=""
            className={styles.img}
          />
        </div>

        <div className={styles.title_container}>
          <div className={styles.title}>
            About&nbsp;<span> got coffee?</span>
          </div>
        </div>

        <div className={styles.paragraph_container}>
          <div className={styles.paragraph}>
            In February of 2020, we opened our doors in a cozy space in the
            heart of Seattle, Washington. Thanks to our loyal employees, we
            managed to weather the storm of the COVID-19 quarantine and stay in
            business by delivering fresh, hot cups of coffee to all of our
            customers nearby!
            <br />
            <br />
          </div>
        </div>
      </section>
      <section className={styles.founder}>
        <div className={styles.img_container}>
          <img
            src="/gian-cescon-GxQ13MXLTHQ-unsplash.jpg"
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.founder_title_container}>
            <div className={styles.founder_title}>
              Founder of&nbsp;<span>got coffee?</span>
            </div>
          </div>
          <div className={styles.founder_name}>JULIA EMSIB</div>
          <div className={styles.founder_intro_container}>
            <div className={styles.founder_intro}>
              Julia Emsib is an astounding entrepreneur.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
