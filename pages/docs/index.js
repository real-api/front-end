import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../common/Layout/Header/Header';
import Footer from '../../common/Layout/Footer/Footer';

import styles from './index.module.css';

const Docs = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <Header />
          </nav>
          <main className={styles.contentContainer}>
            <h1>Milad</h1>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
