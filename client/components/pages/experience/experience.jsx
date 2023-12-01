import aboutStyles from "../about/about.module.css";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./experience.module.css";
import headshot from "@/public/images/headshots/andrewHeadshot.jpg";
import Image from "next/image";
import Link from "next/link";
const Experience = () => {
  return (
    <section id="experience" className={layoutStyles.section}>
      <div className={aboutStyles.container}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.container}>
            <h1
              className={`${layoutStyles.headline} ${utilStyles.greenText} ${layoutStyles.experience}`}
            >
              Experience
            </h1>
          </div>
          <div className={layoutStyles.container}>
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <h2>Software Developer - Precision Sail Loft</h2>
                <p className={`${utilStyles.upperCase} ${styles.date}`}>
                  <span>January 2023 - PRESENT</span>
                </p>
                <ul>
                  <li>
                    Created various e-commerce sites using Python, JavaScript,
                    WordPress, Next.js, React, Express, Node and more.
                  </li>
                  <li>
                    Developed and tested plugins, database functions, and user
                    interfaces. Managed web development contractors and IT
                    projects.
                  </li>
                  <li>
                    Used Google APIs and services, Google Cloud, and SEO tools.{" "}
                  </li>{" "}
                  <li>
                    Hosted web apps and websites on Kinsta, Render, Vercel, and
                    Netlify.
                  </li>
                  <li>
                    Performed backups, deployments, and optimizations.
                    Comfortable with CDN, SSL, serverless, edge caching, forms
                    and identity.
                  </li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <Link
                  href={"https://www.precisioncruisingaccessories.com"}
                  target="_blank"
                >
                  <Image
                    src={"/images/psl/pca.png"}
                    alt="Precision Cruising Accessories"
                    // className={styles.headshot}
                    width={900}
                    height={400}
                  />
                </Link>
                <Link href={"https://precisionsailloft.com"} target="_blank">
                  <Image
                    src={"/images/psl/psl.png"}
                    alt="Precision Cruising Accessories"
                    // className={styles.headshot}
                    width={900}
                    height={400}
                  />
                </Link>
                <Link href={"https://cdifurlers.com"} target="_blank">
                  <Image
                    src={"/images/psl/cdi.png"}
                    alt="Precision Cruising Accessories"
                    // className={styles.headshot}
                    width={900}
                    height={400}
                  />
                </Link>
                <Link href={"https://inflatableboatworld.com"} target="_blank">
                  <Image
                    src={"/images/psl/ibw.png"}
                    alt="Precision Cruising Accessories"
                    // className={styles.headshot}
                    width={900}
                    height={400}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
