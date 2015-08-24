'use strict';

var app = angular.module('app', [
  'ngResource', 
  'ngRoute',
  'appServices',
  'appControllers',
  'appDirectives',
  'ui.bootstrap'
  ])

  .config(function($routeProvider, $locationProvider, $httpProvider) {
    //================================================
    // Check if the user is connected
    //================================================
    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/services/route/loggedin').success(function(user){
        // Authenticated
        if (user !== '0')
          /*$timeout(deferred.resolve, 0);*/
          deferred.resolve();

        // Not Authenticated
        else {
          $rootScope.message = 'Necesitas iniciar sesion';
          //$timeout(function(){deferred.reject();}, 0);
          deferred.reject();
          $location.url('/login');
        }
      });

      return deferred.promise;
    };
    //================================================
    
    //================================================
    // Add an interceptor for AJAX errors
    //================================================
    $httpProvider.interceptors.push(function($q, $location) {
      return {
        response: function(response) {
          // do something on success
          return response;
        },
        responseError: function(response) {
          if (response.status === 401)
            $location.url('/login');
          return $q.reject(response);
        }
      };
    });
    //================================================

    //================================================
    // Define all the routes
    //================================================
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .when('/arboles',{
      	templateUrl: 'views/arboles.html',
        controller: 'arbolesController'
      })

      .when('/arbolesDetalle/:plantas_id',{
        templateUrl: 'views/arbolesDetalle.html',
        controller: 'ArbolDetailCtrl'
      })

      .when('/jornada_ecologica',{
        templateUrl: 'views/jornada_ecologica.html',
        controller: 'jornadaController'
        
      })

      .when('/lista_pagos',{
        templateUrl: 'views/pagos/lista_pagos.html',
        controller: 'pagolistController'
        
      })

      .when('/crear_pago',{
        templateUrl: 'views/pagos/crearpagos.html',
        controller: 'pagoController'
        
      })

      .when('/lista_cotizacion',{
        templateUrl: 'views/cotizaciones/lista_cotizaciones.html',
        controller: 'cotizacionlistController'
        
      })

      .when('/crear_cotizacion',{
        templateUrl: 'views/cotizaciones/crear_cotizacion.html',
        controller: 'cotizacionController'
        
      })

      .when('/lista_proveedores',{
        templateUrl: 'views/proveedores/lista_proveedores.html',
        controller: 'proveedorlistController'
        
      })

      .when('/crear_proveedor',{
        templateUrl: 'views/proveedores/crear_proveedor.html',
        controller: 'proveedorController'
        
      })

      .when('/lista_facturas',{
        templateUrl: 'views/facturas/lista_facturas.html',
        controller: 'facturalistController'
        
      })

      .when('/crear_factura',{
        templateUrl: 'views/facturas/crear_facturas.html',
        controller: 'facturaController'
        
      })
      
      .otherwise({
        redirectTo: '/'
      });
    //================================================

  }) // end of config()
  .run(function($rootScope, $http){
    $rootScope.message = '';

    // Logout function is available in any pages
    $rootScope.logout = function(){
      $rootScope.message = 'Sesion Cerrada.';
      $http.post('/services/route/logout');
    };
  });



