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
      $state.go('twicShow')
    })
  }
}
