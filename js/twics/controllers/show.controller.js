/* global angular */
(function () {
  angular.module('twics')
.controller('TwicShowController', [
  '$state',
  'Twic',
  TwicShowController
])

  function TwicShowController ($state, Twic) {
    this.twic = Twic.get({id: $state.params.id})
  }
})()
