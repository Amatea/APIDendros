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

app.controller("jornadaCrearController", function ($http, $scope, userServices) {
    $scope.jornada={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/jornadaroute/agregarjornada",$scope.jornada).success(function(response) {

            console.log("response");

        });
    };

});


app.controller("pagolistController", function ($scope, $http, $routeParams, $modal, userServices){
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

app.controller("pagoController", function ($http, $scope, $modal, userServices) {
    $scope.pago={};
    $scope.submitCreate=  function() {
        $http.post("/services/pagoroute/agregarpago",$scope.pago).success(function(response) {
            console.log("response");

        });
    };

    $scope.showModal=function(){
        $scope.nuevoMiembro={};
            var modalInstance = $modal.open({
                templateUrl: 'views/proveedores/lista_proveedores_modal.html',
                controller: 'proveedormodallistController'
            })
    };

});

app.controller("cotizacionlistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/cotizacionroute/cotizaciondisplay").success(function(response) {

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
        $scope.cotizacion_id ='';
        $scope.numero_cotizacion ='';
        $scope.cliente   ='';
        $scope.elaborado  ='';
        $scope.fecha  ='';
        $scope.estado  ='';
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

    $scope.changeCotizacionesStatus = function(cotizaciones){
        cotizaciones.estado = (cotizaciones.estado=="Aprobado" ? "Pendiente" : "Aprobado");
        $http.put("services/cotizacionroute/estadocotizacion/"+cotizaciones.cotizacion_id,{estado:cotizaciones.estado});
    };

});

app.controller("cotizacionController", function ($http, $scope, userServices) {
    $scope.cotizacion={};
    $scope.submitCreate=  function() {
        $http.put("/services/cotizacionroute/agregarcotizacion",$scope.cotizacion).success(function(response) {
            console.log("response");

        });
    };
  
});

app.controller("proveedorlistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/proveedorroute/proveedoresdisplay").success(function(response) {

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
        $scope.cotizacion_id ='';
        $scope.numero_cotizacion ='';
        $scope.cliente   ='';
        $scope.elaborado  ='';
        $scope.fecha  ='';
        $scope.estado  ='';
    };

    $scope.clickEdit = function(id) {
        userServices.clickEdit(id);

    };


});

app.controller("proveedorController", function ($http, $scope, userServices) {
    $scope.proveedor={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/proveedorroute/agregarproveedor",$scope.proveedor).success(function(response) {
            console.log("response");

        });
    };
  
});

app.controller("proveedormodallistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/proveedorroute/proveedoresdisplay").success(function(response) {

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

});

app.controller("facturalistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/facturaroute/facturasdisplay").success(function(response) {

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
        $scope.cotizacion_id ='';
        $scope.numero_cotizacion ='';
        $scope.cliente   ='';
        $scope.elaborado  ='';
        $scope.fecha  ='';
        $scope.estado  ='';
    };

    $scope.clickEdit = function(id) {
        userServices.clickEdit(id);

    };

    $scope.changeFacturasStatus = function(facturas){
        facturas.estado = (facturas.estado=="Pagada" ? "Pendiente" : "Pagada");
        $http.put("services/facturaroute/estadofactura/"+facturas.factura_id,{estado:facturas.estado});
    };


});

app.controller("facturaController", function ($http, $scope, userServices) {
    $scope.factura={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/facturaroute/agregarfactura",$scope.factura).success(function(response) {

            console.log("response");

        });
    };

});

app.controller("siembralistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/inventarioroute/display").success(function(response) {

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
        $scope.cotizacion_id ='';
        $scope.numero_cotizacion ='';
        $scope.cliente   ='';
        $scope.elaborado  ='';
        $scope.fecha  ='';
        $scope.estado  ='';
    };

    $scope.clickEdit = function(id) {
        userServices.clickEdit(id);

    };

});

app.controller("siembracrearController", function ($http, $scope, $modal, userServices) {
    $scope.siembra={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/inventarioroute/agregarinventario",$scope.siembra).success(function(response) {

            console.log("response");

        });
    };

    $scope.showModalarbol=function(){
        $scope.nuevoMiembro={};
            var modalInstance = $modal.open({
                templateUrl: 'views/inventario_siembras/modal_arboles.html',
                controller: 'arbolesController'
            })
    };

});



