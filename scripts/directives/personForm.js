'use strict';

//normally, the directive name is the same as the file name (i.e. firstDirective)
angular.module("appName").directive("personForm", function() {
    //do not need [] since we are not passing any scopes        //for directives, we need to return a json object
    
    return{
        restrict: "EAC", 
/*        controller: function($scope) {
            $scope.personForm = {
                addPerson:function() {
//                    alert("from the personForm.js");
                    var personObj = {
                        firstName: $scope.personModel.firstName,
                        lastName: $scope.personModel.lastName,
                        phoneNumber: $scope.personModel.phoneNumber,
                        address: $scope.personModel.address
                    };
                    $scope.personArray.push(personObj);
    //                console.log(personObj);
                }
            } //this can go into the personCtrl
        },*/
        templateUrl: "/views/personForm.html",
        link: function($scope) { 
        
        }
    };
});