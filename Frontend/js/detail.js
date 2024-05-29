import { api_key, fetchDataFromServer, imageBaseURL } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");

  if (movieId) {
    fetchDataFromServer(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts,videos,images,releases`,
      (data) => {
        const moviesDetail = document.getElementById("movie-detail");
        const trailers = document.getElementById("trailers-container");

        const movieElement = createMovie(data);
        const createdTrailers = getTrailers(data);
        moviesDetail.appendChild(movieElement);
        trailers.appendChild(createdTrailers);
      }
    );
    // fetchDataFromServer(
    //   `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}&page=1`,
    //   (data) => {
    //     const filmContainer = document.getElementById("film-container");

    //     const createdFilms = createRecommendedFilmsBlock(data);
    //     console.log(createdFilms)
    //     filmContainer.appendChild(createdFilms);
    //   }
    // );
  }
});

 
function getGenres (genreList) {
  if (!genreList) return "";
  return genreList.map((genre) => genre.name).join(", ");
};

const getCasts = function (castList) {
  if (!castList) return "";
  return castList
    .slice(0, 10)
    .map((cast) => cast.name)
    .join(", ");
};

const getDirectors = function (crewList) {
  if (!crewList) return "";
  return crewList
    .filter((member) => member.job === "Director")
    .map((director) => director.name)
    .join(", ");
};
// returns only trailers and teasers as array
const filterVideos = function (videoList) {
  const neadedVideos = videoList.filter(
    ({ type, site }) =>
      (type === "Trailer" || type === "Teaser") && site === "YouTube"
  );
  console.log(neadedVideos)
  return neadedVideos;

};

function createMovie(movie) {
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    vote_average,
    genres,
    overview,
    casts: { cast, crew } = { cast: [], crew: [] },
  } = movie;

  document.title = `${title} - Hexflix`;

  const backdropImage = document.createElement("div");
  backdropImage.classList.add("backdrop-image");
  backdropImage.style.backgroundImage = `url('${imageBaseURL}${
    "w1280" || "original"
  }${backdrop_path || poster_path}')`;

  const posterBox = document.createElement("figure");
  posterBox.classList.add("poster-box", "movie-poster");
  const posterImage = document.createElement("img");
  posterImage.classList.add("img-cover");
  posterImage.src = `${imageBaseURL}w500${poster_path}`;
  posterImage.alt = `${title} poster`;
  posterBox.appendChild(posterImage);

  const detailBox = document.createElement("div");
  detailBox.classList.add("detail-box");

  const detailContent = document.createElement("div");
  detailContent.classList.add("detail-content");

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = title;

  const metaList = document.createElement("div");
  metaList.classList.add("meta-list");

  const starSeparator = document.createElement("div");
  starSeparator.classList.add("separator");
  const starIcon = document.createElement("i");
  starIcon.classList.add("bx", "bxs-star");
  starIcon.style.color = "#ffd400";
  starSeparator.appendChild(starIcon);

  const ratingElement = document.createElement("div");
  ratingElement.classList.add("meta-item");
  ratingElement.textContent = vote_average.toFixed(1);

  const runtimeSeparator = document.createElement("div");
  runtimeSeparator.classList.add("separator");
  runtimeSeparator.textContent = "•";

  const runtimeElement = document.createElement("div");
  runtimeElement.classList.add("meta-item");
  runtimeElement.textContent = `${runtime}m`;

  const releaseSeparator = document.createElement("div");
  releaseSeparator.classList.add("separator");
  releaseSeparator.textContent = "•";

  const releaseYearElement = document.createElement("div");
  releaseYearElement.classList.add("meta-item");
  releaseYearElement.textContent = release_date.split("-")[0];

  metaList.appendChild(starSeparator);
  metaList.appendChild(ratingElement);
  metaList.appendChild(runtimeSeparator);
  metaList.appendChild(runtimeElement);
  metaList.appendChild(releaseSeparator);
  metaList.appendChild(releaseYearElement);

  const genreElement = document.createElement("p");
  genreElement.classList.add("genre");
  genreElement.textContent = getGenres(genres);

  const overviewElement = document.createElement("p");
  overviewElement.classList.add("overview");
  overviewElement.textContent = overview;

  const castListElement = document.createElement("ul");
  castListElement.classList.add("detail-list");
  const castItem = document.createElement("div");
  castItem.classList.add("list-item");
  const castName = document.createElement("p");
  castName.classList.add("list-name");
  castName.textContent = "Starring";
  const castStars = document.createElement("p");
  castStars.classList.add("stars");
  castStars.textContent = getCasts(cast);
  castItem.appendChild(castName);
  castItem.appendChild(castStars);
  castListElement.appendChild(castItem);

  const directorListElement = document.createElement("ul");
  directorListElement.classList.add("detail-list");
  const directorItem = document.createElement("div");
  directorItem.classList.add("list-item");
  const directorName = document.createElement("p");
  directorName.classList.add("list-name");
  directorName.textContent = "Directed By";
  const directorProducer = document.createElement("p");
  directorProducer.classList.add("producer");
  directorProducer.textContent = getDirectors(crew);
  directorItem.appendChild(directorName);
  directorItem.appendChild(directorProducer);
  directorListElement.appendChild(directorItem);

  detailContent.appendChild(heading);
  detailContent.appendChild(metaList);
  detailContent.appendChild(genreElement);
  detailContent.appendChild(overviewElement);
  detailContent.appendChild(castListElement);
  detailContent.appendChild(directorListElement);

  detailBox.appendChild(detailContent);

  const movieDetailsContainer = document.createElement("div");
  movieDetailsContainer.classList.add("movie-detail"); // Изменяем на .movie-detail
  movieDetailsContainer.appendChild(backdropImage);
  movieDetailsContainer.appendChild(posterBox);
  movieDetailsContainer.appendChild(detailBox);
  return movieDetailsContainer;
}

