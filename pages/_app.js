import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function MyApp({ Component, pageProps }) {
  return (
     <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
