import {writeLocations} from '../components/locationComponent.js'

const getLocations = () => {
    $.get('../../db/locations.json')
        .done((data)=> {
            console.log(data);
            writeLocations(data.locations);
        })
        .fail((error)=> {
            console.error('error');
        });
    }

export {getLocations}