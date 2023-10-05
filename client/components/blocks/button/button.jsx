import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ link, title }) => {
  return (
    <span className={styles.button}>
      <Link href={link}>{title}</Link>
    </span>
  );
};

export default Button;
