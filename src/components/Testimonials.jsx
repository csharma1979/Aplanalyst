import React from 'react';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, TechFlow Inc.',
      content: 'Aplanalyst transformed our legacy infrastructure into a modern, AI-powered platform. Their team is exceptionally talented and delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Founder, HealthSync',
      content: 'The custom software solution they built for our healthcare startup was robust, secure, and highly scalable. A truly professional technology partner.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Director of Ops, Global Logistics',
      content: 'Their business automation and analytics tools helped us reduce operational costs by 30%. The ROI has been incredible since day one.',
      rating: 5
    }
  ];

  return (
    <section className={`section ${styles.sectionBg}`}>
      <div className="container">
        <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
        <p className="section-subtitle">
          Don't just take our word for it. See what our clients have to say about working with Aplanalyst.
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`glass ${styles.card}`}>
              <Quote className={styles.quoteIcon} size={40} />
              
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className={styles.content}>"{testimonial.content}"</p>
              
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
