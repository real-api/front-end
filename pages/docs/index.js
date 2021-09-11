import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../common/Layout/Header/Header';
import Footer from '../../common/Layout/Footer/Footer';

import styles from './index.module.css';

const Docs = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Sidebar />
        <section className={styles.container}>
          <Header />
          <div className={styles.contentContainer}>
            <h1>Milad</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Docs;
