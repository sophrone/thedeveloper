import React from 'react';
import styles from './Footer.module.css'; // Adjust the path as needed

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} thedeveloper. All rights reserved.</p>
    </footer>
  );
};

export default Footer;