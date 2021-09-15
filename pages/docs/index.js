import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../common/Layout/Header/Header';
import Footer from '../../common/Layout/Footer/Footer';
import CodeTemplate from '../../common/CodeTemplate/CodeTemplate';

import { getAllProducts } from '../../constant/code';

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
            <section className={styles.docsSection}>
              <p>
                fakeStoreApi can be used with any type of shopping project that
                needs products, carts, and users in JSON format. you can use
                examples below to check how fakeStoreApi works and feel free to
                enjoy it in your awesome projects!
              </p>
            </section>
            <section className={styles.docsSection}>
              <h2>Products</h2>
              <CodeTemplate text={getAllProducts} />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
