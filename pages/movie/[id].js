import {baseUrl, fetchApi} from "../../utils/fetchApi";
import MediaPage from "../../components/MediaPage";

const MovieDetails = ({movieData}) => {
    return (<MediaPage mediaData={movieData} type={'movie'}/> );
}

export default MovieDetails;

export async function getServerSideProps({ params: {id} }) {
    const data = await fetchApi(`${baseUrl}/movie/${id}`);

    return {
        props: {
            movieData: data
        }
    }
}
