angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);




var myApp = angular.module("myApp2",["firebase"]);
myApp.controller("chatController", ["$scope", "$firebaseArray", "$http",
 function($scope, $firebaseArray, $http) {
   var ref = firebase.database().ref().child("messages");
   $scope.chats = $firebaseArray(ref);
   $scope.update = function(user) {
       var newmessage = {from:user.username || "anonymous",body:user.chat};
       $scope.chats.$add(newmessage);
       user.chat = "";
   }
//start
 $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
//end
 }
]);
