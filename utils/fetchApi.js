import axios from "axios";

export const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/w500";

export const fetchApi = async (url) => {
    url += `?api_key=${process.env.NEXT_TMDB_API_KEY}`;
    const { data } = await axios.get((url), {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_TMDB_API_KEY}`
        }
    });

    return data;
}
