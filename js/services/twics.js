/* global angular */

(function () {
  angular.module('twics')
  .factory('Twic', [
    '$resource',
    twicService
  ])

  function twicService ($resource) {
    return $resource('https://twics.herokuapp.com/phrases/:id', {}, {
      update: {
        method: 'PUT'
      }
    })
  }
})()
