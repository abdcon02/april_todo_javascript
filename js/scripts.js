$(function() {

    $('form#newList').submit(function(event) {
        event.preventDefault();

        var listOption = $('input#list_name').val();
        $('input#list_name').val("");

        var todo = { item: listOption,
                     tasks: []
                     }

        $('#list_items').append('<li>' + todo.item + '</li>');

        



    });


});
