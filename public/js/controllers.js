var appControllers = angular.module('appControllers', []);

app.controller('inicioController', ['$scope', 'Authentication', '$window', '$routeParams',
  function($scope, Authentication, $window, $routeParams, Articles) {
    $scope.authentication = Authentication;
  }]);


app.controller("arbolesController", function ($scope, $http, userServices){
    $http.post('/services/arbolroute/arbolesdisplay').success(function(response) {

        userServices.setUser(response);
        $scope.pageUsers=userServices.getPage();
        $scope.autoPaging = userServices.autoPage()
    });


    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };

    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
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

app.controller("jornadaController", function ($scope,$http, userServices, GEO){
    $http.post("/services/jornadaroute/display").success(function(response) {

        console.log("response");
        userServices.setUser(response);
         $scope.pageUsers=userServices.getPage();
        
    });


    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };

    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
    };

    angular.extend($scope, {
                yanaconas: {
                    lat: 3.423004,
                    lng: -76.606897,
                    zoom: 15
                },
                defaults: {
                    zoomAnimation: false,
                    markerZoomAnimation: false,
                    fadeAnimation: false
                },
                markers: {
                    london: {
                        lat: 51.505,
                        lng: -0.09,
                    }
                }
            });


});

app.controller("jornadaCrearController", function ($http, $scope) {
    $scope.jornada={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/jornadaroute/agregarjornada",$scope.jornada).success(function(response) {

            console.log("response");

        });
    };

});




app.controller("pagoController", function ($http, $scope, $modal, $location, Pagos, Authentication) {
    $scope.authentication = Authentication;

    $scope.showModal=function(){
        $scope.nuevoMiembro={};
            var modalInstance = $modal.open({
                templateUrl: 'views/proveedores/lista_proveedores_modal.html',
                controller: 'proveedormodallistController'
            })
    };

    $scope.changePagosStatus = function(pagos){
        pagos.estado = (pagos.estado=="Pagado" ? "Pendiente" : "Pagado");
        $http.put("api/pagos/"+pagos._id,{estado:pagos.estado});
    };


    $scope.pagosmongo=Pagos.query();

    $scope.pagom = new Pagos();  //crear nombre

    $scope.addPago = function() {
        $scope.pagom.$save()
    };
});

app.controller("cotizacionlistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/cotizacionroute/cotizaciondisplay").success(function(response) {

        console.log("response");
        userServices.setUser(response);
        $scope.pageUsers=userServices.getPage();
        $scope.autoPaging = userServices.autoPage()
    });


    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };

    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
    };


    $scope.changeCotizacionesStatus = function(cotizaciones){
        cotizaciones.estado = (cotizaciones.estado=="Aprobado" ? "Pendiente" : "Aprobado");
        $http.put("services/cotizacionroute/estadocotizacion/"+cotizaciones.cotizacion_id,{estado:cotizaciones.estado});
    };

});

app.controller("cotizacionController", function ($http, $scope) {
    $scope.cotizacion={};
    $scope.submitCreate=  function() {
        $http.put("/services/cotizacionroute/agregarcotizacion",$scope.cotizacion).success(function(response) {
            console.log("response");

        });
    };
  
});


app.controller("proveedorController", function ($http, $scope, $routeParams, Proveedores) {
   $scope.proveedores=Proveedores.query();

    $scope.proveedor = new Proveedores();

    $scope.addProveedor = function() {
        $scope.proveedor.$save() 
    };
  
});

app.controller("proveedormodallistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/proveedorroute/proveedoresdisplay").success(function(response) {

        console.log("response");
        userServices.setUser(response);
        $scope.pageUsers=userServices.getPage();
        $scope.autoPaging = userServices.autoPage()
    });


    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };

    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
    };

});

app.controller("facturaController", function ($scope, $http, $routeParams, Facturas, Authentication){
    $scope.authentication = Authentication;

    $scope.facturas=Facturas.query();

    $scope.factura = new Facturas();

    $scope.addFactura = function() {
        $scope.factura.$save() 
    };
    
    $scope.changeFacturasStatus = function(facturas){
        facturas.estado = (facturas.estado=="Pagada" ? "Pendiente" : "Pagada");
        $http.put("api/facturas/"+facturas._id,{estado:facturas.estado});
    };

    $scope.showModalcliente=function(){
        $scope.nuevoMiembro={};
            var modalInstance = $modal.open({
                templateUrl: 'views/facturas/modal_clientes.html',
                controller: 'clientelistController'
            })
    };

});

