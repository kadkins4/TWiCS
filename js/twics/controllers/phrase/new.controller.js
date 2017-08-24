/* global angular */
(function () {
  angular.module('twics')
  .controller('TwicNewController', [
    '$state',
    'Twic',
    TwicNewController
  ])

  function TwicNewController ($state, Twic) {
    this.hidebtn = false
    this.twic = new Twic()
    this.create = function () {
      this.twic.$save(() => {
        this.hidebtn = true
        // create a promise for this redirect?
        $state.go('twicsShow', { id: this.twic.id })
      })
    }
  }
})()
