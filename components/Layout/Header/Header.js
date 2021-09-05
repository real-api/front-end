import React from 'react';
import Link from 'next/link';
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>GitHub</li>
            <li>
              <Link href="/donation">Buy me a coffe</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
