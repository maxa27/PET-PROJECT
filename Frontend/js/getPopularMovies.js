import { api_key, fetchDataFromServer, imageBaseURL } from "./api.js";

fetchDataFromServer(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`,  function (data) {
    const swiper = document.getElementById("swiper");

    const popularMovies = getPopularMovies(data);
    swiper.appendChild(popularMovies);
});

function getPopularMovies ({ results: movieList }) {

    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");
    
    for (const movie of movieList) {
    const { poster_path, title, id } = movie;

    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const plaque = document.createElement("a");
    plaque.classList.add("plaque");
    plaque.href = `./detail.html?id=${id}`;

    const img = document.createElement("img");
    img.classList.add("img1");
    img.src = `${imageBaseURL}w500${poster_path}`;
    img.alt = `${title} - poster`


    plaque.appendChild(img);
    swiperSlide.appendChild(plaque);
    swiperWrapper.appendChild(swiperSlide);
    }
    
    return swiperWrapper;
}