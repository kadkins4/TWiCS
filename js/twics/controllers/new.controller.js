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
    console.log('pre start')
    console.log(this.twic)
    this.create = function () {
      console.log('pre save')
      console.log(this.twic)
      this.twic.$save(() => {
        console.log('post save')
        console.log(this.twic)
        // create a promise for this redirect?
        $state.go('/#/twics')
      })
    }
  }
})()
