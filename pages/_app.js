import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "nprogress/nprogress.css";
import TopProgressBar from '../components/TopProgressBar';

function MyApp({ Component, pageProps }) {
  return (
     <Layout>
        <TopProgressBar />
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
