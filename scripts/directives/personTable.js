'use strict';
angular.module("appName").directive("personTable", function() {
   return {
       restrict: "EAC",
       controller: 'personCtrl',
       templateUrl: "/views/personTable.html",
       link: function($scope) {
//           console.log($scope.personArray);
       }
   }; 
});