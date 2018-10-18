import {getMovies} from './data/movieData.js'

console.log('js connected')

const appInit = () => {
    getMovies()
};

appInit();