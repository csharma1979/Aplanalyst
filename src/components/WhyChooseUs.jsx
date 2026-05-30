import React from 'react';
import { Award, Zap, RefreshCw, Maximize, ShieldCheck, Headphones } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={24} />,
      title: 'Experienced Team',
      description: 'Our team comprises industry veterans with proven track records in delivering complex enterprise systems.'
    },
    {
      icon: <Zap size={24} />,
      title: 'AI-Driven Innovation',
      description: 'We integrate advanced artificial intelligence natively into our solutions for a competitive edge.'
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Agile Development',
      description: 'Iterative, transparent, and flexible processes ensure we adapt to your evolving business needs.'
    },
    {
      icon: <Maximize size={24} />,
      title: 'Scalable Solutions',
      description: 'Architectures designed from day one to handle exponential growth and global scale.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security protocols protecting your data and ensuring regulatory compliance.'
    },
    {
      icon: <Headphones size={24} />,
      title: 'Ongoing Support',
      description: 'Dedicated post-deployment maintenance, monitoring, and proactive enhancements.'
    }
  ];

  return (
    <section className={`section ${styles.sectionBg}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.contentLeft}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className={styles.description}>
              We don't just write code; we build strategic partnerships. Our holistic approach combines technical excellence with deep business acumen to deliver measurable results.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Retention</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support Available</span>
              </div>
            </div>
          </div>
          
          <div className={styles.contentRight}>
            <div className={styles.grid}>
              {reasons.map((reason, index) => (
                <div key={index} className={styles.reasonCard}>
                  <div className={styles.icon}>{reason.icon}</div>
                  <div>
                    <h4 className={styles.reasonTitle}>{reason.title}</h4>
                    <p className={styles.reasonDesc}>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
