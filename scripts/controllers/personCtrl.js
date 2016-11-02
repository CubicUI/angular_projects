"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope",function($scope){
        //we're creating a json object for person form
        $scope.personModel = {
            firstName : "",
            lastName : "",
            phoneNumber : "",
            address : "",
        };
        
        $scope.forNgShow = true;
        $scope.forNgIf = true;
        
        $scope.toggleShow = function() {
            //you can use an if else to toggle the show
            if($scope.forNgShow) {
                $scope.forNgShow = false;
            } else {
                $scope.forNgShow = true;
            }
        }
        
        $scope.toggleIf = function() {
            //you can also use a ! to denote that this will be set to the opposite value that is currently set
            $scope.forNgIf = !$scope.forNgIf;
        }
        
        $scope.personModel.firstName = "Barack";
        $scope.personModel.lastName = "Obama";
        $scope.personModel.phoneNumber = "202-042-1010";
        $scope.personModel.address = "1600 Pennsylvania Ave NW";
        
        $scope.personArray = [
            {
                firstName: "Sterling",
                lastName: "Archer",
                phoneNumber: "111-111-1111",
                address: "New York"
            },
            {
                firstName: "Bob",
                lastName: "Burger",
                phoneNumber: "222-222-2222",
                address: "California"
            },
            {
                firstName: "Michael",
                lastName: "Jordan",
                phoneNumber: "333-333-3333",
                address: "Chicago"  
            }
        ];
        
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
        }
        
//        console.log($scope.personArray);f
        
    }]);