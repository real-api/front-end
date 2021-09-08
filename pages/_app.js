import '../styles/globals.css';
import '../styles/font.css';
import '../node_modules/highlight.js/styles/an-old-hope.css';

import Layout from '../common/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
