import styles from "@/styles/Loading.module.css";
import Image from "next/image";

function Loading() {
  return (
    <section className={styles.loading}>
      <h3>Brewing...</h3>
      <div className={styles.bean_container}>
        <Image
          src="/coffee-bean.png"
          alt=""
          className={styles.bean}
          width={48}
          height={48}
          loading={"eager"}
        />
        <Image
          src="/coffee-bean.png"
          alt=""
          className={styles.bean}
          width={48}
          height={48}
          loading={"eager"}
        />
        <Image
          src="/coffee-bean.png"
          alt=""
          className={styles.bean}
          width={48}
          height={48}
          loading={"eager"}
        />
        <Image
          src="/coffee-bean.png"
          alt=""
          className={styles.bean}
          width={48}
          height={48}
          loading={"eager"}
        />
        <Image
          src="/coffee-bean.png"
          alt=""
          className={styles.bean}
          width={48}
          height={48}
          loading={"eager"}
        />
      </div>
    </section>
  );
}

export default Loading;
