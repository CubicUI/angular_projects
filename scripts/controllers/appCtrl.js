'use strict';
//call the name and do not include the brackets[]
angular.module("appName")
    .controller("appCtrl",["$scope",function($scope) {
    alert("hello world");
    $scope.header="Hello World";
    $scope.test=function(){
        $scope.header="Changed the header";
    }
}]); //notes that this is a controller and you set a name and now you include the brackets and nowe are including dependencies  