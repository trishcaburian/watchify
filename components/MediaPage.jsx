import {imageUrl} from "../utils/fetchApi";
import {Box, Grid, Typography} from '@mui/material';

import styles from "../styles/Media.module.css";
import blankbg from "../assets/images/default_bg.jpg";
import blankposter from "../assets/images/default_poster.jpg";

import MovieInfo from "./MovieInfo";
import TvInfo from "./TvInfo";

const MediaPage = ({mediaData, type}) => {

    const bg_image = imageUrl + mediaData.backdrop_path;
    const poster_image = imageUrl + mediaData.poster_path;

    const getReleaseYear = () => {
        //release_date (movie), first_air_date (tv)
        let releaseYear = null;
        let mediaDate = null;

        if (mediaData.release_date) {
            mediaDate = new Date(mediaData.release_date);
        } else if (mediaData.first_air_date) {
            mediaDate = new Date(mediaData.first_air_date);
        }

        if (mediaDate !== null) {
            releaseYear = mediaDate.getFullYear();
        }

        return releaseYear;
    }

    const getRuntime = () => {
        const minutes = mediaData.runtime % 60;
        const hours = Math.floor(mediaData.runtime / 60);

        return `${hours}h ${minutes}m`;
    }

    const getTagline = () => {
        if (mediaData.name === "Morbius" || mediaData.title === "Morbius"){
            return "It's Morbin' Time";
        }

        return mediaData.tagline ?? "";
    }

    return (
        <div>
            <Box
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
            >
                <Box sx={{display:{xs: 'none', md:'flex'}}} alignItems={'center'}>
                    {mediaData.backdrop_path ?
                        (<img alt={'banner'} src={bg_image} className={styles.movie_banner}/>) :
                        (<img alt={'banner'} src={blankbg.src}/>)
                    }
                </Box>

                <Grid container pt={'6rem'} className={styles.media_info}>
                    <Grid item sm>
                        {mediaData.poster_path ?
                            (<img alt={'poster'} src={poster_image} className={styles.poster}/>) :
                            (<img alt={'poster'} src={blankposter.src} className={styles.poster}/>)
                        }
                    </Grid>

                    <Grid item xs={12} sm={7} container>
                        <Grid item xs={12} className={styles.title_block}>
                            <Typography
                                color={'white'}
                                fontWeight={'bold'}
                                variant={'h4'}
                                pt={'1rem'}
                            >
                                {mediaData.name ?? mediaData.title} ({getReleaseYear()})
                            </Typography>

                            <Typography
                                className={styles.italic_text}
                            >
                                {getTagline()}
                            </Typography>

                            <Typography color={'white'}>
                                {type === 'movie' ? (<>({getRuntime()})</>) : ''}
                            </Typography>
                        </Grid>

                        {/*desktop*/}
                        <Grid item width={'85%'} sx={{backgroundColor: '#f5f3eb', display:{xs: 'none', md:'flex'}}} p={'2rem'} mt={'2vw'}>
                            {type === 'movie' ?
                                <MovieInfo data={mediaData}/> :
                                <TvInfo data={mediaData} />
                            }
                        </Grid>

                        {/*mobile*/}
                        <Grid item width={'100%'} sx={{backgroundColor: '#f5f3eb', display:{xs: 'flex', md:'none'}}} p={'2rem'} mt={'2vw'}>
                            {type === 'movie' ?
                                <MovieInfo data={mediaData}/> :
                                <TvInfo data={mediaData} />
                            }
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default MediaPage;
