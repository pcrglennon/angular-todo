(function() {
  var app = angular.module('todo-list', [ ]);

  app.controller('ListController', function() {
    this.title = "General Todos";
    this.items = [
      {
        title: "Hang dry-erase board",
        priority: 4
      },
      {
        title: "Bring box to Salvo",
        priority: 2
      },
      {
        title: "Go to Gym",
        priority: 1
      }
    ];
  });
}) ();
