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
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  // }, []);

  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2500);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [router.pathname]);

  useEffect(() => {
    setLoading(true);
  }, [Component]);

  // animate navbar after loading page disappears
  useEffect(() => {
    // check if loading is complete
    if (!loading) {
      if (router.pathname === "/") {
        // if at the home page then animate images and menu afterwards
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
        // if not at the home page then make menu appear immediately
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
      <>
        {loading && <Loading />}
        <Navbar />
        <Component {...pageProps} setLoading={setLoading} />
      </>
    </>
  );
}
