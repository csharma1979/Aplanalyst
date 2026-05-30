import React from 'react';
import { Code, Brain, Globe, Smartphone, Settings, Cloud, BarChart, MessageSquare } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and scale with your growth.'
    },
    {
      icon: <Brain size={28} />,
      title: 'AI & Machine Learning',
      description: 'Leverage predictive analytics and intelligent algorithms to uncover insights and automate complex decisions.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Web App Development',
      description: 'Modern, responsive, and high-performance web applications built on scalable cloud architectures.'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences that engage users and drive business value.'
    },
    {
      icon: <Settings size={28} />,
      title: 'Business Process Automation',
      description: 'Streamline operations and reduce manual effort with intelligent workflow automation.'
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud & DevOps',
      description: 'Secure, scalable cloud infrastructure and CI/CD pipelines to accelerate your delivery cycle.'
    },
    {
      icon: <BarChart size={28} />,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable intelligence with interactive dashboards and reporting.'
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Enhance customer support and engagement with intelligent, conversational AI agents.'
    }
  ];

  return (
    <section id="services" className={`section ${styles.sectionBg}`}>
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
        <p className="section-subtitle">
          Comprehensive technology solutions tailored to accelerate your digital transformation journey.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`glass ${styles.card}`}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
