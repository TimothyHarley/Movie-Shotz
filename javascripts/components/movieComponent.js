const writeMovies = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
        domString += `
        <div>
            <h1>${movie.Name}</h1>
            <h4>A(n) ${movie.Genre} movie</h4>
            <h2>Release Goal: ${movie.estimatedReleaseDate}</h2>
            <h3>${movie.Description}</h3>
        </div>
        `
    })
    $('#filmInfo').html(domString);
}

export {writeMovies}