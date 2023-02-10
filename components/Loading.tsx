import styles from "@/styles/Loading.module.css";
import Image from "next/image";
import bean from "../images/coffee-bean.png";

function Loading() {
  return (
    <section className={styles.loading}>
      <h3>Brewing...</h3>
      <div className={styles.bean_container}>
        <Image
          priority
          src={bean}
          alt=""
          className={styles.bean}
          width={48}
          height={48}
        />
        <Image
          priority
          src={bean}
          alt=""
          className={styles.bean}
          width={48}
          height={48}
        />
        <Image
          priority
          src={bean}
          alt=""
          className={styles.bean}
          width={48}
          height={48}
        />
        <Image
          priority
          src={bean}
          alt=""
          className={styles.bean}
          width={48}
          height={48}
        />
        <Image
          priority
          src={bean}
          alt=""
          className={styles.bean}
          width={48}
          height={48}
        />
      </div>
    </section>
  );
}

export default Loading;
