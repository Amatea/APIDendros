var appControllers = angular.module('appControllers', []);


app.controller('LoginCtrl', function($scope, $rootScope, $http, $location) {
  // This object will be filled by the form
  $scope.user = {};

  // Register the login() function
  $scope.login = function(){
    $http.post('/services/route/login', {
      username: $scope.user.username,
      password: $scope.user.password,
    })
    .success(function(user){
      // No error: authentication OK
      $rootScope.message = 'Usuario Autenticado!';
      $location.url('/services/route/admin');
    })
    .error(function(){
      // Error: authentication failed
      $rootScope.message = 'Autenticacion Fallida.';
      $location.url('/services/route/login');
    });
  };
});


app.controller('AdminCtrl', function($scope, $http) {
  // List of users got from the server
  $scope.users = [];

  // Fill the array to display it in the page
  $http.get('/services/route/users').success(function(users){
    for (var i in users)
      $scope.users.push(users[i]);
  });
});

app.controller("arbolesController", function ($scope, $http, userServices){
    $http.post('/services/arbolroute/arbolesdisplay').success(function(response) {

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

app.controller("ArbolDetailCtrl", function ($http, $scope, $routeParams){

    $http.get('/services/arbolroute/displayDetail/' + $routeParams.plantas_id)
      .success(function(data){
        $scope.arboles = data
        console.log(data)

        })
            .error(function(data) {
                console.log('Error:' + data);
        });
    
  
});

app.controller("jornadaController", function ($scope,$http, userServices){
    $http.post("/services/jornadaroute/display").success(function(response) {

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


appControllers.controller('InventarioDetailCtrl', ['$scope', '$routeParams', 'Inventario',
  function($scope, $routeParams, Inventario) {
    $scope.inventarios = Inventario.get({jornada_id: $routeParams.jornada_id}, function(inventario) {
      $scope.mainImageUrl = inventario.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;

    }
    
  }]);

app.controller("pagolistController", function ($scope,$http, $routeParams, userServices){
    $http.get("/services/pagoroute/pagosdisplay").success(function(response) {

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
        $scope.proveedor_id ='';
        $scope.servicio_id ='';
        $scope.banco   ='';
        $scope.nombre  ='';
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

    $scope.changePagosStatus = function(pagos){
        pagos.estado = (pagos.estado=="Pagado" ? "Pendiente" : "Pagado");
        $http.put("services/pagoroute/estadopago/"+pagos.pago_id,{estado:pagos.estado});
    };
});

app.controller("pagoController", function ($http, $scope, userServices) {
    $scope.pago={};
    $scope.submitCreate=  function() {
        
        $http.post("/services/pagoroute/agregarpago",$scope.pago).success(function(response) {

            console.log("response");

        });
    };

});