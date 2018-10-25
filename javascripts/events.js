const searchbar = () => {
    $('#searchbar').keyup(() => {
        console.log('keypress detected');
        let search = $('#searchbar').val().toLowerCase();
        $('.searchables').filter(function() {
            $(this).closest('.card').toggle($(this).text().toLowerCase().indexOf(search) > -1)
       });
    })
}

export {searchbar}