import styles from "@/styles/Loading.module.css";

function Loading() {
  return (
    <section className={styles.loading}>
      <h3>Brewing...</h3>
      <div className={styles.bean_container}>
        <img src="/coffee-bean.png" alt="" className={styles.bean} />
        <img src="/coffee-bean.png" alt="" className={styles.bean} />
        <img src="/coffee-bean.png" alt="" className={styles.bean} />
        <img src="/coffee-bean.png" alt="" className={styles.bean} />
        <img src="/coffee-bean.png" alt="" className={styles.bean} />
      </div>
    </section>
  );
}

export default Loading;
