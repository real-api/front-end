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
        <Text />
      </main>
    </Layout>
  );
}

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Free Real API</h1>
        <p> Post your blogs and comments to us, we will save it.</p>
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

const Text = () => {
  return (
    <section className={styles.docContainer}>
      <h2 className={styles.docHeader}>Fake API</h2>
      <p className={styles.docText}>
        Two types of APIs are provided, the fake one is very simple and
        straightforward. they need no authentication and is highly recommended
        for beginners.
      </p>
      <h2 className={styles.docHeader}>Real API</h2>
      <p className={styles.docText}>
        Here is the interesting part. for using these APIs you should register
        or login and get a specific token, this token should be sent in header
        of each request. All posted data is stored in database, you can post
        more data, update or remove them but you have some limitations which is
        explained below.
      </p>
      <h2 className={styles.docHeader}>Limitations</h2>
      <p>- Each user can post and save 10 blogs in database.</p>
      <p>- Each user can post 20 comments.1</p>
      <p>- Each user can post 20 requests per minute</p>
      <p>- Images must be less than 150KB in size.</p>
    </section>
  );
};
