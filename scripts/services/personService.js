'use strict';
angular.module("appName").service("personService", ["$http", function($http){
    //same declaration as controller but no scope variable
    this.personObj={
        personInfoId:"",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        address:"",
        email: ""
    }
        
    this.addPerson = addPerson;
  //  this.displayConsole = displayConsole;
        
   /* this.personArray = [
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
    ];*/
    
    /*this.getElement = function(index) {
        var length = this.personArray.length;
        if(index < length) {
            console.log(this.personArray[index].firstName);
        }
    }*/

    var that=this;
        
    this.getPersonList = function() {
        return $http({
          method:"GET",
            url:"/service/person"
        }).then(function(result){
//            that.personArray = result.data
            return result.data
        });
    }
    
    this.postPersonList = function(dataParam) {
        return $http({
            method:"POST",
            url:"/service/person",
            data:dataParam
        }).then(function(result){
            return result.status
        });
    }
    
    this.getPersonId = function(id) {
//        console.log("id: "+id);
        return $http({
            method:"GET",
            url:"/service/person/"+id,
        }).then(function(result){
//            console.log(result.data);
            return result.data;
        });
    }
    
    this.deletePersonId = function(id) {
        return $http({
            method:"DELETE",
            url:"/service/person/"+id
        }).then(function(result){
            return result.data;
        });
    }
    
    this.putPersonList = function(dataParam) {
        return $http({
            method:"PUT",
            url:"/service/person/" + dataParam.personinfoid,
            data:dataParam
        }).then(function(result){
            return result.status
        });
    }

    this.test=function() {
        console.log("from clouser");
        console.log(this.personObj);
    }
    
    function addPerson() {
//        this.personObj="random";
//        console.log(that.personObj);
        var newPersonObj = {
            firstname: that.personObj.firstName,
            lastname: that.personObj.lastName,
            phone: that.personObj.phoneNumber,
            address: that.personObj.address,  
            email: that.personObj.email
        }
//        that.personArray.push(newPersonObj);
        return that.postPersonList(newPersonObj);
    }
    

//    function displayConsole(id2) {
//        //console.log("id2:"+id2);
//        that.getPersonId(id2);
//    }
    
//    alert('from services');
}]);