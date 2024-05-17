import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Ntando</h1>
        <p className={styles.description}>
          I&apos;m a software developer currently studying at the University of Cape Town. 
          While I&apos;m still on the exciting path of learning, I&apos;m eager to apply my skills 
          and enthusiasm to real-world projects. Let&apos;s connect and explore how we can work together!
        </p>
        <a href="mailto:devvarietyverse@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
