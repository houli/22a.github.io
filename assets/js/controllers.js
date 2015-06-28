angular.module('meehan.controllers', [])
.controller('HomeController', ['$scope', function($scope) {
	//filler
}])
.controller('AboutController', ['$scope', function($scope) {
	$scope.left = true;

	$scope.switch = function(bool) {
		$scope.left = bool;
	};
}])
.controller('ContactController', ['$scope', function($scope) {
	//filler
}])
.controller('ProjectsController', ['$scope', function($scope) {
	//filler
}])
.controller('DateController', ['$scope', '$filter', function($scope, $filter) {
	today = new Date();
	$scope.year = $filter("date")(today,'yyyy') - 1995;
	if((parseInt($filter("date")(today,'M')) < 4) || (($filter("date")(today,'M') === "4" )&&(parseInt($filter("date")(today,'d')) < 13 )))
	{
		$scope.year = $scope.year - 1;
	}
}]);
