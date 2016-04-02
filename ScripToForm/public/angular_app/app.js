(function(){

  angular.module('invApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider){
    $routeProvider
      .when('/bodegas', {
        templateUrl: '/assets/angular_app/bodegas/bodegas.view.html',
        controller: 'bodegaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/bodegas'});

    /*
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    */
  }

  angular.module('invApp')
    .config(['$routeProvider', '$locationProvider', config]);

}
)();
