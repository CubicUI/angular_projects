'use strict';
describe("TEST FOR PERSON SERVICE", function() {
    
    var samplePerson;
    
    beforeEach(function() {
        console.log("beforeEach test");
        angular.mock.module('appName');
        inject(function(_samplePerson_) {
            samplePerson = _samplePerson_;
        });
    });
    
    it("getFirstName should be a function", function() {
        expect(typeof(samplePerson.getFirstName)).toBe("function");
    });
    
    it("getFirstName should be a function", function() {
        expect(typeof(samplePerson.getLastName)).toBe("function");
    });
    
    it("getFirstName should be a function", function() {
        expect(typeof(samplePerson.setFirstName)).toBe("function");
    });
    
    it("getFirstName should be a function", function() {
        expect(typeof(samplePerson.setLastName)).toBe("function");
    });
    
    it("first name should be John by default", function() {
        expect(samplePerson.getFirstName()).toBe("John");
    });
    
    it("last name should be Doe by default", function() {
        expect(samplePerson.getLastName()).toBe("Doe");
    });
    
    it("should update the first and last name", function() {
        samplePerson.setFirstName("George");
        samplePerson.setLastName("Washington");
        expect(samplePerson.getFirstName()).toBe("George");
        expect(samplePerson.getLastName()).toBe("Washington");
    });
    
    it("first name should be John by default", function() {
        expect(samplePerson.getFirstName()).toBe("John");
    });
    
});