var modulo=angular.module("ToDoList",["LocalStorageModule"]);

modulo.controller("ToDoController",["$scope","localStorageService", function(sc,lss){
    if(lss.get("claveparaidentificarlista")){
        sc.todo=lss.get("claveparaidentificarlista");
    }
    else{
        sc.todo=[]; 
    }
    sc.newActv={};
    /*
    {
        actividad:'Terminar el curso',
        fecha: '12-12-12 12:12pm
    }
    */
    
    sc.$watchCollection('todo',function(newvalue,oldvalue){
        lss.set("claveparaidentificarlista",sc.todo);
    });    
    sc.addActv=function(){
        sc.todo.push(sc.newActv);
        sc.newActv={};
        //lss.set("claveparaidentificarlista",sc.todo);
    };
    sc.clean=function(){
        sc.todo=[]; //lss.set("claveparaidentificarlista",sc.todo);
    }
}]);