const getMovies = () => {
    $.get('../../db/movie.json')
        .done((data)=> {
            console.log(data);
            // writeMovies(data.movieList);
        })
        .fail((error)=> {
            console.error('shit broke');
        });
    }

export {getMovies}