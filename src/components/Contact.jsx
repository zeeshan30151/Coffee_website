import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitStatus(""), 3000);
    } else {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have questions? We'd love to hear from you. Send us a message!
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3>Visit Us</h3>
              <p>
              Coffee Daar Street
                <br />
                Brew City, Gilgit
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <h3>Call Us</h3>
              <p>+92 3434053211 </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>✉️</div>
              <h3>Email Us</h3>
              <p>zeshanch350@gmail.com</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕐</div>
              <h3>Hours</h3>
              <p>
                Mon - Fri: 7AM - 7PM
                <br />
                Sat - Sun: 8AM - 6PM
              </p>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>

            {submitStatus === "success" && (
              <p className={styles.successMessage}>
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className={styles.errorMessage}>
                Please fill in all required fields.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
