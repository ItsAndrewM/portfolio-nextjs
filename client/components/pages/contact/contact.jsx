import layoutStyles from "../../ui/layout/layout.module.css";
import aboutStyles from "../about/about.module.css";
import utilStyles from "@/styles/utils.module.css";
import styles from "./contact.module.css";
import buttonStyles from "@/components/blocks/button/button.module.css";
import workStyles from "../work/work.module.css";
import navbarStyles from "@/components/ui/navbar/navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Chain from "@/assets/icons/chain";

const Contact = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      try {
        const response = await fetch("/api/contact-me", {
          method: "post",
          body: new URLSearchParams(data),
        });
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        alert("Thanks for reaching out! I'll get back to you soon!");
      } catch (err) {
        console.error(err);
        alert("I can't submit the form, try again later?");
      }
    } else {
      setErrors(validationMessages);
    }
  };

  const getError = (field) => errors[field];

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
            <div className={styles.container}>
              <h2 className={workStyles.headline}>Get in touch!</h2>
              <p>
                <span>◆</span>
              </p>
              <div className={styles.textWrapper}>
                <p>
                  I&apos;m actively looking for{" "}
                  <span className={styles.highlight}>new oppurtunites</span> and{" "}
                  <span className={styles.highlight}>new projects.</span>
                </p>
                <p>
                  {" "}
                  Have a cool idea but don't know how to get it done?{" "}
                  <span className={styles.highlight}>Message me!</span>
                </p>
                <p>
                  Looking for a web developer to fill out a full-time role?{" "}
                  <span className={styles.highlight}>I'm available.</span>
                </p>
                <p>
                  Also a fan of containers that scroll?{" "}
                  <span className={styles.highlight}>Lets chat.</span>
                </p>
              </div>
            </div>
            <div className={styles.container}>
              <p>
                <span>◆</span>
              </p>
            </div>

            <div className={styles.container}>
              <p className={styles.reach}>
                You can reach me at:{" "}
                <span className={workStyles.url}>
                  <Link
                    href={"mailto:andrew@andrewrmcmillan.com"}
                    className={`${styles.highlight} ${navbarStyles.link}`}
                  >
                    <span className={workStyles.icon}>
                      <Chain />
                    </span>
                    <span>andrew@andrewrmcmillan.com</span>
                  </Link>
                </span>
              </p>
              <p>Or by completing the form below.</p>
            </div>
          </div>
          <div className={layoutStyles.container}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <input
                      id="field_contact.full_name"
                      type="text"
                      autoComplete="given-name"
                      name="full_name"
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
                    <span className={styles.error}>
                      {getError("full_name")}
                    </span>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <input
                      id="field_contact.email"
                      type="email"
                      autoComplete="email"
                      name="email"
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
                    <span className={styles.error}>{getError("email")}</span>
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <textarea
                    id="field_contact.message"
                    type=""
                    name="message"
                    placeholder="Message"
                    required
                    className={styles.formField}
                  />
                  <label
                    htmlFor="field_contact.message"
                    className={`${styles.formLabel} `}
                  >
                    Message
                    <span style={{ position: "relative", top: "-5px" }}>*</span>
                  </label>
                  <span className={styles.error}>{getError("message")}</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formButton}>
                  <input
                    id="field_contact.submit"
                    type="submit"
                    name="submit"
                    placeholder="Submit"
                    value={"Submit"}
                    required
                    className={buttonStyles.button}
                  />
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
