import React, { useState } from 'react';

import Highlight from 'react-highlight';

import Loader from '../Loader/Loader';

import styles from './CodeTemplate.module.css';

const CodeTemplate = ({ text, title, id }) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  const execute = async () => {
    setLoading(true);
    setData(false);
    const fetchedData = await eval(text[1]);
    setLoading(false);
    setData(fetchedData);
  };

  return (
    <div className={styles.container} id={id}>
      <h2 className={title ? styles.docsHeader : styles.header}>
        {title ? title : 'Example Code'}
      </h2>
      <Highlight className={`javascript ${styles.highlight}`}>
        {text[0]}
      </Highlight>
      <button onClick={execute}>Try it</button>
      {loading && <Loader />}
      {data && (
        <Highlight className={`JSON ${styles.highlight}`}>
          {`${JSON.stringify(data, null, 2)}`}
        </Highlight>
      )}
    </div>
  );
};

export default CodeTemplate;
