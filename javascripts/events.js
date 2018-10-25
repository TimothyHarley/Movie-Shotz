const searchbar = () => {
    $('#searchbar').keyup(() => {
        let search = $('#searchbar').val().toLowerCase();
        $('.searchables').filter(function() {
            $(this).closest('.card').toggle($(this).text().toLowerCase().indexOf(search) > -1)
       });
    })
}

const buttons = () => {
    
}

export {searchbar, buttons}