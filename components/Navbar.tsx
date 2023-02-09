import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    let menu = document.getElementById("menu") as HTMLElement;
    let menuTabs = document.querySelectorAll(".menu_tab");

    // animate menu icon based on if it is open
    if (menuOpen) {
      menu.animate(
        [
          {
            transform: "rotate(90deg)",
          },
          {
            transform: "rotate(0deg)",
          },
        ],
        {
          duration: 300,
          fill: "forwards",
          easing: "ease",
        }
      );
      for (let i = 0; i < menuTabs.length; i++) {
        menuTabs[i].animate(
          {
            opacity: 0,
            cursor: "default",
            pointerEvents: "none",
          },
          {
            duration: 200,
            fill: "forwards",
            easing: "ease-in",
            delay: 100 * i,
          }
        );
      }
      // close menu
      setMenuOpen(false);
    } else {
      menu.animate(
        [
          {
            transform: "rotate(0deg)",
          },
          {
            transform: "rotate(90deg)",
          },
        ],
        {
          duration: 300,
          fill: "forwards",
          easing: "ease",
        }
      );
      for (let i = 0; i < menuTabs.length; i++) {
        menuTabs[i].animate(
          {
            opacity: 1,
            cursor: "pointer",
            pointerEvents: "initial",
          },
          {
            duration: 200,
            fill: "forwards",
            easing: "ease-in",
            delay: 100 * (menuTabs.length - i + 1),
          }
        );
      }
      // open menu
      setMenuOpen(true);
    }
  };

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
      <img
        src="/menu.png"
        alt="menu"
        id="menu"
        className={styles.menu}
        onClick={() => openMenu()}
      />
    </div>
  );
}

export default Navbar;
