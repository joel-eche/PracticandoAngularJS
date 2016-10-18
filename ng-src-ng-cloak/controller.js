var modulo=angular.module("CustomDirective",[]);
modulo.controller("AppCtrl",["$scope","$http", function(sc,http){
	http.get("https://api.github.com/users/joel-eche/repos")
	.success(function(data){
		sc.repos=data;
	})
	.error(function(err){
		console.log(err);
	});
}]);
