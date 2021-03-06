import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <h3 className={styles.headerItem}>
        <a href="#blogs">Fake API</a>
      </h3>
      <ul className={styles.firstUl}>
        <li className={styles.headerItem}>
          <a href="#blogs">Fake Blogs</a>
        </li>
        <li className={styles.item}>
          <a href="#get-all-fake-blogs">Get all fake blogs</a>
        </li>
        <li className={styles.item}>
          <a href="#get-fake-blog-by-id">Get fake blog by ID</a>
        </li>
        <li className={styles.item}>
          <a href="#post-fake-blog">Post fake blog</a>
        </li>
        <li className={styles.item}>
          <a href="#delete-fake-blog-by-id">Delete fake blog by ID</a>
        </li>
      </ul>
      <ul>
        <li className={styles.headerItem}>
          <a href="#comments">Fake Comments</a>
        </li>
        <li className={styles.item}>
          <a href="#get-all-fake-comments">Get all fake comments</a>
        </li>
        <li className={styles.item}>
          <a href="#get-fake-comment-by-id">Get fake comment by ID</a>
        </li>
        <li className={styles.item}>
          <a href="#post-fake-comment">Post fake comment</a>
        </li>
        <li className={styles.item}>
          <a href="#delete-fake-comment-by-id">Delete fake comment by ID</a>
        </li>
      </ul>
      <h3 className={styles.headerItem}>
        <a href="#authentication">Real API</a>
      </h3>
      <ul className={styles.firstUl}>
        <li className={styles.headerItem}>
          <a href="#authentication">Authentication</a>
        </li>
        <li className={styles.item}>
          <a href="#register">Register</a>
        </li>
        <li className={styles.item}>
          <a href="#login">Login</a>
        </li>
      </ul>
      <ul>
        <li className={styles.headerItem}>
          <a href="#real-blogs">Real Blogs</a>
        </li>
        <li className={styles.item}>
          <a href="#get-all-blogs">Get all blogs</a>
        </li>
        <li className={styles.item}>
          <a href="#get-blog-by-id">Get blog by ID</a>
        </li>
        <li className={styles.item}>
          <a href="#create-blog">Create blog</a>
        </li>
        <li className={styles.item}>
          <a href="#update-blog">Update blog</a>
        </li>
        <li className={styles.item}>
          <a href="#delete-blog">Delete blog</a>
        </li>
      </ul>
      <ul>
        <li className={styles.headerItem}>
          <a href="#real-comments">Real Comments</a>
        </li>
        <li className={styles.item}>
          <a href="#get-all-comments">Get all comments</a>
        </li>
        <li className={styles.item}>
          <a href="#get-blog-comments">Get blog comments</a>
        </li>
        <li className={styles.item}>
          <a href="#send-comment">Send comments</a>
        </li>
        <li className={styles.item}>
          <a href="#reply-comment">Reply comment</a>
        </li>
        <li className={styles.item}>
          <a href="#confirm-comment">Confirm comment</a>
        </li>
        <li className={styles.item}>
          <a href="#delete-comment">Delete comment</a>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
