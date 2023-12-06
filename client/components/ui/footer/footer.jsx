import { useRef } from "react";
import styles from "./footer.module.css";
import layoutStyles from "../layout/layout.module.css";
import Github from "@/assets/icons/github";
import Link from "next/link";
import Linkedin from "@/assets/icons/linkedin";
import Twitter from "@/assets/icons/twitter";

const Footer = () => {
  const footerRef = useRef();
  const handleMouseMove = (e) => {
    const { x, y } = footerRef.current.getBoundingClientRect();
    footerRef.current.style.setProperty("--x", e.clientX - x);
    footerRef.current.style.setProperty("--y", e.clientY - y);
  };
  return (
    <footer
      // ref={footerRef}
      // onMouseMove={handleMouseMove}
      className={styles.footer}
    >
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <Link href={"https://github.com/itsandrewm"}>
            <Github />
          </Link>
        </div>

        <div className={styles.icon}>
          <Link href={"https://www.linkedin.com/in/andrewrmcmillan/"}>
            <Linkedin />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href={"https://twitter.com/itsandrew_dev"}>
            <Twitter />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
