import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../common/Layout/Header/Header';
import Footer from '../../common/Layout/Footer/Footer';
import CodeTemplate from '../../common/CodeTemplate/CodeTemplate';

import {
  deleteFakeBlogById,
  deleteFakeCommentById,
  getAllFakeBlogs,
  getAllFakeComments,
  getFakeBlogById,
  getFakeCommentById,
} from '../../constant/code';

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
              <h2 className={styles.header}>How to use it?</h2>
              <p>
                fakeStoreApi can be used with any type of shopping project that
                needs products, carts, and users in JSON format. you can use
                examples below to check how fakeStoreApi works and feel free to
                enjoy it in your awesome projects!
              </p>
            </section>
            <section className={styles.docsSection}>
              <h2 id="blogs" className={styles.header}>
                Blogs
              </h2>
              <CodeTemplate
                text={getAllFakeBlogs}
                title="Get all fake blogs"
                id="get-all-fake-blogs"
              />
              <CodeTemplate
                text={getFakeBlogById}
                title="Get fake blog by ID"
                id="get-fake-blog-by-id"
              />
              <CodeTemplate
                text={deleteFakeBlogById}
                title="Delete fake blog by ID"
                id="delete-fake-blog-by-id"
              />
            </section>
            <section className={styles.docsSection}>
              <h2 id="comments" className={styles.header}>
                Comments
              </h2>
              <CodeTemplate
                text={getAllFakeComments}
                title="Get all fake comments"
                id="get-all-fake-comments"
              />
              <CodeTemplate
                text={getFakeCommentById}
                title="Get fake comment by ID"
                id="get-fake-comment-by-id"
              />
              <CodeTemplate
                text={deleteFakeCommentById}
                title="Delete fake comment by ID"
                id="delete-fake-comment-by-id"
              />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
