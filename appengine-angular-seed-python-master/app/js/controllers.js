'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', ['$firebase', '$scope',
    function($firebase, $scope){


      $scope.getLogin = function (){

        console.log ("in get login function")
        var ref = new Firebase("https://cooloauth.firebaseio.com");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        });

      }

      $scope.logout = function(){
        var ref = new Firebase("https://cooloauth.firebaseio.com");
        console.log ("effective logout")
        ref.unauth();
      }

  }])
  .controller('MainPageController', ['$firebase', '$scope',
    function($firebase,$scope){
      var refer = new Firebase('https://cooloauth.firebaseio.com/')


  }])



