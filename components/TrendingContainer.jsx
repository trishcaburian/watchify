import {Box, Grid, Typography} from "@mui/material";
import MediaPanel from "./MediaPanel";

const TrendingContainer = ({ items }) => {
    return (
        <div>
            <Box
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                pt={'5rem'}
            >
                <Typography variant={'h4'} fontFamily={'monospace'} color={'white'}>Trending</Typography>
            </Box>

            <Grid justifyContent={'center'} pb={5} container>
                {items.map((item) => (
                    <Grid key={item.id} p={4} item>
                        <MediaPanel media={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default TrendingContainer;
