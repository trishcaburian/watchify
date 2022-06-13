import {baseUrl, fetchApi} from "../../utils/fetchApi";
import MediaPage from "../../components/MediaPage";

const TvDetails = ({tvData}) => {
    return (<MediaPage mediaData={tvData} type={'tv'}/>);
}

export default TvDetails;

export async function getServerSideProps({ params: {id} }) {
    const data = await fetchApi(`${baseUrl}/tv/${id}`);

    return {
        props: {
            tvData: data
        }
    }
}
