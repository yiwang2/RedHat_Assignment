"use strict";

var loginModule = angular.module("loginModule", []);
loginModule.controller("LoginCtrl", [
    "$scope", "LoginService", "$state", "$localStorage",
    function ($scope, loginService, $state, $localStorage) {

        $scope.userinfo = {
            username: null,
            password: null
        };

        $scope.login = function () {
            //will have user name and basic64 password
            $localStorage.userinfo = $scope.userinfo;
            loginService.login($scope.userinfo)
                .then(function (response) {
                    $state.go("tasks");
                }, function (error) {
                    console.log(error);
                    $localStorage.$reset();
                });
        }
    }]);

loginModule.factory("LoginService", ["$rootScope","HttpService", function ($rootScope, httpService) {
    var service = {};
    service.login = function (userinfo) {
        var password = btoa(userinfo.username + ":" + userinfo.password);
        userinfo.password = password;

        return httpService.sendData($rootScope.baseurl+"login", "POST", userinfo);
    };
    return service;
}]);