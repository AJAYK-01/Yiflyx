import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
     <Layout>
        <NextNProgress 
          startPosition={0.22}
          height='3.4'
        />
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
