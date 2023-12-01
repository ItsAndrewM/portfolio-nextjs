import { useRef } from "react";
import styles from "./footer.module.css";
import layoutStyles from "../layout/layout.module.css";

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
    >
      This is the footer
    </footer>
  );
};

export default Footer;
