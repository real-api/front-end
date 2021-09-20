import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <h3 className={styles.headerItem}>Fake API</h3>
      <ul className={styles.firstUl}>
        <li className={styles.headerItem}>
          <a href="#blogs">Blogs</a>
        </li>
        <li className={styles.item}>
          <a href="#get-all-fake-blogs">Get all fake blogs</a>
        </li>
        <li className={styles.item}>
          <a href="#get-fake-blog-by-id">Get fake blog by ID</a>
        </li>
        <li className={styles.item}>
          <a href="#delete-fake-blog-by-id">Delete fake blog by ID</a>
        </li>
      </ul>
      <ul>
        <li className={styles.headerItem}>
          <a href="#comments">Comments</a>
        </li>
        <li className={styles.item}>Get all fake comments</li>
        <li className={styles.item}>Get fake comment by ID</li>
        <li className={styles.item}>Delete fake comment by ID</li>
      </ul>
      <h3 className={styles.headerItem}>Real API</h3>
      <ul>
        <li className={styles.headerItem}>Authentication</li>
        <li className={styles.item}>Register</li>
        <li className={styles.item}>Login</li>
      </ul>
    </aside>
  );
};
export default Sidebar;
