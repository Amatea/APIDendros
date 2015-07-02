angular.module('appServices', [])
    .service("userServices", function ($http) {
        var users={};
        var pageSize=6;
        var page=0;
        var editID=0;
        var fName='';
        var lName='';
        var age='';
        var sex='';
        var currentEdit={
                id:'',
                fName:'',
                lName:'',
                age:'',
                sex:''
                };
        return {
            getPage : function () {
                console.log("user");
                console.log(users);
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

            clickCreate : function(){
                fName ='';
                lName ='';
                age   ='';
                sex   ='';
            },

            clickEdit : function(id) {
                editID=id;
                currentEdit.id = id;
                currentEdit.fName = users[id - 1].fName;
                currentEdit.lName = users[id - 1].lName;
                currentEdit.age   = users[id - 1].age;
                currentEdit.sex   = users[id - 1].sex;
            },

            setUser : function(userdata){
               users = userdata;
            },

            getCurrentEdit : function(){
                return currentEdit;
            },


            deleteUser : function(id){
                users.splice(id-1,1);
                for(var i=id-1; i< users.length;i++){
                        users[i].id--;
                }
                return  users.slice( page * pageSize, page * pageSize + pageSize);
            }

        };
    });
	
	
