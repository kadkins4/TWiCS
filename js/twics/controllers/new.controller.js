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
        // create a promise for this redirect?
        $state.go('twicShow/$state.params.id')
      })
    }
  }
})()
