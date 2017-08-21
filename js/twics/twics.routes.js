/* global angular */

(function () {
  angular
  .module('twics')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    Router
  ])

  function Router ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('twicsIndex', {
      url: '/index',
      templateUrl: 'js/twics/ng-views/index.html',
      controller: 'GrumbleIndexController',
      controllerAs: 'vm'
    })
    $urlRouterProvider.otherwise('/index')
  }
})()
