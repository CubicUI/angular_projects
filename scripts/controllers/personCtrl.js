"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope", "personService", function($scope, personService){
        //we're creating a json object for person form
        $scope.personModel = {
            personInfoId : "",
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
                personService.addPerson();
                updatePersonList();
            },
            displayConsole:function(id1) {
                //console.log("id1:"+id1);
                personService.displayConsole(id1);
                //updatePersonList2(id1);
            }
        };
        
        //2016-11-10
        function updatePersonList() {
            var personListPromise = personService.getPersonList();
            personListPromise.then(function(response){
               $scope.personArray = response; 
            });
        }
       /* function updatePersonList2(id) {
            var personListPromise = personService.getPersonId(id);
            personListPromise.then(function(response){
               $scope.personArray = response; 
            });
        }*/
        
//        console.log($scope.personArray);f
        
    }]);