import layoutStyles from "@/components/ui/layout/layout.module.css";
import aboutStyles from "../about/about.module.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./work.module.css";
import Link from "next/link";
import navbarStyles from "@/components/ui/navbar/navbar.module.css";
import { useRouter } from "next/router";

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
              Freelance
            </h1>
          </div>
          <div className={layoutStyles.container}>
            <div className={styles.grid}>
              <ul className={styles.fixed}>
                <li>
                  <Link
                    href={"/#one"}
                    className={
                      router.asPath.includes("/#one")
                        ? navbarStyles.active
                        : navbarStyles.link
                    }
                  >
                    one
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#two"}
                    className={
                      router.asPath.includes("/#two")
                        ? navbarStyles.active
                        : navbarStyles.link
                    }
                  >
                    two
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#three"}
                    className={
                      router.asPath.includes("/#three")
                        ? navbarStyles.active
                        : navbarStyles.link
                    }
                  >
                    three
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#four"}
                    className={
                      router.asPath.includes("/#four")
                        ? navbarStyles.active
                        : navbarStyles.link
                    }
                  >
                    four
                  </Link>
                </li>
              </ul>
              <ul className={styles.scroll}>
                <li id="one">one</li>
                <li id="two">Two</li>
                <li id="three">Three</li>
                <li id="four">Four</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
