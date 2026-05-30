import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <Code2 className={styles.logoIcon} size={32} />
          <span>Aplanalyst</span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileNavAction}>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
