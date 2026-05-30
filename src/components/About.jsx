import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const cards = [
    {
      icon: <Target size={32} className={styles.icon} />,
      title: 'Our Mission',
      description: 'To empower businesses with cutting-edge AI and software solutions that drive growth, efficiency, and innovation.'
    },
    {
      icon: <Lightbulb size={32} className={styles.icon} />,
      title: 'Our Vision',
      description: 'To be the global leader in digital transformation, creating intelligent systems that redefine what is possible.'
    },
    {
      icon: <Users size={32} className={styles.icon} />,
      title: 'Why Us',
      description: 'We combine deep technical expertise with industry knowledge to deliver solutions that are not just functional, but transformative.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About <span className="text-gradient">Aplanalyst</span></h2>
        <p className="section-subtitle">
          We are a team of passionate engineers, data scientists, and strategists dedicated to solving complex problems through technology.
        </p>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={`glass ${styles.card}`}>
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
