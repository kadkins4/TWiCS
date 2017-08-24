/* global angular */

(function () {
  angular.module('twics')
  .controller('TweetIndexController', [
    'Tweet',
    TweetIndexControllerFunction
  ])

  function TweetIndexControllerFunction (Tweet) {
    this.tweets = Tweet.query()
  }
})()
