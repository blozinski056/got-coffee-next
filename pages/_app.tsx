import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // turn off loading screen after animation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // animate navbar after loading page disappears
  useEffect(() => {
    // when finished loading, animate hero page and menu icon
    if (!loading) {
      if (router.pathname === "/") {
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
      } else {
        let menuTabs = document.querySelectorAll(".menu_tab");
        for (let i = 0; i < menuTabs.length; i++) {
          menuTabs[i].animate(
            {
              opacity: 1,
              cursor: "pointer",
              pointerEvents: "initial",
            },
            {
              fill: "forwards",
              easing: "ease-in",
            }
          );
        }
      }
    }
  }, [loading, router.pathname]);

  return (
    <>
      <Head>
        <title>got coffee?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coffee-bean.png" />
      </Head>
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
