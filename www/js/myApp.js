
var myApp = angular.module('App', [
    'ngRoute', 
    'mymod'
    ]);

myApp.config( ['$routeProvider',function ($routeProvider ) {
    $routeProvider.
        when('/', {
            controller: 'TableController',
            templateUrl: 'html/table.html'
        }).
        when('/edit', {
            controller: 'EditController',
            templateUrl: 'html/edit.html'
        }).
        when('/create', {
            controller: 'CreateController',
            templateUrl: 'html/create.html'
        }).
        when('/create2', {
            controller: 'EditController',
            templateUrl: 'html/create2.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);


