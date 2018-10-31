import {initMovies} from './components/movieComponent.js'
import {initLocations} from './components/locationComponent.js'
import {searchbar, buttons} from './events.js'

console.log('js connected')

const appInit = () => {
    initMovies();
    initLocations();
    searchbar();
    buttons();
};

appInit();