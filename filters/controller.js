var modulo=angular.module("mainModule",[]);
modulo.filter("removeHtml",function(){
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm,'')
    }
})
.controller("FilterController",["$scope",function(sc){
    sc.mi_html="<p>Ejemplito html</p>"
    sc.mi_json={};
    sc.mi_json.nombre="joel";
    sc.mi_json.apellido="eche";
    sc.costo=100;
}])