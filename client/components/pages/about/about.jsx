import Image from "next/image";
import layoutStyles from "../../ui/layout/layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import headshot from "@/assets/images/headshots/andrewHeadshot.jpg";
import styles from "./about.module.css";
import { techStack } from "@/data/techStack";

const About = () => {
  return (
    <section id="about" className={`${layoutStyles.section} `}>
      <div className={styles.container}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.container}>
            <h1 className={`${layoutStyles.headline} ${utilStyles.greenText}`}>
              About Me
            </h1>
          </div>
          <div className={layoutStyles.container}>
            <p>
              Hello! My name is Andrew McMillan and I love programming and
              creating things. I&apos;m a software developer for Precision Sail
              Loft, where I develop e-commerce web applications for the marine
              industry. I enjoy building interesting, fun, fast and unique
              client and customer experiences for an industry that hasn&apos;t
              seen a technological shift since radar was invented.
            </p>
            {/* <p>
              Fast-forward to today and I'm a software developer for Precision
              Sail Loft where I've been lucky enough to develop a variety of
              e-commerce web applications for the marine industry. My main focus
              these days is building interesting, fun, fast and unique client
              and customer experiences for an industry that hasn't seen a
              technological shift since radar was invented.
            </p> */}
            <p>
              I also have a passion for game development and have created
              several Java applications using Spring. I&apos;m always eager to
              learn new technologies and frameworks, and recently I&apos;ve been
              working on some projects using React Server Components and
              Next.js.
            </p>
            <p>
              Here are a few technologies and frameworks I've been working with
              recently:
            </p>
          </div>
          <div className={layoutStyles.container}>
            <ul className={styles.grid}>
              {techStack.map((tech) => {
                return <li key={tech}>{tech}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={headshot}
            alt="Headshot of Andrew McMillan"
            className={styles.headshot}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
