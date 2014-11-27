describe('TodoCtrl', function() {

  var $scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope;
    $controller('TodoCtrl', {$scope: $scope});
  }));

  it('has a list of tasks', function() {
    expect($scope.tasks).toBeDefined();
  });

  it('has a list of priority levels', function() {
    expect($scope.priorities).toEqual([1, 2, 3]);
  })

  describe('addTask', function() {

    beforeEach(function() {
      $scope.tasks = [];
      $scope.tasks.push({title: "Write better tests", priority: 1});
      $scope.tasks.push({title: "Write more tests", priority: 2});
    })

    it('adds a task to tasks', function() {
      $scope.newTask = {title: "Write Protractor tests", priority: 2};
      $scope.addTask();
      expect($scope.tasks.length).toEqual(3);
    });
  });

});