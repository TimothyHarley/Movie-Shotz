import {getMovies} from './data/movieData.js'
import {getLocations} from './data/locationsData.js'
import {searchbar} from './events.js'

console.log('js connected')

const appInit = () => {
    getMovies();
    getLocations();
    searchbar();
};

appInit();