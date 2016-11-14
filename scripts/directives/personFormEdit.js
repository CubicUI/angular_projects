'use strict';

angular.module("appName").directive("personFormEdit", function() {
    return{
        restrict: "EAC", 
        controller: "personCtrl",
        templateUrl: "/views/personFormEdit.html",
        link: function($scope) { 
            $scope.personModelEdit = {
                personInfoId: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                address: "",
                email: "",
            };
        }
    };
});