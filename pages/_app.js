import '../styles/globals.css';
import '../node_modules/highlight.js/styles/an-old-hope.css';

import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
