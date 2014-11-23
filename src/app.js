var app = angular.module('app', [])

.controller('TodoCtrl', function($scope) {
  $scope.title = "General Todos";
  $scope.items = [
    { title: "Hang dry-erase board", priority: 4 },
    { title: "Bring box to Salvo", priority: 2 },
    { title: "Go to Gym", priority: 1 }
  ];
})

.directive('todoItem', function() {
  return {
    restrict: 'E',
    template: '<h4>{{item.title}}</h4>' +
               '<h5>Priority: {{item.priority}}</h5>' +
               '<button>Done</button>'
  }
})

;
