import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Layout from '../../common/Layout/Layout';

import styles from './index.module.css';

const Donation = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Donation;

const Card = () => {
  const [button, setButton] = useState('Copy');

  useEffect(() => {
    setTimeout(() => {
      setButton('Copy');
    }, 2000);
  }, [button]);

  const click = () => {
    navigator.clipboard.writeText('bnb1m4jkycgwhttkzspehl5dcxjgxew7hhfe80627r');
    setButton('Copied!');
  };

  return (
    <div className={styles.card}>
      <h3>BNB Wallet</h3>
      <Image
        src="/assets/images/bnbwallet.jpg"
        alt="bnb wallet"
        height="200"
        width="200"
      />
      <p>bnb1m4jkycgwhttkzspehl5dcxjgxew7hhfe80627r</p>
      <button onClick={click}>{button}</button>
    </div>
  );
};
