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
      url: '/twics',
      templateUrl: 'js/twics/ng-views/index.html',
      controller: 'TwicIndexController',
      controllerAs: 'vm'
    })
    .state('twicNew', {
      url: '/twics/new',
      templateUrl: 'js/twics/ng-views/new.html',
      controller: 'TwicNewController',
      controllerAs: 'vm'
    })
    .state('twicShow', {
      url: '/twics/:id',
      templateUrl: 'js/twics/ng-views/show.html',
      controller: 'TwicShowController',
      controllerAs: 'vm'
    })
    .state('twicEdit', {
      url: '/twics/:id/edit',
      templateUrl: 'js/twics/ng-views/edit.html',
      controller: 'TwicEditController',
      controllerAs: 'vm'
    })
  }
})()
