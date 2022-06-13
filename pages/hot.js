import {baseUrl, fetchApi} from "../utils/fetchApi";
import TrendingContainer from "../components/TrendingContainer";

const Hot = ({items}) => (<TrendingContainer items={items}/>);

export default Hot;

export async function getServerSideProps({ query }) {
    let media_type = query?.media_type ? query.media_type : 'all';

    switch (media_type) {
        case 'movies':
            media_type = 'movie';
            break;
    }

    const data = await fetchApi(`${baseUrl}/trending/${media_type}/week`);
    let results = [];
    if (data?.results) {
        Object.keys(data.results).forEach((key) => {
            results.push(data.results[key]);
        })
    }

    return {
        props: {
            items: results
        }
    }
}
