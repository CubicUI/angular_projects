'use strict';
describe("test ctrl", function() {
    
    beforeEach(angular.mock.module('appName'));
    
    var $controller;
    var $scope;
    
    beforeEach(angular.mock.inject(function(_$controller_, $rootScope) {
        $controller = _$controller_;
        $scope = $rootScope.$new();
        var controller = $controller('samplePersonCtrl', {
            $scope: $scope
        });
    }));

    it('has first Name as John by default', function() {
        expect($scope.firstName).toEqual('John');
    });
    
    it('has last Name as Doe by default', function() {
        expect($scope.lastName).toEqual('Doe');
    });
    
    xit('should update the first and last name', function() {
       
    });
    
});