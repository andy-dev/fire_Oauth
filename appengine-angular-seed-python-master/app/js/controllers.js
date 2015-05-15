'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', ['$firebase', '$scope', '$firebaseAuth', '$location',
    function($firebase, $scope, $firebaseAuth, $location){


      var ref = new Firebase("https://cooloauth.firebaseio.com");
      var auth = $firebaseAuth(ref)
      $scope.getLogin = function (){


        auth.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("Logged in as:", authData.uid);

          $location.path('/main')

          console.log(data);
          }).catch(function(error) {
          console.log("Authentication failed:", error);
        });
      }

      $scope.logout = function(){
        console.log ("effective logout")
        ref.unauth();
      }

  }])
  .controller('MainPageController', ['$firebase', '$scope',
    function($firebase,$scope){
      var refer = new Firebase('https://cooloauth.firebaseio.com/')

  }])



