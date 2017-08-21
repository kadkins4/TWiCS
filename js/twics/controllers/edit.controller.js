/* global angular */

(function () {
  angular.module('twics')
  .controller('TwicEditController', [
    '$state',
    'Twic',
    TwicEditController
  ])

  function TwicEditController ($state, Twic) {
    this.twice = Twic.get({id: $state.params.id})
    this.update = function () {
      this.twic.$update({id: $state.params.id})
    }
    console.log(this.twic)
  }
})()
