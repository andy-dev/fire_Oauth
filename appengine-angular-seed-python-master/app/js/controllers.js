'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', ['$scope', 'Auth', '$location',
    function($scope, Auth, $location){

      $scope.auth = Auth;
      $scope.auth.$onAuth(function(authData) {
        $scope.authData = authData;
      });

      $scope.logout = function(){

        Auth.$unauth();
        console.log("here after logout")
      }
    }
  ])
  .controller('MainPageController', ['$firebase', '$scope',
    function($firebase,$scope){
      var refer = new Firebase('https://cooloauth.firebaseio.com/')
  }]);



