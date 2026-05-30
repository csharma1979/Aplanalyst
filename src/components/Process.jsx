import React from 'react';
import { Search, Map, PenTool, Code, CheckCircle, Rocket, HeartHandshake } from 'lucide-react';
import styles from './Process.module.css';

const Process = () => {
  const steps = [
    { icon: <Search size={24} />, title: 'Discovery', desc: 'Understanding your vision and goals.' },
    { icon: <Map size={24} />, title: 'Strategy', desc: 'Defining the roadmap and tech stack.' },
    { icon: <PenTool size={24} />, title: 'Design', desc: 'Creating intuitive and engaging UI/UX.' },
    { icon: <Code size={24} />, title: 'Development', desc: 'Building scalable and robust solutions.' },
    { icon: <CheckCircle size={24} />, title: 'Testing', desc: 'Ensuring quality and performance.' },
    { icon: <Rocket size={24} />, title: 'Deployment', desc: 'Seamless launch to production.' },
    { icon: <HeartHandshake size={24} />, title: 'Support', desc: 'Continuous optimization and care.' }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Process</span></h2>
        <p className="section-subtitle">
          A proven, structured approach to turning complex challenges into elegant solutions.
        </p>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.connector}></div>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
