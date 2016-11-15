'use strict';
angular.module("appName").controller("samplePersonCtrl", ["samplePerson", "$scope", function(samplePerson, $scope) {
    
    $scope.firstName = samplePerson.getFirstName();
    $scope.lastName = samplePerson.getLastName();
    
    $scope.update = function() {
        samplePerson.setFirstName("George");
        samplePerson.setLastName("Washington");
        console.log(samplePerson.getFirstName());
        console.log(samplePerson.getLastName());
    }
    
    $scope.$watch(function() {
        return samplePerson.getFirstName();
    }, function(newVal, oldVal) {
        console.log("FROM WATCH");
        console.log(newVal);
        console.log(oldVal);
        if(newVal != oldVal) {
            $scope.firstName = newVal;
        }
    });
    
    $scope.$watch(samplePerson.getLastName, function(newVal, oldVal) {
        console.log("FROM WATCH");
        console.log(newVal);
        console.log(oldVal);
        if(newVal != oldVal) {
            $scope.lastName = newVal;
        }
    });
    
}]);