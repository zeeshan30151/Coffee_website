import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    icon: "☕",
    title: "Premium Blends",
    description:
      "Handpicked coffee beans from the finest farms across the globe, roasted to perfection.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Expert Brewing",
    description:
      "Master baristas prepare your coffee with precision and passion using traditional methods.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Sustainable Sourcing",
    description:
      "We work directly with farmers ensuring fair trade and environmental responsibility.",
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Machinery & Equipment",
    description:
      "State-of-the-art espresso machines and brewing equipment for the perfect cup.",
  },
  {
    id: 5,
    icon: "📦",
    title: "Home Delivery",
    description:
      "Fresh coffee delivered to your doorstep within 24 hours of order.",
  },
  {
    id: 6,
    icon: "🎓",
    title: "Coffee Classes",
    description:
      "Learn the art of coffee making from our expert baristas and roasters.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          Everything you need for the perfect coffee experience
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
