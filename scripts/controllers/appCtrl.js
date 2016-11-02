'use strict';
//call the name and do not include the brackets[]
angular.module("appName") 
    .controller("appCtrl",["$scope",function(x) { //notes that this is a controller and you set a name and now you include the brackets and nowe are including dependencies  
    //if you have multiple functions written, then their names should be in the same order(otherwise you will definitely get confused)
//    alert("hello world");
    x.xyz = "22";
    x.header = "Hello World";
    x.test = function(){
        x.header = "Changed the header variable";
    }    
}]); 