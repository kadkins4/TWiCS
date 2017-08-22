/* global angular */
(function () {
  angular.module('twics')
  .controller('TwicNewController', [
    '$state',
    'Twic',
    TwicNewController
  ])

  function TwicNewController ($state, Twic) {
    this.twic = new Twic()
    this.create = function () {
      this.twic.$save(() => {
        console.log('/#/twics/{ id: this.twic.id }')
        $state.go('/#/twics/{{ this.twic.id }}')
      })
    }
  }
})()
