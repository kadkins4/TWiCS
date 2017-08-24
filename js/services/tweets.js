/* global angular */

(function () {
  angular.module('twics')
  .factory('Tweet', [
    '$resource',
    tweetService
  ])

  function tweetService ($resource) {
    return $resource('http://localhost:3000/tweets/:id.json', {}, {
      update: {
        method: 'PUT'
      }
    })
  }
})()
