$(function() {

  //CREATE A NEW LIST
  $('form#newList').submit(function(event) {
      event.preventDefault();

      var listOption = $('input#list_name').val();
      $('input#list_name').val("");

      var todo = { item: listOption,
                   tasks: []
                   }

      $('#list_items').append('<li class="list_item">' + todo.item + '</li>');


      //CLICK ON A LIST ITEMS
      $('.list_item').last().click(function() {
        $('#selected_list').text(todo.item);

        $('form#newTask').off('submit');


        //ADD A NEW TASK
        $('form#newTask').submit(function(event) {
          event.preventDefault();

          var taskOption = $('#task_name').val();
          todo.tasks.push(taskOption);
          $('#tasks').append("<li class='task_item'>" + taskOption + "</li>");
          $('.task_item').last().click(function() {
            $(this).remove();
            todo.tasks = [];
          });
          $('#task_name').val('');
        });

        $("#tasks").empty();
        todo.tasks.forEach(function(task) {
          $("#tasks").append('<li class="task_item">' + task + '</li>');
          $('.task_item').last().click(function() {
            $(this).remove();
            todo.tasks = [];
          });

        });


        $('#add-task').show();
      });
  });
});
