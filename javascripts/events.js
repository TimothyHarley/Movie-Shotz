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
        $('.btn-light').not('#morning').toggle();
    })
    $('#afternoon').click(() => {
        $('.locationcard').not('.Afternoon').toggle();
        $('.btn-light').not('#afternoon').toggle();
    })
    $('#evening').click(() => {
        $('.locationcard').not('.Evening').toggle();
        $('.btn-light').not('#evening').toggle();
    })
    $('#dark').click(() => {
        $('.locationcard').not('.After').toggle();
        $('.btn-light').not('#dark').toggle();
    })
}

export {searchbar, buttons}