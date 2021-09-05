import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/images/Logo.png"
            alt="picture of website logo"
            width="50"
            height="50"
          />
        </div>
        <div className={styles.listContainer}>
          <ul>
            <li>Home</li>
            <li>Docs</li>
            <li>GitHub</li>
            <li>Buy me a coffe</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
