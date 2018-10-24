import {getMovies} from './data/movieData.js'
import {getLocations} from './data/locationsData.js'

console.log('js connected')

const appInit = () => {
    getMovies();
    getLocations();
};

appInit();