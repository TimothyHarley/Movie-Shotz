import { getLocations } from '../data/locationsData.js';

const writeLocations = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
        <div class="mt-4 card locationCard ${location.Shoot_Time}" style="max-width: 18rem; min-width: 18rem;">
            <img class="card-img-top" src="${location.Image}" alt="Card image cap">
            <div class="card-body searchables">
                <h5 class="card-title">${location.Name}</h5>
                <p class="card-text">${location.Address}</p>
            </div>
            <ul class="list-group list-group-flush toggleable">
                <li class="list-group-item">${location.Shoot_Time}</li>
            </ul>
        </div>
        `
    })
    $('#locationCards').html(domString);
}

const initLocations = () => {
    getLocations().then((arrayOfLocations) => {
        writeLocations(arrayOfLocations);
    }).catch((error) => {
        console.error(error);
    })
}

export { initLocations }