import React from 'react';
import Link from 'next/link';

import styles from './ApiView.module.css';

const ApiView = ({ title, description, apiList }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {apiList.map(({ key, value, _id }) => (
          <li key={_id}>
            {key.link ? (
              <a href={key.link} target="_blank" rel="noreferrer">
                {key.amount}
              </a>
            ) : (
              <span>{key.amount}</span>
            )}
            {value.link ? (
              <a href={value.link} target="_blank" rel="noreferrer">
                {value.amount}
              </a>
            ) : (
              <span>{value.amount}</span>
            )}
          </li>
        ))}
      </ul>
      <Link className={styles.btn} href="/docs">View Details on Docs</Link>
    </div>
  );
};
export default ApiView;
