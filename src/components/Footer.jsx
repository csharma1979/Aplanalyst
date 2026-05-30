import React from 'react';
import { Code2, Mail } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <a href="#" className={styles.logo}>
            <Code2 className={styles.logoIcon} size={32} />
            <span>Aplanalyst</span>
          </a>
          <p className={styles.brandDesc}>
            Your trusted technology partner for custom software development, AI solutions, and digital transformation.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="#" aria-label="GitHub"><FaGithub size={20} /></a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Custom Software</a></li>
              <li><a href="#services">AI & ML Solutions</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Cloud & DevOps</a></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Contact Us</h3>
            <ul className={styles.contactInfo}>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@aplanalyst.com">hello@aplanalyst.com</a>
              </li>
              <li>
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aplanalyst. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            Technology partner: <a href="https://tattvalogic.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>Tattvalogic</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
