import {getMovies} from './data/movieData.js'
import {initLocations} from './components/locationComponent.js'
import {searchbar, buttons} from './events.js'

console.log('js connected')

const appInit = () => {
    getMovies();
    initLocations();
    searchbar();
    buttons();
};

appInit();