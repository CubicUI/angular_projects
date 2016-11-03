'use strict';
angular.module("appName").factory("personFactory", [function(){
    var x = 12;
    
    var personObj = {
        firstName:"",
        lastName:"",
        phoneNumber:"",
        address:""
    }
    
//    this.addPerson = addPerson;
    var that = this;
        
    return {
        getX:function() {
            return x;
        },
        
        personArray:[
            {
                firstName: "Albert",
                lastName: "Einstein",
                phoneNumber: "111-111-1111",
                address: "New York"
            },
            {
                firstName: "Joe",
                lastName: "Flacco",
                phoneNumber: "222-222-2222",
                address: "Maryland"
            },
            {
                firstName: "Kobe",
                lastName: "Bryant",
                phoneNumber: "333-333-3333",
                address: "LA"  
            },
            {
                firstName: "Hades",
                lastName: "Unknown",
                phoneNumber: "123-123-1234",
                address: "Underworld"
            }
        ],
        
        getElement:function(index) {
            var length = this.personArray.length;
            if(index < length) {
                console.log(this.personArray[index].firstName);
            }
        },
        
        addPerson:function() {
            var newPersonObj = {
                firstName: that.personObj.firstName,
                lastName: that.personObj.lastName,
                phoneNumber: that.personObj.phoneNumber,
                address: that.personObj.address  
            }
            that.personArray.push(newPersonObj);
        }
    }

}]);