var modulo=angular.module("miApp",[]);
modulo.controller("miController",["$scope","$http", function(sc,html){
   sc.posts=[];
   sc.loading=true;
    html.get("http://jsonplaceholder.typicode.com./posdts")
    .success(function(data){
        sc.posts=data;
        sc.loading=false;
    })
    .error(function(err){
        sc.loading=false;
    });
}]);
