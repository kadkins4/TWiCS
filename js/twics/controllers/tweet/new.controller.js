/* global angular */
(function () {
  angular.module('twics')
  .controller('TweetNewController', [
    '$state',
    'Tweet',
    TweetNewController
  ])

  function TweetNewController ($state, Tweet) {
    this.hidebtn = false
    this.tweet = new Tweet()
    this.create = function () {
      this.tweet.$save(() => {
        this.hidebtn = true
        // create a promise for this redirect?
        $state.go('tweetsShow', { id: this.tweet.id })
      })
    }
  }
})()
