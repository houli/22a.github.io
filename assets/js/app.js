angular.module('meehan', [
  'ngRoute',
  'meehan.controllers'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/assets/templates/home.html',
    controller: 'HomeController'
  })
  .when('/about', {
    templateUrl: '/assets/templates/about.html',
    controller: 'AboutController'
  })
  .when('/contact', {
    templateUrl: '/assets/templates/contact.html',
    controller: 'ContactController'
  })
  .when('/projects', {
	templateUrl: '/assets/templates/projects.html',
	controller: 'ProjectsController'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
}]);
