var modulo = angular.module("MiFirstApp",[]);
modulo.controller("FirstController", ["$scope", function(sc){
    sc.nombre = "Francis";
    sc.nuevoComentario = {};
    sc.comentarios = [
        {
            comentario : "Estoy comentando :)",
            username : "user1"
        },
        {
            comentario : "Yo también ;)",
            username : "user2"
        }
    ];
    sc.agregarComentario = function(){
        sc.comentarios.push(sc.nuevoComentario);
        sc.nuevoComentario={};
    }
}]);