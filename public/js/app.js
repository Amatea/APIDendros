'use strict';

var app = angular.module('app', [
  'ngResource', 
  'ngRoute',
  'appServices',
  'appControllers',
  'appDirectives',
  'leaflet-directive',
  'ui.bootstrap'
  ]);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: '/inicio.html'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
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
      .when('/aves',{
        templateUrl: 'views/aves/aves.html',
        controller: 'avesController'
      })
      .when('/crear_ave',{
        templateUrl: 'views/aves/crear_ave.html',
        controller: 'avesController' 
      })
      .when('/avesDetalle/:_id',{
        templateUrl: 'views/aves/avesDetalle.html',
        controller: 'avesDetailCtrl'
      })
      .when('/editar_aves/:_id',{
        templateUrl: 'views/aves/edit.html',
        controller: 'aveseditController'
      })
      .when('/jornada_ecologica',{
        templateUrl: 'views/jornada_ecologica.html',
        controller: 'jornadaController' 
      })
      .when('/crear_jornada',{
        templateUrl: 'views/jornadas/crear_jornada.html',
        controller: 'jornadaCrearController'
      })
      .when('/lista_pagos',{
        templateUrl: 'views/pagos/',
        controller: 'pagoController' 
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
        controller: 'proveedorController'
        
      })
      .when('/proveedores/:id',{
        templateUrl: 'views/proveedores/lista_proveedores_modal.html',
        controller: 'proveedorController' 
      })
      .when('/crear_proveedor',{
        templateUrl: 'views/proveedores/crear_proveedor.html',
        controller: 'proveedorController' 
      })
      .when('/lista_facturas',{
        templateUrl: 'views/facturas/lista_facturas.html',
        controller: 'facturaController' 
      })
      .when('/crear_factura',{
        templateUrl: 'views/facturas/crear_facturas.html',
        controller: 'facturaController' 
      })
      .when('/lista_inventario_siembras',{
        templateUrl: 'views/inventario_siembras/lista_siembras.html',
        controller: 'siembralistController'
      })
      .when('/crear_inventario_siembras',{
        templateUrl: 'views/inventario_siembras/crear_siembras.html',
        controller: 'siembracrearController'
      })
      .when('/lista_clientes',{
        templateUrl: 'views/clientes/lista_clientes.html',
        controller: 'clientelistController'  
      })
      .when('/crear_cliente',{
        templateUrl: 'views/clientes/crear_cliente.html',
        controller: 'crearclienteController' 
      })
      .when('/tareas',{
        templateUrl: 'views/tareas/tareas.html',
        controller: 'tareasController'
        
      })
      .when('/crear_tarea',{
        templateUrl: 'views/tareas/crear_tarea.html',
        controller: 'tareasController' 
      })
      .when('/crear_evento',{
        templateUrl: 'views/eventos/crear_evento.html',
        controller: 'eventosController'
      })
      .when('/eventos',{
        templateUrl: 'views/eventos/eventos.html',
        controller: 'eventosController'
      })
      .when('/editar_eventos/:_id',{
        templateUrl: 'views/eventos/edit.html',
        controller: 'eventoseditController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  



