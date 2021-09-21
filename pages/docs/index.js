import React, { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../common/Layout/Header/Header';
import Footer from '../../common/Layout/Footer/Footer';
import CodeTemplate from '../../common/CodeTemplate/CodeTemplate';

import {
  deleteFakeBlogById,
  deleteFakeCommentById,
  getAllBlogs,
  getAllFakeBlogs,
  getAllFakeComments,
  getBlogById,
  getFakeBlogById,
  getFakeCommentById,
  login,
  register,
} from '../../constant/code';

import styles from './index.module.css';

import axios from 'axios';
import image from '../../public/assets/images/bnbwallet.jpg';

const Docs = () => {
  const [file, setFile] = useState('');
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
    fetch('http://localhost:3300/api/panel/blogs/', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDg3MTQwODkxM2YwMjI1M2JiZmFmZCIsImVtYWlsIjoibWlsYWRhemFtaTEyMEBnbWFpbC5jb20iLCJpYXQiOjE2MzIyMjM1OTgsImV4cCI6MTYzMzk0MjIyMjA2Mn0.JsUB2qXfTV0YbUJY30dVlBLsgtEKgQjIJvrfRM1BrW0',
        'Content-Type': 'multipart/form-data',
      },
      body: { name: 'Milad' },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err.response));
  }, []);

  // const fileHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   setFile(e.target.files[0]);
  // };

  // const clickHandler = () => {
  //   console.log(file);
  //   const data = new FormData();
  //   data.append('title', 'test title');
  //   data.append('text', 'test text');
  //   data.append('image', file);
  //   data.append('tags', 'one,two,three');
  //   fetch('http://localhost:3300/api/panel/blogs/', {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDg3MTQwODkxM2YwMjI1M2JiZmFmZCIsImVtYWlsIjoibWlsYWRhemFtaTEyMEBnbWFpbC5jb20iLCJpYXQiOjE2MzIyMjM1OTgsImV4cCI6MTYzMzk0MjIyMjA2Mn0.JsUB2qXfTV0YbUJY30dVlBLsgtEKgQjIJvrfRM1BrW0',
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     body: data,
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.log(err.response));
  // };

  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <Header />
          </nav>
          <main className={styles.contentContainer}>
            <Banner />
            <FakeBlogs />
            <FakeComments />
            <Authorization />
            <section className={styles.docsSection}>
              <h2 id="authentication" className={styles.header}>
                Real Blogs
              </h2>
              <CodeTemplate
                text={getAllBlogs}
                title="Get all blogs"
                id="get-all-blogs"
              >
                A simple <span className={styles.highlight}>GET</span> request,
                just need your <span className={styles.highlight}>token</span>{' '}
                in header when sending request and then you get all created
                blogs.
              </CodeTemplate>
              <CodeTemplate
                text={getBlogById}
                title="Get blog by ID"
                id="get-blog-by-id"
              >
                To get a specific blog add that{' '}
                <span className={styles.highlight}>blog ID</span> as an endpoint
                to <span className={styles.highlight}>URL</span>
              </CodeTemplate>
              <CodeTemplate
                text={getBlogById}
                title="Create blog"
                id="create-blog"
              >
                You sent request to get all blogs but an empty array returned?
                that's OK! blogs should be created first using this api. for
                creating blogs send a{' '}
                <span className={styles.highlight}>POST</span> request that its
                body is a <span className={styles.highlight}>FormData </span>
                containing{' '}
                <span className={styles.highlight}>
                  title, text, image and tags
                </span>
                .
              </CodeTemplate>
              <CodeTemplate
                text={getBlogById}
                title="Update blog"
                id="update-blog"
              >
                You can also <span className={styles.highlight}>update</span>{' '}
                all or one of the blogs data. notice that this is{' '}
                <span className={styles.highlight}>PATCH</span> request.
              </CodeTemplate>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Banner = () => {
  return (
    <section className={styles.docsSection}>
      <h2 className={styles.header}>How to use it?</h2>
      <p>
        We provided two types of api for you (fake and real). using fake api is
        very simple and need no authorization, this type is the best choice to
        working with if you start using api recently. But the intersting part is
        the real api where we deal with lots of data, notice that using this
        kind of api needs authorization but dont worry, there is a fully
        explained document below &hearts;
      </p>
    </section>
  );
};

const FakeBlogs = () => {
  return (
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
  );
};

const FakeComments = () => {
  return (
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
  );
};

const Authorization = () => {
  return (
    <section className={styles.docsSection}>
      <h2 id="authentication" className={styles.header}>
        Authentication
      </h2>
      <CodeTemplate text={register} title="Register" id="register">
        Welcome, here is the first step for using real api, you need to register
        and then your <span className={styles.highlight}>token</span> and{' '}
        <span className={styles.highlight}>password</span> will be sent to your
        email (be careful to post a valid email). use{' '}
        <span className={styles.highlight}>token</span> for next requests and{' '}
        <span className={styles.highlight}>password</span> for login according
        to what is said below.
      </CodeTemplate>
      <CodeTemplate text={login} title="Login" id="login">
        In this section, you can log in using the{' '}
        <span className={styles.highlight}>password</span> that was emailed to
        you and get your <span className={styles.highlight}>token</span>.
      </CodeTemplate>
    </section>
  );
};

export default Docs;
