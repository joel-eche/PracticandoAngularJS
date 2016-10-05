var modulo=angular.module("miApp",[]);
modulo.controller("miController",["$scope","$http", function(sc,html){
   sc.posts=[];
    html.get("http://jsonplaceholder.typicode.com./posts")
    .success(function(data){
        console.log(data);
        sc.posts=data;
    })
    .error(function(err){
        
    });
}]);
