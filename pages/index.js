import {baseUrl,fetchApi} from "../utils/fetchApi";
import TrendingContainer from "../components/TrendingContainer";

export default function Home({ items }) {
    return (<TrendingContainer items={items} />);
}

export async function getStaticProps() {
    const data = await fetchApi(`${baseUrl}/trending/all/week`);
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
