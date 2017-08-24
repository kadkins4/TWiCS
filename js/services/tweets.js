/* global angular */

(function () {
  angular.module('twics')
  .factory('Tweet', [
    '$resource',
    tweetService
  ])

  function tweetService ($resource) {
    return $resource('https://twics.herokuapp.com/tweets/:id', {}, {
      update: {
        method: 'PUT'
      }
    })
  }
})()
