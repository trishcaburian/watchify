import Head from "next/head";
import {Box} from "@mui/material";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
    <>
      <Head>
        <title>Watchify</title>
      </Head>
      <Box>
        <header>
            <Navbar />
        </header>
        <main className={styles.container}>
            <div className={styles.content_wrap}>
                {children}
            </div>
        </main>
        <footer className={styles.footer}>
            <Footer />
        </footer>
      </Box>
    </>
);

export default Layout;
