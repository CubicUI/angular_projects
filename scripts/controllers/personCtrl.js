"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope", "personService", function($scope, personService){
        //we're creating a json object for person form
        $scope.personModel = {
            firstName : "",
            lastName : "",
            phoneNumber : "",
            address : "",
        };
        
        /*$scope.forNgShow = true;
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
        
        /*$scope.personModel.firstName = "Barack";
        $scope.personModel.lastName = "Obama";
        $scope.personModel.phoneNumber = "202-042-1010";
        $scope.personModel.address = "1600 Pennsylvania Ave NW";*/
        
        personService.personObj = $scope.personModel;
        $scope.personArray = personService.personArray;
        
//        console.log(personFactory.getX());
//        personFactory.getElement(0);
       
        
        $scope.personTable={
            sortBy: 'firstName',
            sortOrder: false,
            toggleOrder:function(name) {
                if($scope.personTable.sortBy != name) {
                    $scope.personTable.sortBy = name;
                    $scope.personTable.sortOrder = false; 
                } else {
                    $scope.personTable.sortOrder = !$scope.personTable.sortOrder;   
                }
            }
        } //added for sorting 11/01
        
        
        $scope.personForm = { addPerson:personService.addPerson
            //MOVED TO THE PERSON FACTORY
            /*addPerson:function() {
//                    alert("from the personForm.js");
                var personObj = {
                    firstName: $scope.personModel.firstName,
                    lastName: $scope.personModel.lastName,
                    phoneNumber: $scope.personModel.phoneNumber,
                    address: $scope.personModel.address
                };
                personFactory.personArray.push(personObj);
//                $scope.personArray.push(personObj);
//                console.log(personObj);
            }*/
        };
        
//        console.log($scope.personArray);f
        
    }]);