app.controller("siembralistController", function ($scope, $http, $routeParams, userServices){
    
    $scope.siembras = function () {
        $http.get("/services/inventarioroute/display").success(function(response) {
            console.log('response')
    });
}

});

app.controller("siembracrearController", function ($http, $scope, $modal) {
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

app.controller("clientelistController", function ($scope, $http, $routeParams, userServices){
    $http.get("/services/clienteroute/display").success(function(response) {

        console.log("response");
        userServices.setUser(response);
        $scope.pageUsers=userServices.getPage();
        $scope.autoPaging = userServices.autoPage()
    });


    $scope.getCurrentPage = function() {
        $scope.pageUsers=userServices.getPage();
    };

    $scope.setPageIndex =function(id) {
        userServices.setPageIndex(id);
        $scope.getCurrentPage();
    };

});

app.controller("crearclienteController", function ($http, $scope) {
    $scope.cliente={};
    $scope.submitCreate=  function() {
        
        $http.put("/services/clienteroute/agregarcliente",$scope.cliente).success(function(response) {

            console.log("response");

        });
    };

});

app.controller("avesController", function ($scope, $http, $routeParams, $location, Aves){
    
    $scope.aves = Aves.query();
    

    $scope.ave = new Aves();  //crear nombre

    $scope.addAve = function() {
        $scope.ave.$save() 
    };

    $scope.updateAve = function (){
        Aves.update($scope.dato);
        $location.path('/aves');
    };
   
});

app.controller("avesDetailCtrl", function ($scope, $http, $routeParams, Aves){
    
   $scope.dato = Aves.show({id: $routeParams._id}, function(datos){
       console.log(datos)
   });

});

app.controller('aveseditController', function($scope, $http, $routeParams, $location, Aves){

  
    $scope.updateEvento = function (){
        Aves.update($scope.dato);
        $location.path('/aves');
    };

    $scope.dato = Aves.show({id: $routeParams._id})

})

app.controller('tareasController', function($scope, $http, $routeParams, $location, Tareas){

    $scope.tareas=Tareas.query();

    $scope.tarea = new Tareas();  //crear nombre

    $scope.addTarea = function() {
        $scope.tarea.$save() 
    };

    $scope.estadoTarea = function(tareas){
        tareas.estado = (tareas.estado=="Cumplida" ? "Pendiente" : "Cumplida");
        $http.put("api/tareas/"+tareas._id,{estado:tareas.estado});
    };


    $scope.dato = Tareas.get({id: $routeParams.id})

    $scope.getTotaltareas = function () {
    return $scope.tareas.length;

  };

  $scope.fecha = new Date();
  $scope.f1 = $scope.fecha.getTime();
  
  $scope.total2 = function(){
        var total = 0;
        angular.forEach($scope.tareas, function(item){
            total = item.fecha1.getTime();
        })

        return total;
    }
  $scope.f2 = function () {
       
     if($scope.total2 == $scope.fecha){
        console.log('cualquier cosas') 
    }
  }
 
    $scope.tachada = function(tareas){
        tareas.done = (tareas.done=="true" ? "false" : "true");
        $http.put("api/tareas/"+tareas._id,{done:tareas.done});
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.tareas, function(item) {
        count += item.estado ? 0 : 1;
        });

        return count;
  };
    
})

app.controller('eventoseditController', function($scope, $http, $routeParams, $location, Eventos){

  
    $scope.updateEvento = function (){
        Eventos.update($scope.dato);
        $location.path('/eventos');
    };

    $scope.dato = Eventos.show({id: $routeParams._id})

})


app.controller('eventosController', function($scope, $http, $routeParams, $location, Eventos){
  $scope.eventos=Eventos.query();

    $scope.evento = new Eventos();  //crear nombre

    $scope.addEvento = function() {
        $scope.evento.$save() 
    };
    
    $scope.dato = Eventos.get({id: $routeParams._id})

    $scope.getTotaleventos = function () {
        return $scope.eventos.length;
      };

})