import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>About Brew & Co</h2>
          <p>
            Since 2010, Brew & Co has been dedicated to bringing the world's
            finest coffee to your cup. We source premium beans from sustainable
            farms across Pakistan, Islamabad, lahore, and Gilgit.
          </p>
          <p>
            Our master roasters carefully craft each blend to perfection,
            ensuring a rich, smooth, and unforgettable experience in every sip.
            We believe in quality, sustainability, and community.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>5000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Coffee Blends</p>
            </div>
            <div className={styles.stat}>
              <h3>15</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <span>☕</span>
            <p>Premium Coffee Beans</p>
          </div>
        </div>
      </div>
    </section>
  );
}
