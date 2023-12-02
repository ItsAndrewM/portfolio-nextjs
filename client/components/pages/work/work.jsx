import layoutStyles from "@/components/ui/layout/layout.module.css";
import aboutStyles from "../about/about.module.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./work.module.css";
import Link from "next/link";
import navbarStyles from "@/components/ui/navbar/navbar.module.css";
import { useRouter } from "next/router";
import { freelance } from "@/data/freelance";
import { work } from "@/data/work";
import homeStyles from "@/styles/Home.module.css";
import Chain from "@/assets/icons/chain";

const Work = () => {
  const router = useRouter();
  return (
    <section id="work" className={`${styles.section} ${layoutStyles.section}`}>
      <div className={aboutStyles.container}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.container}>
            <h1
              className={`${layoutStyles.headline} ${utilStyles.greenText} ${layoutStyles.work}`}
            >
              Projects
            </h1>
          </div>
          <div className={layoutStyles.container}>
            <div className={styles.grid}>
              <ul className={styles.fixed}>
                <h2 className={styles.headline}>Freelance Projects</h2>
                {freelance.map((val) => {
                  return (
                    <li key={val.id}>
                      <Link
                        href={val.link}
                        className={
                          router.asPath.includes(val.link)
                            ? navbarStyles.active
                            : navbarStyles.link
                        }
                      >
                        {val.name}
                      </Link>
                    </li>
                  );
                })}
                <h2 className={styles.headline}>Work Projects</h2>
                {work.map((val) => {
                  return (
                    <li key={val.id}>
                      <Link
                        href={val.link}
                        className={
                          router.asPath.includes(val.link)
                            ? navbarStyles.active
                            : navbarStyles.link
                        }
                      >
                        {val.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className={styles.scroll}>
                {work.map((val) => {
                  return (
                    <li
                      key={val.id}
                      id={val.id}
                      className={`${
                        router.asPath.includes(val.link) && homeStyles.active
                      } ${homeStyles.card}`}
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
                            <li>
                              <span className={aboutStyles.item}>{e}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
                {freelance.map((val) => {
                  return (
                    <li
                      key={val.id}
                      id={val.id}
                      className={`${
                        router.asPath.includes(val.link) && homeStyles.active
                      } ${homeStyles.card}`}
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
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
