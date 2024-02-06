import "@/styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-YW2MZW6N3V" />
      <GoogleTagManager gtmId="GTM-5FFLPW4Q" />
    </>
  );
}
