const info = document
  .querySelector("#submit")
  .addEventListener("click", getInfo);

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

function getInfo() {
  let nameMovie = document.querySelector("#name").value;
  let descriptionMovie = document.querySelector("#description").value;
  let linkMovie = document.querySelector('#link').value;
  let extraInfoMovie = document.querySelector('#extra-info').value;
  let genreMovie = document.querySelector('#genre').value;

  const movie = new Movie(nameMovie, descriptionMovie, linkMovie, extraInfoMovie, genreMovie);
  console.log(movie)
  alert(`Movie pushed (:")`)
}