function getTrailers(movie) {
    
    const {
      videos: { results: videos },
    } = movie;

    const trailersWrappers = document.createElement("div");
    trailersWrappers.classList.add("trailers-wrappers");
  
for (const { key, name } of filterVideos(videos)) {
  const trailersSlide = document.createElement("div");
  trailersSlide.classList.add("trailers-slide");
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = `https://www.youtube.com/embed/${key}?theme=dark&color=white&rel=0`;

  const video = document.createElement("iframe");
    video.src = `https://www.youtube.com/embed/${key}?theme=dark&color=white&rel=0`;
    video.classList.add("video-slide");
    video.width = "270";
    video.height = "200";
    video.frameBorder = "0";
    video.allowFullscreen = true;
    video.style.pointerEvents = "none";
    video.title = name;
    video.classList.add("imgv");
    video.loading = "lazy";

    link.appendChild(video);
    trailersSlide.appendChild(link);


  // trailersSlide.innerHTML = `<iframe width="350" height="200" src="https://www.youtube.com/embed/${key}?theme=dark&color=white&rel=0" frameborder="0" allowfullscreen="1" title="${name}" class="imgv" loading="lazy"></iframe>`;

  trailersWrappers.appendChild(trailersSlide);
}

  
    return trailersWrappers;
  }

  // function createRecommendedFilmsBlock(data) {
  //   const { results: movieList } = data;
  
  //   const filmsWrappers = document.createElement("div");
  //   filmsWrappers.classList.add("film-wrapper");
  
  //   for (const movie of movieList) {
  //     const {
  //       poster_path,
  //       title,
  //       vote_average,
  //       release_date,
  //       id
  //     } = movie;
  
  //     const filmSlide = document.createElement("div");
  //     filmSlide.classList.add("film-slide");
  
  //     // Создаем элемент a с классом plaque
  //     const plaque = document.createElement("a");
  //     plaque.classList.add("plaque");
  //     plaque.href = `./detail.html?id=${id}`;
  
  //     // Создаем элемент img с классом imge
  //     const img = document.createElement("img");
  //     img.classList.add("imge");
  //     img.src = `${imageBaseURL}w500${poster_path}`; // Добавляем размер и путь к изображению
  //     img.alt = title;
  
  //     // Создаем элемент span с классом name-film
  //     const nameFilm = document.createElement("span");
  //     nameFilm.classList.add("name-film");
  //     nameFilm.textContent = title;
  
  //     // Создаем элемент br
  //     const lineBreak = document.createElement("br");
  
  //     // Создаем элемент i с классом bx bxs-star и стилем
  //     const starIcon = document.createElement("i");
  //     starIcon.classList.add('bx', 'bxs-star');
  //     starIcon.style.color = '#ffd400';
  
  //     // Создаем текстовый узел для рейтинга
  //     const ratingText = document.createTextNode(vote_average.toFixed(1));
  
  //     // Создаем элемент span с классом year-film
  //     const yearFilm = document.createElement("span");
  //     yearFilm.classList.add("year-film");
  //     yearFilm.textContent = release_date.split("-")[0];
  
  //     // Собираем все элементы в структуру
  //     plaque.appendChild(img);
  //     plaque.appendChild(nameFilm);
  //     plaque.appendChild(lineBreak);
  //     plaque.appendChild(starIcon);
  //     plaque.appendChild(ratingText);
  //     plaque.appendChild(yearFilm);
  //     filmSlide.appendChild(plaque);
  //     filmsWrappers.appendChild(filmSlide);
  //   }
  //   return filmsWrappers;
  // }




  
