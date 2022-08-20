const base_url = "https://api.themoviedb.org/3";

const base_url_img = "https://image.tmdb.org/t/p/original/";

const API_KEY = "913971f0f0b52cde9e8d81396a957f3b";

const requests = [
    {
        name: "Netflix Originals",
        link: base_url + `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "Trending",
        link: base_url + `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    },
    {
        name: "Top Rated",
        link: base_url + `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        name: "Action Movies",
        link: base_url + `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
        name: "Comedy Movies",
        link: base_url + `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "Horror Movies",
        link: base_url + `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
        name: "Romatic Movies",
        link: base_url + `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        name: "Documentaries",
        link: base_url + `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },

]

export default requests;