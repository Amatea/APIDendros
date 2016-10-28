var appControllers = angular.module('appControllers', []);

app.controller('amateappController', ['$scope', 'Authentication', '$window', '$routeParams',
  function($scope, Authentication, $window, $routeParams, Articles) {
    $scope.authentication = Authentication;

    $scope.saludo = 'hola';
  }]);