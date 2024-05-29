import { api_key, fetchDataFromServer, imageBaseURL } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");

  if (movieId) {
    fetchDataFromServer(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}&page=1`,
      (data) => {
        const filmContainer = document.getElementById("film-container");

        const createdFilms = createRecommendedFilmsBlock(data, "film-wrapper", "film-slide");
        filmContainer.appendChild(createdFilms);
      }
    );
  }
});

export default function createRecommendedFilmsBlock({ results: movieList }, containerClass, elementClass) {
  const filmsWrappers = document.createElement("div");
  filmsWrappers.classList.add(containerClass);

  for (const movie of movieList) {
    const { poster_path, title, vote_average, release_date, id } = movie;

    const filmSlide = document.createElement("div");
    filmSlide.classList.add(elementClass);

    // Создаем элемент a с классом plaque
    const plaque = document.createElement("a");
    plaque.classList.add("plaque");
    plaque.href = `./detail.html?id=${id}`;

    // Создаем элемент img с классом imge
    const img = document.createElement("img");
    img.classList.add("imge");
    img.src = `${imageBaseURL}w500${poster_path}`;
    img.alt = title;

    // Создаем элемент span с классом name-film
    const nameFilm = document.createElement("span");
    nameFilm.classList.add("name-film");
    nameFilm.textContent =
      title.length > 24 ? movie.title.substring(0, 20) + " . . ." : movie.title;

    // Создаем элемент br
    const lineBreak = document.createElement("br");

    // Создаем элемент i с классом bx bxs-star и стилем
    const starIcon = document.createElement("i");
    starIcon.classList.add("bx", "bxs-star");
    starIcon.style.color = "#ffd400";

    // Создаем текстовый узел для рейтинга
    const ratingText = document.createTextNode(vote_average.toFixed(1));

    // Создаем элемент span с классом year-film
    const yearFilm = document.createElement("span");
    yearFilm.classList.add("year-film");
    yearFilm.textContent = release_date.split("-")[0];

    // Собираем все элементы в структуру
    plaque.appendChild(img);
    plaque.appendChild(nameFilm);
    plaque.appendChild(lineBreak);
    plaque.appendChild(starIcon);
    plaque.appendChild(ratingText);
    plaque.appendChild(yearFilm);
    filmSlide.appendChild(plaque);
    filmsWrappers.appendChild(filmSlide);
  }
  return filmsWrappers;
}
