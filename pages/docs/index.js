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
  register,
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
                We provided two types of api for you (fake and real). using fake
                api is very simple and need no authorization, this type is the
                best choice to working with if you start using api recently. But
                the intersting part is the real api where we deal with lots of
                data, notice that using this kind of api needs authorization but
                dont worry, there is a fully explained document below &hearts;
              </p>
            </section>
            <section className={styles.docsSection}>
              <h2 id="blogs" className={styles.header}>
                Fake Blogs
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
                Fake Comments
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
            <section className={styles.docsSection}>
              <h2 id="authentication" className={styles.header}>
                Authentication
              </h2>
              <CodeTemplate text={register} title="Register" id="register">
                You forgot to include the json property that contains the data
                you want to send. However, I the body is not being treated
                correctly anyway. See this fiddle to see that the delay of 5
                seconds gets skipped. jsfiddle.net/99arsnkg Also, when you try
                to add additional headers, they are ignored. This is probably an
                issue with fetch() itself
              </CodeTemplate>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Docs;
