var modulo=angular.module("MyFirstApp", []);
modulo.controller("FirstController",["$scope","$http",function(sc,http){

    sc.posts=[];

    sc.newpost={}; 

    http.get("http://jsonplaceholder.typicode.com/posts")
    .success(function(data){
        //console.log(data);
        sc.posts=data;
    })
    .error(function(err){
        console.log(err);
    });
    sc.addPost=function(){
        http.post("http://jsonplaceholder.typicode.com/posts",{
            title   :sc.newpost.title,
            body    :sc.newpost.body,
            userId  :1
        })
        .success(function(data,status,headers,config){
            sc.posts.push(sc.newpost);
            sc.newpost={};
        })
        .error(function(error,status,headers,config){
            console.log(error);
        });
    };
}]);
