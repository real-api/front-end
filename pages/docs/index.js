import React, { useState } from 'react';
import Head from 'next/head';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../common/Layout/Header/Header';
import Footer from '../../common/Layout/Footer/Footer';
import CodeTemplate from '../../common/CodeTemplate/CodeTemplate';

import {
  confirmComment,
  deleteBlogById,
  deleteComment,
  deleteFakeBlogById,
  deleteFakeCommentById,
  getAllBlogs,
  getAllComments,
  getAllFakeBlogs,
  getAllFakeComments,
  getBlogById,
  getBlogComments,
  getFakeBlogById,
  getFakeCommentById,
  login,
  postBlog,
  postFakeBlog,
  postFakeComment,
  register,
  replyComment,
  sendComment,
  updateBlog,
} from '../../constant/code';

import styles from './index.module.css';

import axios from 'axios';

const Docs = () => {
  const [file, setFile] = useState('');

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const clickHandler = () => {
    const data = new FormData();
    data.append('title', 'soran2 title');
    data.append('text', 'soran2 text');
    data.append('image', file);
    data.append('tags', 'one,two,three');
    const BearerToken =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTMxNzRiODI2MDhkZDRlNTZkNzY0ZSIsImVtYWlsIjoibWlsYWRhemFtaTEyMEBnbWFpbC5jb20iLCJpYXQiOjE2MzM1OTY2NTAsImV4cCI6MTYzNTMxNjY0NzU1N30.1yvNn7xkJ27rhGWSnsXcl3psbtUxPqWy1KVSHiMHuyg';
    axios
      .patch(
        'http://localhost:3300/api/panel/blogs/615ebad0eac9ec62f40a81b4',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: BearerToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <Head>
        <title>Documentation</title>
        <meta name="description" content="documentation of free real api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <Authentication />
            <RealBlogs />
            <RealComments />
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
        very simple and need no authentication, this type is the best choice to
        working with if you start using api recently. But the intersting part is
        the real api where we deal with lots of data, notice that using this
        kind of api needs authentication but dont worry, there is a fully
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
        type="GET"
      />
      <CodeTemplate
        text={getFakeBlogById}
        title="Get fake blog by ID"
        id="get-fake-blog-by-id"
        type="GET"
      />
      <CodeTemplate
        text={postFakeBlog}
        title="Post fake blog"
        id="post-fake-blog"
        type="POST"
      />
      <CodeTemplate
        text={deleteFakeBlogById}
        title="Delete fake blog by ID"
        id="delete-fake-blog-by-id"
        type="DELETE"
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
        type="GET"
      />
      <CodeTemplate
        text={getFakeCommentById}
        title="Get fake comment by ID"
        id="get-fake-comment-by-id"
        type="GET"
      />
      <CodeTemplate
        text={postFakeComment}
        title="Post fake comment"
        id="post-fake-comment"
        type="POST"
      />
      <CodeTemplate
        text={deleteFakeCommentById}
        title="Delete fake comment by ID"
        id="delete-fake-comment-by-id"
        type="DELETE"
      />
    </section>
  );
};

const Authentication = () => {
  return (
    <section className={styles.docsSection}>
      <h2 id="authentication" className={styles.header}>
        Authentication
      </h2>
      <CodeTemplate text={register} title="Register" id="register" type="POST">
        Welcome, here is the first step for using real api, you need to register
        and then a <span className={styles.highlight}>token</span> is returned
        to you. after it, your data is stored in database and next time you
        should log in with your <span className={styles.highlight}>email</span>{' '}
        and <span className={styles.highlight}>password</span>.
      </CodeTemplate>
      <CodeTemplate text={login} title="Login" id="login" type="POST">
        In this section, you can log in using your{' '}
        <span className={styles.highlight}>email</span> and{' '}
        <span className={styles.highlight}> password</span>. after login a new
        <span className={styles.highlight}> token</span> is returned to you.
      </CodeTemplate>
    </section>
  );
};

const RealBlogs = () => {
  return (
    <section className={styles.docsSection}>
      <h2 id="real-blogs" className={styles.header}>
        Real Blogs
      </h2>
      <CodeTemplate
        text={getAllBlogs}
        title="Get all blogs"
        id="get-all-blogs"
        type="GET"
      >
        A simple <span className={styles.highlight}>GET</span> request, just
        need your <span className={styles.highlight}>token</span> in header when
        sending request and then you get all created blogs.
        <br />
        <span className={styles.warning}>
          - At first it returns an empty array because you should create blogs
          according to what has been said{' '}
          <span className={styles.highlight}>
            <a href="#create-blog">below</a>
          </span>
        </span>
        .
      </CodeTemplate>
      <CodeTemplate
        text={getBlogById}
        title="Get blog by ID"
        id="get-blog-by-id"
        type="GET"
      >
        To get a specific blog add that{' '}
        <span className={styles.highlight}>blog&apos;s ID</span> as an endpoint
        to <span className={styles.highlight}>URL</span>
        <br />
        <span className={styles.warning}>
          - At first it returns an empty array because you should create blogs
          according to what has been said{' '}
          <span className={styles.highlight}>
            <a href="#create-blog">below</a>
          </span>
        </span>
      </CodeTemplate>
      <CodeTemplate
        text={postBlog}
        title="Create blog"
        id="create-blog"
        type="POST"
      >
        You should post a <span className={styles.highlight}>formData</span> to
        create a blog, each blog contains{' '}
        <span className={styles.highlight}>title</span>,{' '}
        <span className={styles.highlight}>text</span>,{' '}
        <span className={styles.highlight}>tags</span>(which is seperated by
        comma) and an <span className={styles.highlight}>image</span>. take the
        image file through an input with type of file.
        <br />
        <span className={styles.warning}>
          - For posting files use{' '}
          <span className={styles.highlight}>
            <a
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              rel="noreferrer"
            >
              axios
            </a>
          </span>
        </span>
      </CodeTemplate>
      <CodeTemplate
        text={updateBlog}
        title="Update blog"
        id="update-blog"
        type="PATCH"
      >
        You can also <span className={styles.highlight}>update</span> all or one
        of the blog data. notice that this is{' '}
        <span className={styles.highlight}>PATCH</span> request.
        <br />
        <span className={styles.warning}>
          - For patching files use{' '}
          <span className={styles.highlight}>
            <a
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              rel="noreferrer"
            >
              axios
            </a>
          </span>
        </span>
      </CodeTemplate>
      <CodeTemplate
        text={deleteBlogById}
        title="Delete blog"
        id="delete-blog"
        type="DELETE"
      >
        Add the <span className={styles.highlight}>blog ID</span> to the end of
        the <span className={styles.highlight}>URL</span> and send a{' '}
        <span className={styles.highlight}>DELETE</span> request to delete a
        specific blog.
      </CodeTemplate>
    </section>
  );
};

const RealComments = () => {
  return (
    <section className={`${styles.docsSection} ${styles.lastSection}`}>
      <h2 id="real-comments" className={styles.header}>
        Real Comments
      </h2>
      <CodeTemplate
        text={getAllComments}
        title="Get all comments"
        id="get-all-comments"
        type="GET"
      >
        Get all comments of every blogs using this api.
        <br />
        At first it returns an empty array because you should{' '}
        <span className={styles.highlight}>send </span>
        comments according to what has been said{' '}
        <span className={styles.highlight}>
          <a href="#send-comment">below</a>
        </span>
        .
      </CodeTemplate>
      <CodeTemplate
        text={getBlogComments}
        title="Get blog comments"
        id="get-blog-comments"
        type="GET"
      >
        To get comments of a specific blog use this one.
        <br />
        At first it returns an empty array because you should{' '}
        <span className={styles.highlight}>confirm </span>
        comments according to what has been said{' '}
        <span className={styles.highlight}>
          <a href="#send-comment">below</a>
        </span>
        , actually it only returns comments with{' '}
        <span className={styles.highlight}>flag</span> of true.
      </CodeTemplate>
      <CodeTemplate
        text={sendComment}
        title="Send comment"
        id="send-comment"
        type="POST"
      >
        To send comments to a blog you need
        <span className={styles.highlight}> ID</span> of that blog.
      </CodeTemplate>
      <CodeTemplate
        text={replyComment}
        title="Reply comment"
        id="reply-comment"
        type="POST"
      >
        You also can <span className={styles.highlight}>reply</span> to a
        comment just like the example. <br />
        Each reply should be <span className={styles.highlight}>confirmed</span>
      </CodeTemplate>
      <CodeTemplate
        text={confirmComment}
        title="Confirm comment"
        id="confirm-comment"
        type="PATCH"
      >
        Each comment should be{' '}
        <span className={styles.highlight}>confirmed</span> to turn its{' '}
        <span className={styles.highlight}>flag</span> to true. <br />
        Only comments with <span className={styles.highlight}>
          flag
        </span> of <span className={styles.highlight}>true</span> will be
        returned in response of a specific blog&apos;s comments.
      </CodeTemplate>
      <CodeTemplate
        text={deleteComment}
        title="Delete comment"
        id="delete-comment"
        type="DELETE"
      >
        Send a <span className={styles.highlight}>DELETE</span> request to
        remove a specific comment
      </CodeTemplate>
    </section>
  );
};

export default Docs;
