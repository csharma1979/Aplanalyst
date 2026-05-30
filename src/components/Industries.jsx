import React from 'react';
import { HeartPulse, Landmark, Building, Factory, ShoppingCart, GraduationCap, Truck, Briefcase } from 'lucide-react';
import styles from './Industries.module.css';

const Industries = () => {
  const industries = [
    { icon: <HeartPulse size={24} />, name: 'Healthcare' },
    { icon: <Landmark size={24} />, name: 'Finance' },
    { icon: <Building size={24} />, name: 'Real Estate' },
    { icon: <Factory size={24} />, name: 'Manufacturing' },
    { icon: <ShoppingCart size={24} />, name: 'E-commerce' },
    { icon: <GraduationCap size={24} />, name: 'Education' },
    { icon: <Truck size={24} />, name: 'Logistics' },
    { icon: <Briefcase size={24} />, name: 'Professional Services' }
  ];

  return (
    <section id="industries" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0', maxWidth: '500px' }}>
              We deliver domain-specific technology solutions that address unique challenges across various sectors.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <div key={index} className={`glass ${styles.card}`}>
              <div className={styles.icon}>{industry.icon}</div>
              <span className={styles.name}>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
