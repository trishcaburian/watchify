import { Box, Divider, Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import millify from "millify";
import moment from "moment";

//TODO: deconstruct data later to properties being used (ex. overview, etc)
const MovieInfo = ({data}) => {

    const getGenres = () => {
        let genres = [];

        data.genres.map((item) => {
            genres.push(item.name);
        });

        return genres.join(', ');
    }

    const getRevenue = () => {
        if (data.name === "Morbius" || data.title === "Morbius"){
            return "100 Morbillion USD";
        }

        return millify(data.revenue) + " USD";
    }

    const getReleaseDate = () => {
        const releaseDate = new Date(data.release_date);

        return moment(releaseDate).format('MMMM DD, YYYY');
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
                        {/* Movie Info */}
                             <Box pt={2} pb={2}>
                                 <Typography fontSize={'15px'}><b>Release Date:</b> {getReleaseDate()}</Typography>
                             </Box>
                            <Divider/>
                            <Box pt={2} pb={2}>
                                <Typography fontSize={'15px'}>
                                    <b>Genre/s: </b> {getGenres()}
                                </Typography>
                            </Box>

                            {data.revenue > 0 ? (
                                <>
                                    <Divider/>
                                    <Box pt={2} pb={2}>
                                        <Typography fontSize={'15px'}>
                                            <b>Revenue: </b> {getRevenue()}
                                        </Typography>
                                    </Box>
                                </>
                            ) : ""}

                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
    );
}

export default MovieInfo;
