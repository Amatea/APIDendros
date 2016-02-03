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

    
    	
	
