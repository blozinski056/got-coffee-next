import styles from "@/styles/Menu.module.css";

function Menu() {
  return (
    <section className={styles.menu}>
      <div className={styles.items_container}>
        <h1>Menu</h1>
        <div className={styles.coffee}>
          <h3>Coffee</h3>
          <ul className={styles.item_list}>
            <li>Espresso</li>
            <li>Doppio</li>
            <li>Cortado</li>
            <li>Americano</li>
            <li>Macchiato</li>
            <li>Mocha</li>
            <li>Latte</li>
            <li>Cappuccino</li>
            <li>Pour Over</li>
            <li>Cold Brew</li>
            <li>Iced Coffee</li>
          </ul>
          <ul className={styles.price_list}>
            <li>$4</li>
            <li>$6</li>
            <li>$5</li>
            <li>$4</li>
            <li>$5</li>
            <li>$7</li>
            <li>$7</li>
            <li>$7</li>
            <li>$3</li>
            <li>$5</li>
            <li>$3</li>
          </ul>
        </div>
        <div className={styles.food}>
          <h3>Food</h3>
          <ul className={styles.item_list}>
            <li>Muffin</li>
            <li>Scone</li>
            <li>Coffee Cake</li>
            <li>Bagel</li>
            <li>Donut</li>
            <li>Croissant</li>
            <li>Cupcake</li>
          </ul>
          <ul className={styles.price_list}>
            <li>$5</li>
            <li>$5</li>
            <li>$5</li>
            <li>$3</li>
            <li>$3</li>
            <li>$4</li>
            <li>$4</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Menu;

export async function getStaticProps(context: any) {
  return {
    props: {},
  };
}
