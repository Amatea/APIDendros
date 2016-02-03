var app = angular.module('app', []);

app.controller("formController" , function ($http, $scope) {
    $scope.formulario={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/formularioroute/agregar",$scope.formulario).success(function(response) {

            console.log("response");

        });
    };

});
