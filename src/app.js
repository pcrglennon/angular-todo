var app = angular.module('app', [])

.controller('TodoCtrl', function($scope) {
  $scope.title = "General Todos";
  $scope.tasks = [
    { title: "Hang dry-erase board", priority: 3 },
    { title: "Bring box to Salvo", priority: 2 },
    { title: "Go to Gym", priority: 1 }
  ];

  $scope.priorities = [1, 2, 3];

  $scope.addTask = function() {
    $scope.tasks.push({title: $scope.newTask.title, priority: $scope.newTask.priority});
  };
})

;
