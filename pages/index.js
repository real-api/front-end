import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';

import Layout from '../common/Layout/Layout';
import CodeTemplate from '../common/CodeTemplate/CodeTemplate';

import { getAllFakeBlogs } from '../constant/code';

export default function Home() {
  return (
    <Layout>
      <main className={styles.mainContainer}>
        <Head>
          <title>Free Real API</title>
          <meta name="description" content="A real api" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner />
        <section className={styles.container}>
          <CodeTemplate text={getAllFakeBlogs} type="GET" />
        </section>
      </main>
    </Layout>
  );
}

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Free Real API</h1>
        <p>
          {' '}
          Fake store rest API for your e-commerce or shopping website prototype
        </p>
        <div className={styles.btns}>
          <Link href="/docs">
            <a className={styles.docsAnchor}>
              Read Docs
              <Image
                height="20"
                width="20"
                src="/assets/images/book.svg"
                alt="book"
              />
            </a>
          </Link>
          <Link href="/donation">
            <a className={styles.coffeeAnchor}>
              Buy Me a Coffee
              <Image
                height="30"
                width="30"
                src="/assets/images/coffee.svg"
                alt="coffee"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.bannerImage}>
        <Image
          height="500"
          width="500"
          src="/assets/images/banner.png"
          alt="Banner"
        />
      </div>
    </section>
  );
};
