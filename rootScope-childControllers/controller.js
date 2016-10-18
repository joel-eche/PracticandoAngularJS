var modulo=angular.module("MyApp",[]);
modulo.run(function($rootScope){
	$rootScope.nombre="Joel Eche - rootScope";
});
modulo.controller("MyController",["$scope",function(sc){
	sc.nombre="Joel Eche - scope mycontroller";
	setTimeout(function(){
		sc.$apply(function(){
			sc.nombre="J :)";
		});
	},1000);
}]);
modulo.controller("ChildController",["$scope",function(sc){

}]);