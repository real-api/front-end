import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Layout from '../../common/Layout/Layout';

import styles from './index.module.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Donation = () => {
  return (
    <Layout>
      <Head>
        <title>Donation</title>
        <meta name="description" content="donate to free real api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Card
            coin="BTC"
            wallet="bc1q0r27myddepu436xryksw8f7w9wxpwes86tczek"
          />
          <Card
            coin="ETH"
            wallet="0xb46F561EbDFDaAb3CfF32D7db5F2182fFCBD5250"
          />
          <Card coin="XRP" wallet="r9CF3pdPPdf7QgsSpkRN3RXAPo8yeD5Hwu" />
          <Card
            coin="BCH"
            wallet="qp57wvmtl9kr5y33rgcgwzll5a835uk2mu2skqdkar"
          />
          <Card
            coin="BNB"
            wallet="bnb19dqrlsuhr8tfzv06nsf20gggu7nefmk5g2e942"
          />
          <Card
            coin="LTC"
            wallet="ltc1qde8ugrue2fspgquf55mfe9095rhalg7aj0646s"
          />
          <Card
            coin="XLM"
            wallet="GDZCI2EC4KRI6ZFB5SY4RTQA3FPMTMF55IHEAUL52N3FPBMIP7UDC4ED"
          />
          <Card coin="TRX" wallet="THjyGq6RoNkBPH4aoXxph9TJ2EHFuz7B4G" />
          <Card coin="DOGE" wallet="DP8zQxw8jV2vQQgyxw3TjrFp5my9zidWi6" />
        </div>
      </div>
    </Layout>
  );
};

export default Donation;

const Card = ({ coin, wallet }) => {
  // const [button, setButton] = useState('Copy');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  const click = () => {
    setCopied(true);
  };

  return (
    <div className={styles.card}>
      <h3>{coin} Wallet</h3>
      <Image
        src={`/assets/images/${coin}.jfif`}
        alt={`${coin} wallet`}
        height="200"
        width="200"
      />
      <p>{wallet}</p>
      <CopyToClipboard text={wallet}>
        <button onClick={click}>
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </button>
      </CopyToClipboard>
      {/* <button onClick={click}>{button}</button> */}
    </div>
  );
};
