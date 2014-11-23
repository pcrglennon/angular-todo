describe('TodoCtrl', function() {

  var $scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope;
    $controller('TodoCtrl', {$scope: $scope});
  }));

  it('has a list of items', function() {
    expect($scope.items).toBeDefined();
  });

});