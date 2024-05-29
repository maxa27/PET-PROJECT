import { api_key, imageBaseURL, fetchDataFromServer } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const genreId = urlParams.get("genre");

  if (genreId) {
    const genreName = getGenreNameById(genreId);
    document.getElementById("genre-title").textContent = genreName;

    fetchDataFromServer(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}`,
      (data) => {
        const moviesGrid = document.getElementById("movies-grid");
        moviesGrid.innerHTML = "";

        data.results.forEach((movie) => {
          const movieElement = createMovieElement(movie); // Заменено на использование функции createMovieElement
          moviesGrid.appendChild(movieElement);
        });
        document.title = `${getGenreNameById(genreId)} - Hexflix`
      }
    );
  }
});

function getGenreNameById(id) {
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  return genres[id] || "Movies";
}

function createMovieElement(movie) {
  const movieElement = document.createElement("a");
  movieElement.href = `./detail.html?id=${movie.id}`;
  movieElement.className = "movie_link";

  const shortenedTitle =
    movie.title.length > 18
      ? movie.title.substring(0, 16) + " . . ."
      : movie.title;
  const ratingFixed = movie.vote_average.toFixed(1);

  movieElement.innerHTML = `
      <img src="${imageBaseURL}w500${movie.poster_path}" alt="${movie.title}" />
      <h3 class="movie-title">
        ${shortenedTitle} <br />
        <i class="bx bxs-star" style="color: #fff000"></i>
        <span class="rating">${ratingFixed}</span>
        <span class="movie-year">${movie.release_date.split("-")[0]}</span>
      </h3>
    `;

  return movieElement;
}
