var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('dendrosAdministrador', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/dendros-administrador.html',
	};
});

appDirectives.directive('dendrosHeader', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/dendros-header.html',
	};
});