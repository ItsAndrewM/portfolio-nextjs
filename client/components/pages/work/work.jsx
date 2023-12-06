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
import ScrollItem from "@/components/blocks/scrollItem/scrollItem";
import { createRef, useEffect, useMemo, useState } from "react";

const Work = () => {
  const router = useRouter();

  const refsById = useMemo(() => {
    const refs = {};
    work.forEach((item) => {
      refs[item.id] = createRef(null);
    });
    freelance.forEach((item) => {
      refs[item.id] = createRef(null);
    });
    return refs;
  }, [work]);

  return (
    <section id="work" className={`${styles.section} ${layoutStyles.section}`}>
      <div className={`${styles.window} ${aboutStyles.container}`}>
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
                      <button
                        className={`${styles.button} ${
                          router.query.target === val.id
                            ? navbarStyles.active
                            : navbarStyles.link
                        }`}
                        name={val.id}
                        onClick={(e) => {
                          router.push(
                            {
                              query: { target: val.id },
                            },
                            undefined,
                            {
                              scroll: false,
                            }
                          );
                          refsById[e.target.name].current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                        }}
                      >
                        {val.name}
                      </button>
                    </li>
                  );
                })}
                <h2 className={styles.headline}>Work Projects</h2>
                {work.map((val) => {
                  return (
                    <li key={val.id}>
                      <button
                        className={`${styles.button} ${
                          router.query.target === val.id
                            ? navbarStyles.active
                            : navbarStyles.link
                        }`}
                        name={val.id}
                        onClick={(e) => {
                          router.push(
                            {
                              query: { target: val.id },
                            },
                            undefined,
                            {
                              scroll: false,
                            }
                          );
                          refsById[e.target.name].current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                        }}
                      >
                        {val.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul className={styles.scroll}>
                {freelance.map((val) => {
                  return (
                    <li
                      key={val.id}
                      ref={refsById[val.id]}
                      className={`${
                        router.query.target === val.id && homeStyles.active
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
                {work.map((val) => {
                  return (
                    // <ScrollItem val={val} key={val.id} />
                    <li
                      key={val.id}
                      ref={refsById[val.id]}
                      className={`${
                        router.query.target === val.idcon && homeStyles.active
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
