import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background elements */}
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>
      <div className={styles.gridOverlay}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={`animate-fade-in ${styles.content}`}>
          <div className={styles.badge}>
            <Sparkles size={16} className={styles.badgeIcon} />
            <span>Innovating the Future of Tech</span>
          </div>
          
          <h1 className={styles.title}>
            Accelerate Your Growth with <br />
            <span className="text-gradient">AI & Custom Software</span>
          </h1>
          
          <p className={styles.subtitle}>
            Aplanalyst is your trusted technology partner. We build intelligent, scalable solutions that drive digital transformation and empower your business.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="#contact" className="btn btn-primary">
              Book a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
