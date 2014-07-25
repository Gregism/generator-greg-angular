angular.module('<%= app_section_name %>', ['ngRoute'])

.constant('version', 'v0.1.0')

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/main.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});