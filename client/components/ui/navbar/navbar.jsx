import { navigationLinks } from "@/data/navigationLinks";
import layoutStyles from "../layout/layout.module.css";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const headerRef = useRef();
  const router = useRouter();
  console.log(router);
  const handleMouseMove = (e) => {
    const { x, y } = headerRef.current.getBoundingClientRect();
    headerRef.current.style.setProperty("--x", e.clientX - x);
    headerRef.current.style.setProperty("--y", e.clientY - y);
  };
  return (
    <header
      className={` ${styles.wrapper}`}
      // onMouseMove={handleMouseMove}
      // ref={headerRef}
    >
      <nav className={styles.navigation}>
        <ol className={styles.list}>
          {navigationLinks.map((link) => {
            return (
              <li key={link.link} className={styles.listItem}>
                <Link
                  href={link.link}
                  className={`${
                    router.asPath.includes(link.link)
                      ? styles.active
                      : styles.link
                  } `}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ol>
        <Link
          href={"/Resume - Andrew.pdf"}
          download
          className={`${styles.link} ${styles.resume}`}
        >
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
