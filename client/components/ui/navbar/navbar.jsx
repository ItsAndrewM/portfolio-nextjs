import { navigationLinks } from "@/data/navigationLinks";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.wrapper}>
      <nav className={styles.navigation}>
        <ol>
          {navigationLinks.map((link) => {
            return (
              <li key={link.link}>
                <Link href={link.link} className={`${styles.link}`}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
