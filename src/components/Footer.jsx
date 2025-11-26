import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Brew & Co</h3>
            <p>Crafting the finest coffee experiences since 2010.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Premium Blends</a>
              </li>
              <li>
                <a href="#services">Coffee Classes</a>
              </li>
              <li>
                <a href="#services">Home Delivery</a>
              </li>
              <li>
                <a href="#services">Equipment</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive offers and coffee tips.</p>
            <form
              className={styles.newsletter}
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Brew & Co. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
