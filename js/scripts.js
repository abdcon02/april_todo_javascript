$(function() {

  var list_array = [];

  $('form#newList').submit(function(event) {
      event.preventDefault();

      var listOption = $('input#list_name').val();
      $('input#list_name').val("");

      var todo = { item: listOption,
                   tasks: []
                   }

      $('#list_items').append('<li class="list_item">' + todo.item + '</li>');

      $('.list_item').last().click(function() {
        $('#selected_list').text(todo.item);
        $('#add-task').show();
      });

      $('form#newTask').submit(function(event) {
        event.preventDefault();

        var taskOption = $('#task_name').val();
        $('#task_name').val('');
        todo.tasks.push(taskOption);
        $('#tasks').append("<li>" + taskOption + "</li>");
      });
  });


});
