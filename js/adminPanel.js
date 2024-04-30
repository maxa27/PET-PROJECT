// const fs = require('fs');
// const path = require('path');
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

class Movie {
  constructor(name, description, link, extraInfo, genre) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.extraInfo = extraInfo;
    this.genre = genre;
  }
  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getLink() {
    return this.link;
  }

  getGenre() {
    return this.genre;
  }

  getYear() {
    const year = this.extraInfo.split(", ")[0];
    return year;
  }

  getDuration() {
    const duration = this.extraInfo.split(", ")[1];
    return duration;
  }

  getCountry() {
    const country = this.extraInfo.split(", ")[2];
    return country;
  }
}

// Функция для загрузки данных из файла
function loadMoviesFromFile(filePath) {
  try {
    const data = readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Ошибка при загрузке данных:', err);
    return [];
  }
}

// Функция для сохранения данных в файл
function saveMoviesToFile(filePath, movies) {
  try {
    const data = JSON.stringify(movies, null, 2);
    writeFileSync(filePath, data);
    console.log('Данные успешно сохранены в файл');
  } catch (err) {
    console.error('Ошибка при сохранении данных:', err);
  }
}

const filePath = path.join(__dirname, 'database', 'movies.json');
let movies = loadMoviesFromFile(filePath);

// Перенесите создание объекта фильма в обработчик события формы
document.querySelector("form").addEventListener("submit", (e) => {
  const fields = [
    {
      id: "name",
      errorId: "name_error",
      message: "Имя обязательно для заполнения",
    },
    {
      id: "description",
      errorId: "description_error",
      message: "Описание обязательно для заполнения",
    },
    {
      id: "link",
      errorId: "link_error",
      message: "Ссылка обязательна для заполнения",
    },
    {
      id: "extra-info",
      errorId: "extra_info_error",
      message: "Дополнительная информация обязательна для заполнения",
    },
    {
      id: "genre",
      errorId: "genre_error",
      message: "Жанр обязателен для заполнения",
    },
  ];

  let isValid = true;

  fields.forEach((field) => {
    const value = document.querySelector(`#${field.id}`).value;
    const error = document.querySelector(`#${field.errorId}`);

    if (value === "" || value === null) {
      e.preventDefault();
      error.innerHTML = field.message;
      isValid = false;
    } else {
      error.innerHTML = "";
    }
  });

  if (isValid) {
    const nameMovie = document.querySelector("#name").value;
    const descriptionMovie = document.querySelector("#description").value;
    const linkMovie = document.querySelector("#link").value;
    const extraInfoMovie = document.querySelector("#extra-info").value;
    const genreMovie = document.querySelector("#genre").value;

    const movie = new Movie(
      nameMovie,
      descriptionMovie,
      linkMovie,
      extraInfoMovie,
      genreMovie
    );

    // Добавляем новый фильм в список
    movies.push(movie);
    console.log(movies)
    // Сохраняем обновленный список фильмов в файл
    saveMoviesToFile(filePath, movies);
  }
});

