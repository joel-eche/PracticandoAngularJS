var modulo=angular.module("CustomDirective",[]);
modulo.directive('myAutocomplete',function(){
	function link(scope,element,attrs){
		$(element).autocomplete({
			source:scope.$eval(attrs.myAutocomplete),
			select:function(ev,ui){
				ev.preventDefault();
				if (ui.item) {
					scope.optionSelected(ui.item.value);
				}
			},
			focus:function(ev,ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link:link
	};
});
modulo.directive('backImg',function(){
	return function(scope,element,attrs){
		attrs.$observe('backImg',function(value){
			element.css({
				"background":"url("+value+")",
				"background-size":"cover",
				"background-position":"center"
			});
		});
	}
});

modulo.controller("AppCtrl",["$scope","$http", function(sc,http){
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
