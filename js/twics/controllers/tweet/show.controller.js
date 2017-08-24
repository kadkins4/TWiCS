/* global angular */
(function () {
  angular.module('twics')
  .controller('TweetShowController', [
    '$state',
    'Tweet',
    TweetShowController
  ])

  function TweetShowController ($state, Tweet) {
    this.tweet = Tweet.get({ id: $state.params.id })
  }
})()
