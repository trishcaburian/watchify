import {Grid, Typography} from "@mui/material";
import styles from "../styles/Home.module.css";
import tmdb_logo from "../assets/images/tmdb.svg";

const Footer = () => (
    <Grid container align={'center'} pt={2}>
        <Grid item xs={12} >
            <Typography color={'white'} fontSize={'12px'}>Powered By</Typography>
        </Grid>
        <Grid item xs={12}>
            {/*162x36*/}
            {/*<Image alt={'tmdb_logo'} src={tmdb_logo} width={162} height={36}/>*/}
            <img alt={'tmdb_logo'} src={tmdb_logo.src} className={styles.footer_logo}/>
        </Grid>
    </Grid>
);

export default Footer;
