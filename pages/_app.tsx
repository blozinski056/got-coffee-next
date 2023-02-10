import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  // turn off loading screen after animation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // animate navbar after loading page disappears
  useEffect(() => {
    // when finished loading, animate hero page and menu icon
    if (!loading) {
      // animate menu icon to appear
      // const menu = document.getElementById("menu") as HTMLElement;
      // menu.animate(
      //   [
      //     {
      //       opacity: 0,
      //     },
      //     {
      //       opacity: 1,
      //     },
      //   ],
      //   {
      //     duration: 500,
      //     fill: "forwards",
      //     delay: 2500,
      //     easing: "ease-in",
      //   }
      // );
      // menu.animate(
      //   [
      //     {
      //       transform: "rotate(0deg)",
      //     },
      //     {
      //       transform: "rotate(90deg)",
      //     },
      //   ],
      //   {
      //     duration: 300,
      //     fill: "forwards",
      //     delay: 3000,
      //     easing: "ease",
      //   }
      // );

      let menuTabs = document.querySelectorAll(".menu_tab");
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
            delay: 100 * (menuTabs.length - i + 1) + 2500,
          }
        );
      }
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
