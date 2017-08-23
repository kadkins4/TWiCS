/* global angular */

(function () {
  angular.module('twics')
  .factory('Twic', [
    '$resource',
    twicService
  ])

  function twicService ($resource) {
    return $resource('https://git.heroku.com/twics.git', {}, {
      update: {
        method: 'PUT'
      }
    })
  }
})()
