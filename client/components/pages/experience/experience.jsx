import aboutStyles from "../about/about.module.css";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./experience.module.css";
import workStyles from "../work/work.module.css";
import Image from "next/image";
import Link from "next/link";
import contactStyles from "../contact/contact.module.css";
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
                <h2 className={workStyles.headline}>
                  Software Developer - Precision Sail Loft
                </h2>
                <p className={`${utilStyles.upperCase} ${styles.date}`}>
                  <span className={contactStyles.highlight}>
                    January 2023 - PRESENT
                  </span>
                </p>
                <ul>
                  <li>
                    {/* Created various e-commerce sites using Python, JavaScript,
                    WordPress, Next.js, React, Express, Node and more. */}
                    Engineered and maintained e-commerce websites using Python,
                    JavaScript, WordPress, Next.js, React, PHP, Node.js/Express,
                    ensuring scalable and robust solutions.
                  </li>
                  <li>
                    {/* Developed and tested plugins, database functions, and user
                    interfaces. Managed web development contractors and IT
                    projects. */}
                    Developed and optimized database operations with SQL, T-SQL,
                    GraphQL, and NoSQL, enhancing data retrieval, manipulation,
                    and unstructured data management.
                  </li>
                  <li>
                    {/* Hosted web apps and websites on Kinsta, Render, Vercel, and
                    Netlify. */}
                    Integrated advanced analytical tools (Google Analytics,
                    Google Search Console, Google Tag Manager) for tracking user
                    engagement and optimizing website performance.
                  </li>
                  <li>
                    {/* Performed backups, deployments, and optimizations.
                    Comfortable with CDN, SSL, serverless, edge caching, forms
                    and identity. */}
                    Managed web development projects, coordinating with
                    cross-departmental teams and contractors, aligning with
                    project goals and timelines.
                  </li>
                  <li>
                    Implemented SEO strategies using tools like Google Analytics
                    and Ahrefs to boost web visibility and organic traffic.
                  </li>
                  <li>
                    Administered hosting and deployment on platforms like
                    Kinsta, Render, Vercel, Netlify, ensuring high availability
                    and reliable access.
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
                    alt="Precision Sail Loft"
                    // className={styles.headshot}
                    width={900}
                    height={400}
                  />
                </Link>
                <Link href={"https://cdifurlers.com"} target="_blank">
                  <Image
                    src={"/images/psl/cdi.png"}
                    alt="CDI Furlers"
                    // className={styles.headshot}
                    width={900}
                    height={400}
                  />
                </Link>
                <Link href={"https://inflatableboatworld.com"} target="_blank">
                  <Image
                    src={"/images/psl/ibw.png"}
                    alt="Inflatable Boat World"
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
