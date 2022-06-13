import { Box, Divider, Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from "moment";

const TvInfo = ({data}) => {

    const getFormattedDate = (date) => {
        const releaseDate = new Date(date);

        return moment(releaseDate).format('MMMM DD, YYYY');
    }

    const getGenres = () => {
        let genres = [];

        data.genres.map((item) => {
            genres.push(item.name);
        });

        return genres.join(', ');
    }

    return (
        <>
            <Grid
                container
                direction={'column'}
            >
                <Grid item>
                    {data.overview}
                </Grid>

                <Grid item pt={'2rem'}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontSize={'20px'} fontWeight={'bold'}>Info</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* Show Info */}
                            <Box pt={2} pb={2}>
                                <Typography fontSize={'15px'}>
                                    <b>First Aired:</b> {getFormattedDate(data.first_air_date)}
                                </Typography>
                            </Box>
                            <Divider/>
                            <Box pt={2} pb={2}>
                                <Typography fontSize={'15px'}>
                                    <b>Genre/s:</b> {getGenres()}
                                </Typography>
                            </Box>
                            <Divider/>
                            <Box pt={2} pb={2}>
                                <Typography fontSize={'15px'}>
                                    <b>Season/s:</b> {data.number_of_seasons}
                                </Typography>
                            </Box>
                            <Divider/>
                            <Box pt={2} pb={2}>
                                <Typography fontSize={'15px'}>
                                    <b>Total Episodes:</b> {data.number_of_episodes}
                                </Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
    );
}

export default TvInfo;
