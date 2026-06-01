import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you! Your message has been sent. We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
        <p className="section-subtitle">
          Ready to start your next big project? Contact us today for a free consultation.
        </p>

        <div className={styles.contactWrapper}>
          {/* Contact Information */}
          <div className={`glass ${styles.contactInfo}`}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoDesc}>
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 (991) 617-7771</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>hello@aplanalyst.in</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Office</h4>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                <a href="#" aria-label="GitHub"><FaGithub size={20} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass ${styles.formContainer}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" required placeholder="John" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" required placeholder="Doe" />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required placeholder="john@company.com" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" required placeholder="How can we help you?" />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
