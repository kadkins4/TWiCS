/* global angular */
(function () {
  angular.module('twics')
  .controller('TwicNewController', [
    'Twic',
    TwicNewController
  ])

  function TwicNewController (Twic) {
    this.twic = new Twic()
    this.create = function () {
      this.twic.$save()
    }
  }
})()
