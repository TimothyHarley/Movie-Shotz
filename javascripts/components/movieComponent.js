const writeMovies = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
        domString += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${movie.Name}</h5>
          <p class="card-text">${movie.Description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${movie.Genre}</li>
          <li class="list-group-item">${movie.estimatedReleaseDate}</li>
          <li class="list-group-item">${movie.locations}</li>
        </ul>
      </div>
    `
    })
    $('#filmInfo').html(domString);
}

export { writeMovies }

//make a variable for a string builder to 
//  put in the place of '${movie.locations}'
//  *trying to get the locations to load in a column