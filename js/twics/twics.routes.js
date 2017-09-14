/* global angular */

(function () {
  angular.module('twics')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    Router
  ])

  function Router ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('twicsIndex', {
      url: '/twics',
      templateUrl: 'js/twics/ng-views/phrase/index.html',
      controller: 'TwicIndexController',
      controllerAs: 'vm'
    })
    .state('twicsNew', {
      url: '/twics/new',
      templateUrl: 'js/twics/ng-views/phrase/new.html',
      controller: 'TwicNewController',
      controllerAs: 'vm'
    })
    .state('twicsShow', {
      url: '/twics/:id',
      templateUrl: 'js/twics/ng-views/phrase/show.html',
      controller: 'TwicShowController',
      controllerAs: 'vm'
    })
    .state('tweetsIndex', {
      url: '/tweets',
      templateUrl: 'js/twics/ng-views/tweet/index.html',
      controller: 'TweetIndexController',
      controllerAs: 'vm'
    })
    .state('tweetsNew', {
      url: '/tweets/new',
      templateUrl: 'js/twics/ng-views/tweet/new.html',
      controller: 'TweetNewController',
      controllerAs: 'vm'
    })
    .state('tweetsShow', {
      url: '/tweets/:id',
      templateUrl: 'js/twics/ng-views/tweet/show.html',
      controller: 'TweetShowController',
      controllerAs: 'vm'
    })
    $urlRouterProvider.otherwise('/twics/new')
  }
})()
// Great formatting, consistency, and use of $urlRouterProvider
