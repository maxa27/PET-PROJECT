import { api_key, fetchDataFromServer } from "./api.js";


function searchByGenre(genresContainer) {
    // Функция для создания ссылок на страницу pageWithFilms.html для каждого жанра
    function createGenreLinks(genres) {
        const genresFragment = document.createDocumentFragment();

        genres.forEach(genre => {
            const genreLink = document.createElement("a");
            genreLink.href = `./pageWithFilms.html?genre=${genre.id}`; // Предполагаем, что каждый жанр имеет уникальный идентификатор
            genreLink.classList.add("genre");

            const genreButton = document.createElement("button");
            genreButton.classList.add("plaque-button");

            const genreText = document.createElement("h2");
            genreText.classList.add("plaque-text");
            genreText.textContent = genre.name;

            genreButton.appendChild(genreText);
            genreLink.appendChild(genreButton);
            genresFragment.appendChild(genreLink);
        });

        return genresFragment;
    }

    // Запрос к API для получения данных о жанрах
        fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function(data) {
            const genres = data.genres;
            // Создаем ссылки на страницу movie-list.html для каждого жанра
            const genreLinks = createGenreLinks(genres);
            // Добавляем созданные ссылки в существующий элемент с классом genres
            genresContainer.appendChild(genreLinks);
        });

}

// Вызываем функцию searchByGenre и добавляем созданные жанровые ссылки в существующий элемент с классом genres
const genresContainer = document.querySelector('.genres');
searchByGenre(genresContainer);