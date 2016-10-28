var appControllers = angular.module('appControllers', []);

app.controller('webController', ['$scope', 'Authentication', '$window', '$routeParams',
  function($scope, Authentication, $window, $routeParams, Articles) {
    $scope.authentication = Authentication;

    $scope.saludo = 'hola';
  }]);