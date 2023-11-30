import Button from "@/components/blocks/button/button";
import styles from "./bio.module.css";
import layoutStyles from "../../ui/layout/layout.module.css";

const Bio = () => {
  return (
    <section id="bio" className={layoutStyles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>
            👋 Hello! I'm a full-stack web developer from Victoria, BC! My name
            is
          </p>
          <h1>Andrew McMillan</h1>
          <h1>I build things for the web.</h1>
        </div>
        <div className={styles.container}>
          <p>
            I'm a Software Developer specializing in building full-stack
            e-commerce web applications.
          </p>
        </div>
        <div className={styles.container}>
          <Button
            link={"/Resume - Andrew.pdf"}
            title={"Learn more about me"}
            download={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
