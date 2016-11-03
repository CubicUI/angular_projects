'use strict';
angular.module("appName").service("personService", [function(){
    //same declaration as controller but no scope variable
    this.personObj={
        firstName:"",
        lastName:"",
        phoneNumber:"",
        address:""
    }
        
    this.addPerson = addPerson;
        
    this.personArray = [
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
        },
        {
            firstName: "Zeus",
            lastName: "Unknown",
            phoneNumber: "123-123-1234",
            address: "Mt. Olympus"
        } 
    ];
    
    this.getElement = function(index) {
        var length = this.personArray.length;
        if(index < length) {
            console.log(this.personArray[index].firstName);
        }
    }

    var that=this;

    this.test=function(){
        console.log("from clouser");
        console.log(this.personObj);
    }
    
    function addPerson() {
//        this.personObj="random";
//        console.log(that.personObj);
        var newPersonObj = {
            firstName: that.personObj.firstName,
            lastName: that.personObj.lastName,
            phoneNumber: that.personObj.phoneNumber,
            address: that.personObj.address            
        }
        that.personArray.push(newPersonObj);
    }
    
//    alert('from services');
    
}]);