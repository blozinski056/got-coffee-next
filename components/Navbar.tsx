import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.menu_container} id="menu_container">
      <ul>
        <li className="menu_tab">
          <Link href="/">Home</Link>
        </li>
        <li className="menu_tab">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="menu_tab">
          <Link href="/about">About</Link>
        </li>
        <li className="menu_tab">
          <Link href="/location">Location</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
