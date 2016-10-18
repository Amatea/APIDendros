angular.module('appServices', [])
    .service("userServices", function ($http) {
        var users={};
        var pageSize=100;
        var page=0;
        var editID=0;
        return {
            getPage : function () {

                return  users.slice( page * pageSize, page * pageSize + pageSize);
            },

            setPageIndex : function(id){
                page=id-1;
            },

            autoPage : function () {
                var rem = users.length % pageSize;
                var x;
                if(rem == 0) { x =  users.length  / pageSize;}
                else        { x = ( users.length - rem ) / pageSize + 1;}
                var arr = new Array(x);
                console.log(x);
                for (var i =0; i < x; i++) {
                    arr[i]=i+1;
                }
                return arr;
            },

            setUser : function(userdata){
               users = userdata;
            },

        };
    });

app.factory('GEO', ['$resource', function($resource){
    return $resource('api/GEO/:id', {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    })
}]);

app.factory('Tareas', ['$resource', function($resource){
    return $resource('api/tareas/:id', {id: '@_id'}, {
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
    })
}]);

app.factory('Facturas', ['$resource', function($resource){
    return $resource('api/facturas/:id', {id: '@_id'}, {
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
    })
}]);

app.factory('Eventos', ['$resource', function($resource){
    return $resource('api/eventos/:id', {id: '@_id'}, {
        show: { method: 'GET'},
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
    })
}]);

app.factory('Aves', ['$resource', function($resource){
    return $resource('api/aves/:id', {id: '@_id'}, {
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
        show: { method: 'GET'},
    })
}]);

app.factory('Pagos', ['$resource', function($resource){
    return $resource('api/pagos/:id', {id: '@_id'}, {
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
        show: { method: 'GET'},
    })
}]);

app.factory('Proveedores', ['$resource', function($resource){
    return $resource('api/proveedores/:id', {id: '@_id'}, {
        update: { method: 'PUT'},
        get: { method: 'GET', isArray: true},
        show: { method: 'GET'},
    })
}]);

app.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
});