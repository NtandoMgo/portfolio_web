import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Development</h3>
              <p>
                Skilled in full-stack development, I excel in creating dynamic and responsive web 
                applications that seamlessly integrate frontend and backend components to deliver 
                exceptional user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineering</h3>
              <p>
                As a software engineer, I embrace the challenge of developing scalable and efficient 
                solutions, drawing on my blend of technical prowess and business insights to deliver 
                innovative software products.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Business Systems Development</h3>
              <p>
              Skilled in Business Systems Development, I create software solutions that optimize 
              operations and align with business goals.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
