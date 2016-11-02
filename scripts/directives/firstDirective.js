'use strict';

//normally, the directive name is the same as the file name (i.e. firstDirective)
angular.module("appName").directive("sampleHeader", function() {
    //do not need [] since we are not passing any scopes        //for directives, we need to return a json object
    
    return{
        restrict: "EAC", //what is EAMC? - see notes for details
        //E=element, A=attribute, M=comment, C=classes
        
        template: "<h1>{{header}}</h1>",
        
        //calling an external controller -PREFERRED METHOD
//        controller: 'appCtrl', 
        
        //creating a controller within the directive -NOT PREFERRED
        /*controller: function($scope) {
            $scope.header = "Head from directive controller";
            $scope.xyz = "15";
        }*/
        
        link: function($scope) { //this function gets executed first. DOM will search for this first and make changes to dependencies. 
            $scope.header = "Good Morning";
        } //this will be loaded before the contents are 
    };
});