import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ME API</title>
        <meta name="description" content="A real api" />
        <link rel="icon" href="/assets/images/Logo.png" />
      </Head>

      <h1>test</h1>
    </div>
  );
}
