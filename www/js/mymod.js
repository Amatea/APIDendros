var mymod = angular.module('mymod', [
    'appServices'
    ]);

mymod.controller("TableController", function ($scope,$http, userServices){
    $http.post("/services/route/display").success(function(response) {

        console.log("response");
        userServices.setUser(response);
        $scope.pageUsers=userServices.getPage();
        $scope.autoPaging = userServices.autoPage()
    });

    $scope.sort = function (id) {
        $scope.sortID = id;
    };

    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };



    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
    };

    $scope.clickCreate = function(){
        $scope.fName ='';
        $scope.lName ='';
        $scope.age   ='';
        $scope.sex   ='';
    };

    $scope.clickEdit = function(id) {
        userServices.clickEdit(id);

    };

    $scope.deleteUser = function(id){
        $scope.pageUsers=userServices.deleteUser(id);
        $scope.autoPaging = userServices.autoPage()
        $http.post("/services/route/deleteUser",$scope.user).success(function(response) {

            console.log("response");

        });
    };
});

mymod.controller("EditController", function ($http,$scope, userServices)
{
    $scope.user=userServices.getCurrentEdit()

    $scope.submitEdit=  function() {

        $http.post("/services/route/editUser",$scope.user).success(function(response) {

            console.log("response");

        });
    };
});

mymod.controller("CreateController", function ($http, $scope, userServices) {
    $scope.user={};
    $scope.submitCreate=  function() {
        
        $http.post("/services/route/addUser",$scope.user).success(function(response) {

            console.log("response");

        });
    };

});