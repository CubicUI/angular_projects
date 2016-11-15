'use strict';
angular.module("appName").service("samplePerson", function() {
    var firstName = "John";
    var lastName = "Doe";
    
    this.setFirstName = function(fname) {
        firstName = fname;
    }
    
    this.setLastName = function(lname) {
        lastName = lname;
    }
    
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
});