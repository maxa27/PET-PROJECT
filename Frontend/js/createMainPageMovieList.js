import { api_key, fetchDataFromServer, imageBaseURL } from "./api.js";
import  createMovieSection  from "./getRecommendedMoviesForDeatilPage.js"


fetchDataFromServer(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,  function (data) {
    const swiper = document.getElementById("film-container");

    const popularMovies = createMovieSection(data, "film-wrapper", "film-slide");
    swiper.appendChild(popularMovies);
});

fetchDataFromServer(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,  function (data) {
    const swiper = document.getElementById("film-containerr");

    const popularMovies = createMovieSection(data, "film-wrapperr", "film-slidee");
    swiper.appendChild(popularMovies);
});



