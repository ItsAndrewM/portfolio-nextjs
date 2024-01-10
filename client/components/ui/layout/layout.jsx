import Head from "next/head";
import styles from "./layout.module.css";
import Script from "next/script";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useRef } from "react";

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
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Andrew McMillan's Portfolio" />
        <meta
          property="og:image"
          content={`https://mcmillanfarms.xyz/api/og`}
        />
        <meta name="og:title" content="Andrew McMillan's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Andrew McMillan</title>
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
