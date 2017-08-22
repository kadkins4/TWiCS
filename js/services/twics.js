/* global angular */

(function () {
  angular.module('twics')
  .factory('Twic', [
    '$resource',
    twicService
  ])

  function twicService ($resource) {
    return $resource('http://localhost:3000/phrases/:id', {}, {
      update: {
        method: 'PUT'
      }
    })
  }
})()
