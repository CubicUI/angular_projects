"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope", "personService", function($scope, personService){
        //we're creating a json object for person form
        $scope.personModel = {
            personInfoId: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            email: "",
        };
        
        $scope.personModelEdit = {
            personInfoId: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            email: "",
        };
        
        $scope.resetPersonModel = {};
        function reset() {
            $scope.personModel = angular.copy($scope.resetPersonModel);
            personService.personObj = $scope.personModel;
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
//        $scope.personArray = personService.personArray;
        $scope.personArray = [];
        updatePersonList();
        
//        console.log(personFactory.getX());
//        personFactory.getElement(0);
        
        $scope.personTable={
            sortBy: 'firstname',
            sortOrder: false,
            toggleOrder:function(name) {
                if($scope.personTable.sortBy != name) {
                    $scope.personTable.sortBy = name;
                    $scope.personTable.sortOrder = false; 
                } else {
                    $scope.personTable.sortOrder = !$scope.personTable.sortOrder;   
                }
            }
        }; //added for sorting 11/01
        
        $scope.personForm = { /*addPerson:personService.addPerson*/
            addPerson:function() {
                personService.addPerson().then(function(){
                    updatePersonList();
                    reset();
                });
            },
            displayConsole:personService.getPersonId,
            deletePerson: function(id) {
                personService.deletePersonId(id).then(function(){
                    updatePersonList();
                });
            },
            editPerson: function(object) {
                console.log(object);
                $scope.personModelEdit = object;
            },
            updatePerson: function(object) {
                console.log(object);
                personService.putPersonList(object).then(function(){
                    updatePersonList();
                    reset();
                });
            }
        };
        
        //2016-11-10
        function updatePersonList() {
            var personListPromise = personService.getPersonList();
            personListPromise.then(function(response){
               $scope.personArray = response; 
            });
        }

        
        /*$scope.test = function(){
            return "test";
        }
        console.log($scope.test;
        console.log($scope.test());*/
                        
    }]);