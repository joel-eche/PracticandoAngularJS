var modulo=angular.module("ToDoList",["LocalStorageModule"]);

modulo.factory('ToDoService',function(localStorageService){
	var toDoService={};
	toDoService.key="todokey";//cualquier clave
	if (localStorageService.get(toDoService.key)) {
		toDoService.activities=localStorageService.get(toDoService.key);
	} else {
		toDoService.activities=[];
	}

	toDoService.add=function(newActv){
		toDoService.activities.push(newActv);
		toDoService.updaLocalStorage();

	};

	toDoService.updaLocalStorage=function(){
		localStorageService.set(toDoService.key,toDoService.activities);
	};

	toDoService.clean=function(){
		toDoService.activities=[];
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	}

	toDoService.getAll=function(){
		return toDoService.activities;
	};

	toDoService.removeItem=function(item){
		toDoService.activities=toDoService.activities.filter(function(activity){
			return activity!==item;
		});
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	};
	
	return toDoService;
});

modulo.controller("ToDoController",["$scope","ToDoService", function(sc,td){
	sc.todo=td.getAll();
	sc.addActv=function(){
		td.add(sc.newActv);
		sc.newActv={};
	};

	sc.removeActv=function(item){
		sc.todo=td.removeItem(item);
	}

	sc.clean=function(){
		sc.todo=td.clean();
	}

}]);