angular.module('twics')
.controller('TwicShowController', [
  '$stateParams',
  'Twic',
  TwicShowController
])

function TwicShowController($stateParams, Twic) {
  this.twic = Twic.get({id: $stateParams.id})
}
