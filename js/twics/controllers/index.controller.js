(function () {
  angular.module('twics')
  .controller('TwicIndexController', [
    'Twic',
    TwicIndexControllerFunction
  ])

  function TwicIndexControllerFunction (Twic) {
    this.twics = Twic.query()
  }
})()
