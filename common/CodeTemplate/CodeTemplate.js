import React, { useEffect } from 'react';

import Highlight from 'react-highlight';
import { getAllProducts } from '../../code/code';

import styles from './CodeTemplate.module.css';

const CodeTemplate = ({ text }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Example Code</h2>
      <Highlight className={`javascript ${styles.highlight}`}>{text}</Highlight>
      <button>Try it</button>
    </div>
  );
};

export default CodeTemplate;
