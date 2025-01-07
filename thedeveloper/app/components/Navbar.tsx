import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css'; // Make sure this file exists

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;