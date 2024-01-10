import Head from "next/head";
import styles from "./layout.module.css";
import Script from "next/script";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useRef } from "react";

export const site_description =
  "👋 Hello! I'm a full-stack web developer from Kelowna, BC! I'm a Software Developer specializing in building full-stack e-commerce web applications. ";

export const site_title = "Andrew McMillan: Software Developer";
const Layout = ({ children }) => {
  const containerRef = useRef();
  const handleMouseMove = (e) => {
    const { x, y } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--x", e.clientX - x);
    containerRef.current.style.setProperty("--y", e.clientY - y);
  };

  return (
    <>
      <Head>
        <title>{site_title}</title>
        <meta name="description" content={site_description} />
        <meta property="og:title" content={site_title} />
        <meta property="og:description" content={site_description} />
        <meta property="og:image" content={"/images/og_image.png"} />
        <meta property="og:url" content={"https://andrewrmcmillan.com"} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site_title} />
        <meta name="twitter:site" content="@itsAndrew_dev" />
        <meta name="twitter:description" content={site_description} />
        <meta name="twitter:image" content={"/images/og_image.png"} />
        <link rel="canonical" href={"https://andrewrmcmillan.com"} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="google-analytics-container">
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YW2MZW6N3V"
        />
        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-YW2MZW6N3V');`}
        </Script>
      </div>

      <Navbar />
      <main
        className={`${styles.main} `}
        // onMouseMove={handleMouseMove}
        // ref={containerRef}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
