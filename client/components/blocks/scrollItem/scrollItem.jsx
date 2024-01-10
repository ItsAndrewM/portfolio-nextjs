import { useRef } from "react";
import homeStyles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import styles from "../../pages/work/work.module.css";
import navbarStyles from "../../ui/navbar/navbar.module.css";
import aboutStyles from "../../pages/about/about.module.css";
import Link from "next/link";
import Chain from "@/assets/icons/chain";

const ScrollItem = ({ val }) => {
  const ref = useRef();
  const router = useRouter();

  return (
    <li
      key={val.id}
      id={val.id}
      className={`${router.asPath.includes(val.link) && homeStyles.active} ${
        homeStyles.card
      }`}
    >
      <h3>{val.name}</h3>
      <p>{val.description}</p>
      <span className={styles.url}>
        <Link href={val.url} className={navbarStyles.link}>
          <span className={styles.icon}>
            <Chain />
          </span>
          <span>{val.name}</span>
        </Link>
      </span>
      <ul className={aboutStyles.grid}>
        {val.tech.map((e) => {
          return (
            <li key={e}>
              <span className={aboutStyles.item}>{e}</span>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default ScrollItem;
