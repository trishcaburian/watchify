import '../styles/globals.css';
// import NProgress from 'nprogress';
import Layout from "../components/Layout";
import Head from "next/head";

// TODO: Loading bar
function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head title={'Watchify'}>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  );
}

export default MyApp;
