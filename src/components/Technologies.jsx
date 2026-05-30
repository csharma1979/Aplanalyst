import React from 'react';
import styles from './Technologies.module.css';

const Technologies = () => {
  const techs = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'Python', category: 'Backend & AI' },
    { name: 'AI/ML', category: 'Core' },
    { name: 'OpenAI', category: 'AI Services' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' }
  ];

  return (
    <section className={`section ${styles.sectionBg}`}>
      <div className="container">
        <h2 className="section-title">Modern <span className="text-gradient">Technology Stack</span></h2>
        <p className="section-subtitle">
          We use the latest tools and frameworks to build robust, scalable, and secure applications.
        </p>

        <div className={styles.techGrid}>
          {techs.map((tech, index) => (
            <div key={index} className={`glass ${styles.techCard}`}>
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.techCategory}>{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
