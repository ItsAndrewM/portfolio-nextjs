import Image from "next/image";
import layoutStyles from "../../ui/layout/layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import headshot from "@/public/images/headshots/andrewHeadshot.jpg";
import styles from "./about.module.css";
import { techStack } from "@/data/techStack";

const About = () => {
  return (
    <section id="about" className={`${layoutStyles.section} `}>
      <div className={styles.container}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.container}>
            <h1
              className={`${layoutStyles.headline} ${utilStyles.greenText} ${layoutStyles.aboutMe}`}
            >
              About Me
            </h1>
          </div>
          <div className={layoutStyles.container}>
            <p>
              {/* Hello! My name is Andrew McMillan and I love programming and
              creating things. I&apos;m a software developer for Precision Sail
              Loft, where I develop e-commerce web applications for the marine
              industry. I enjoy building interesting, fun, fast and unique
              client and customer experiences for an industry that hasn&apos;t
              seen a technological shift since radar was invented.  */}
              Hello! I&apos;m Andrew McMillan, a dedicated software developer at
              Precision Sail Loft, where I specialize in creating cutting-edge
              e-commerce web applications for the marine industry. My passion
              for programming goes beyond just writing code; I&apos;m committed
              to developing unique, efficient, and engaging online experiences
              in a field that&apos;s ripe for technological advancement.
              Alongside my professional work, I have a keen interest in game
              development and continuously explore new technologies, recently
              delving into React Server Components and Next.js.
            </p>
            {/* <p>
              Fast-forward to today and I&apos;m a software developer for Precision
              Sail Loft where I&apos;ve been lucky enough to develop a variety of
              e-commerce web applications for the marine industry. My main focus
              these days is building interesting, fun, fast and unique client
              and customer experiences for an industry that hasn&apos;t seen a
              technological shift since radar was invented.
            </p> */}
            <p>
              My approach to software development is anchored in the belief that
              technology is a pivotal tool for solving real-world problems and
              enhancing user experiences. I thrive in innovative, adaptable
              environments that prioritize a user-centric approach. My proven
              track record in leading complex e-commerce site development
              showcases my capability to tackle challenging projects and deliver
              exceptional results. I&apos;m not just about meeting requirements;
              I aim to push boundaries and establish new benchmarks in digital
              solutions.
              {/* I also have a passion for game development
              and have created several Java applications using Spring. I&apos;m
              always eager to learn new technologies and frameworks, and
              recently I&apos;ve been working on some projects using React
              Server Components and Next.js. */}
            </p>
            <p>
              Here are a few technologies and frameworks I&apos;ve been working
              with recently:
            </p>
          </div>
          <div className={layoutStyles.container}>
            <ul className={styles.grid}>
              {techStack.map((tech) => {
                return (
                  <li key={tech}>
                    <span className={styles.item}>{tech}</span>
                  </li>
                );
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
