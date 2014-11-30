describe('TodoCtrl', function() {

  var $scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope;
    $controller('TodoCtrl', {$scope: $scope});
  }));

  // Reset the tasks list
  beforeEach(function() {
    $scope.tasks = [];
    $scope.tasks.push({title: 'Write better tests', priority: 1});
    $scope.tasks.push({title: 'Write more tests', priority: 2});
  })

  it('has a list of tasks', function() {
    expect($scope.tasks).toBeDefined();
  });

  it('has a list of priority levels', function() {
    expect($scope.priorities).toEqual([1, 2, 3]);
  })

  describe('addTask', function() {
    it('adds a task to tasks', function() {
      $scope.newTask = {title: "Write Protractor tests", priority: 2};
      $scope.addTask();
      expect($scope.tasks.length).toEqual(3);
    });
  });

  describe('deleteTask', function() {
    it('deletes a task from tasks', function() {
      $scope.deleteTask(1);
      expect($scope.tasks.length).toEqual(1);
    });

    it('deletes task by index', function() {
      $scope.deleteTask(1);
      expect($scope.tasks[0].title).toEqual('Write better tests');
    });
  });

});