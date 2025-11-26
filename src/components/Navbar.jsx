import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.coffee}>☕</span>
          <h1>Brew & Co</h1>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={styles.navLink}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.navLink}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className={styles.navLink}
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.navLink}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
