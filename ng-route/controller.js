var modulo=angular.module("CustomDirective");

modulo.controller("ReposController",["$scope","$http", function(sc,http){
	sc.repos=[];
	http.get("https://api.github.com/users/joel-eche/repos")
	.success(function(data){
		//sc.repos=data;
		sc.posts=data;
		for (var i = data.length - 1; i >= 0; i--) {
			var repo=data[i];
			sc.repos.push(repo.name);
		}
	})
	.error(function(err){
		console.log(err);
	});

	sc.optionSelected=function(data){
		sc.$apply(function(){
			sc.main_repo=data;
		});
	}
}]);

modulo.controller("RepoController",["$scope","$http","$routeParams",function(sc,http,rp){
	sc.repo={};
	http.get("https://api.github.com/repos/joel-eche/"+rp.name)
	.success(function(data){
		sc.repo=data;

	})
	.error(function(err){
		console.log(err);
	});
}]);