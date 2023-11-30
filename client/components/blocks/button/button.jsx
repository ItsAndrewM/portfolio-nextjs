import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ link, title, download }) => {
  return (
    <span className={styles.button}>
      <Link href={link} download={download}>
        {title}
      </Link>
    </span>
  );
};

export default Button;
