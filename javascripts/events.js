const searchbar = () => {
    $('#searchbar').keyup(() => {
        let search = $('#searchbar').val().toLowerCase();
        $('.searchables').filter(function() {
            $(this).closest('.locationCard').toggle($(this).text().toLowerCase().indexOf(search) > -1)
       });
    })
}

const buttons = () => {
    $('#morning').click(() => {
        $('.locationcard').not('.Morning').toggle();
    })
    $('#afternoon').click(() => {
        $('.locationcard').not('.Afternoon').toggle();
    })
    $('#evening').click(() => {
        $('.locationcard').not('.Evening').toggle();
    })
    $('#dark').click(() => {
        $('.locationcard').not('.After').toggle();
    })
}

export {searchbar, buttons}