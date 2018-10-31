const getMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../../db/movie.json')
            .done((data) => {
                console.log(data);
                resolve(data.movieList)
            })
            .fail((error) => {
                reject('error');
            });
    })
}

export { getMovies }