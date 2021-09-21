import React, { useEffect } from 'react';

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
  login,
  register,
} from '../../constant/code';

import styles from './index.module.css';

import axios from 'axios';

const Docs = () => {
  const body = {
    name: 'milad',
    email: 'asdasdm@gmail.com',
  };
  const headers = {
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    // axios
    //   .post('http://localhost:3300/auth/register', body, { headers })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err.response));
    fetch('http://localhost:3300/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'miladazami120@gmail.com',
        password: 'cv6SEemUJdOUHH',
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err.response));
  }, []);

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
                Welcome, here is the first step for using real api, you need to
                register and then your{' '}
                <span className={styles.highlight}>token</span> and{' '}
                <span className={styles.highlight}>password</span> will be sent
                to your email (be careful to post a valid email). use{' '}
                <span className={styles.highlight}>token</span> for next
                requests and <span className={styles.highlight}>password</span>{' '}
                for login according to what is said below.
              </CodeTemplate>
              <CodeTemplate text={login} title="Login" id="login">
                In this section, you can log in using the password that was
                emailed to you and get your token.
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
