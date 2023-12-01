import layoutStyles from "../../ui/layout/layout.module.css";
import aboutStyles from "../about/about.module.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={layoutStyles.section}>
      <div className={aboutStyles.container}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.container}>
            <h1
              className={`${layoutStyles.headline} ${utilStyles.greenText} ${layoutStyles.contact}`}
            >
              Contact
            </h1>
          </div>
          <div className={layoutStyles.container}>
            <form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <input
                      id="field_contact.full_name"
                      type="text"
                      autoComplete="given-name"
                      name="contact.full_name"
                      placeholder="Full Name"
                      required
                      className={styles.formField}
                    />
                    <label
                      htmlFor="field_contact.full_name"
                      className={`${styles.formLabel} `}
                    >
                      Full Name
                      <span style={{ position: "relative", top: "-5px" }}>
                        *
                      </span>
                    </label>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <input
                      id="field_contact.email"
                      type="email"
                      autoComplete="email"
                      name="contact.email"
                      placeholder="Email "
                      required
                      className={styles.formField}
                    />
                    <label
                      htmlFor="field_contact.email"
                      className={`${styles.formLabel} `}
                    >
                      Email
                      <span style={{ position: "relative", top: "-5px" }}>
                        *
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
