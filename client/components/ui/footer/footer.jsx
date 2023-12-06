import { useRef } from "react";
import styles from "./footer.module.css";
import layoutStyles from "../layout/layout.module.css";
import Github from "@/assets/icons/github";
import Link from "next/link";

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
      <div className={styles.icon}>
        <Link href={"https://github.com/itsandrewm"}>
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
