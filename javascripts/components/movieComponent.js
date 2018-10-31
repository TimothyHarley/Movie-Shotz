import { getMovies } from '../data/movieData.js';

const writeMovies = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
        domString += `
        <div class="card m-1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${movie.Name}</h5>
          <p class="card-text">${movie.Description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${movie.Genre}</li>
          <li class="list-group-item">${movie.estimatedReleaseDate}</li>
          <li class="list-group-item">${movie.locations.length} filming locations</li>
        </ul>
      </div>
    `
    })
    $('#filmInfo').html(domString);
}

const initMovies = () => {
  getMovies().then((arrayOfMovies) => {
      writeMovies(arrayOfMovies);
  }).catch((error) => {
      console.error(error);
  })
}

export { initMovies }