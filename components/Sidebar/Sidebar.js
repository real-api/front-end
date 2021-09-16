import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <ul>
        <li className={styles.headerItem}>Authentication</li>
        <li className={styles.item}>Register</li>
        <li className={styles.item}>Login</li>
      </ul>
      <ul>
        <li className={styles.headerItem}>
          <a href="#blogs">Blogs</a>
        </li>
        <li className={styles.item}>Create blog</li>
        <li className={styles.item}>Get all blogs</li>
        <li className={styles.item}>Get blog by ID</li>
        <li className={styles.item}>Update blog</li>
        <li className={styles.item}>Remove blog by ID</li>
      </ul>
      <ul>
        <li className={styles.headerItem}>
          <a href="#comments">Comments</a>
        </li>
        <li className={styles.item}>Send comment</li>
        <li className={styles.item}>Get all comments</li>
        <li className={styles.item}>Get blog comments</li>
        <li className={styles.item}>Reply comment</li>
        <li className={styles.item}>Confirm comment</li>
        <li className={styles.item}>Remove comment</li>
      </ul>
    </aside>
  );
};
export default Sidebar;
