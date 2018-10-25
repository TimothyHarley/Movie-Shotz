const writeLocations = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${location.Image}" alt="Card image cap">
            <div class="card-body searchables">
                <h5 class="card-title">${location.Name}</h5>
                <p class="card-text">${location.Address}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${location.Shoot_Time}</li>
            </ul>
        </div>
        `
    })
    $('#locationCards').html(domString);
}

export {writeLocations}