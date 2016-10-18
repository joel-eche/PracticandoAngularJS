var modulo=angular.module("ToDoList",["LocalStorageModule"]);

modulo.service('ToDoService',function(localStorageService){
	
	this.key="todokey";//cualquier clave
	if (localStorageService.get(this.key)) {
		this.activities=localStorageService.get(this.key);
	} else {
		this.activities=[];
	}

	this.add=function(newActv){
		this.activities.push(newActv);
		this.updaLocalStorage();

	};

	this.updaLocalStorage=function(){
		localStorageService.set(this.key,this.activities);
	};

	this.clean=function(){
		this.activities=[];
		this.updaLocalStorage();
		return this.getAll();
	}

	this.getAll=function(){
		return this.activities;
	};

	this.removeItem=function(item){
		this.activities=this.activities.filter(function(activity){
			return activity!==item;
		});
		this.updaLocalStorage();
		return this.getAll();
	};
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