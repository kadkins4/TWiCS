/* global angular */

(function () {
  angular.module('twics')
  .factory('Tweet', [
    '$resource',
    tweetService
  ])

  function tweetService ($resource) {
    return $resource('https://localhost:3000/tweets/:id', {}, {
      update: {
        method: 'PUT'
      }
    })
  }
})()
