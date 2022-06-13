import Link from 'next/link';
import {Box, Typography} from "@mui/material";
import { imageUrl } from "../utils/fetchApi";
import styles from "../styles/Home.module.css";

const MediaPanel = ({ media }) => {
    const title = media.title ? media.title : media.name;

    return (
        <Link href={`/${media.media_type}/${media.id}`} passHref>
            <Box className={styles.item_container}>
                <img
                    src={`${imageUrl}/${media.poster_path}`}
                    alt={media.title}
                    className={styles.home_poster}
                />

                <Typography className={styles.overlay} fontWeight={'bold'}>
                    {title.length > 20 ? `${title.substring(0,20)}...` : title}
                </Typography>
            </Box>
        </Link>
    );
}

export default MediaPanel;
