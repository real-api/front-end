import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './HomePage.module.css';

import CodeTemplate from '../common/CodeTemplate/CodeTemplate';

import { getAllProducts } from '../code/code';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>ME API</title>
        <meta name="description" content="A real api" />
        <link rel="icon" href="/assets/images/Logo.png" />
      </Head>
      <Banner />
      <Template text={getAllProducts} />
    </main>
  );
}

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1>ME API</h1>
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
          <a className={styles.githubAnchor}>
            View on GitHub
            <Image
              height="20"
              width="20"
              src="/assets/images/github.svg"
              alt="book"
            />
          </a>
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

const Template = ({ text }) => {
  return (
    <section className={styles.container}>
      <CodeTemplate text={text} />
    </section>
  );
};
