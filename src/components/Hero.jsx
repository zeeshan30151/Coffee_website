import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>The Art of Coffee</h2>
        <p className={styles.heroSubtitle}>
          Experience the finest coffee from around the world
        </p>
        <button className={styles.ctaButton}>Explore Our Menu</button>
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
}
