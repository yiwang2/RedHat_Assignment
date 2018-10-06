"use strict";

// Declare app level module which depends on views, and components
var appModule = angular.module("redhatApp", [
    "ui.router",
    "ngMaterial",
    "ngStorage",
    "ui.grid", "ui.grid.selection", "ui.grid.resizeColumns", "ui.grid.autoResize", "ui.grid.moveColumns",
    "loginModule",
    "taskModule", "ui.router.state.events", "ngMdIcons", "ngPatternRestrict"
]).config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when("", "/index");
        $stateProvider.state("index", {
            url: "/index",
            templateUrl: "./login/login.html",
            controller: "LoginCtrl"
        }).state("login", {
            url: "/login",
            templateUrl: "./login/login.html",
            controller: "LoginCtrl"
        }).state("tasks", {
            url: "/tasks",
            templateUrl: "./tasks/task.html",
            controller: "TaskCtrl"
        });
    }])
    //add listener for state change
    .run(["$rootScope", "$localStorage", "$state", function ($rootScope, $localStorage, $state) {//
        $rootScope.$on("$stateChangeStart",
            function (event, toState, toParams, fromState, fromParams) {
                if ($localStorage.userinfo == null) {
                    $state.go("login");
                    event.preventDefault();
                }
            })
    }])
    .run(["$rootScope", "$http", function ($rootScope, $http) {
        $http.get("proxy.json").then(
            function (response){
                $rootScope.baseurl = response.data.baseUrl;
            }
        );
    }]);

appModule.controller('HomeCtrl', [
    "$scope", '$state', "$localStorage",
    function ($scope, $state, $localStorage) {
        $scope.logout = function () {
            $state.go('login');
            $localStorage.$reset();
        }
    }]);

appModule.factory('HttpService', ["$http","$localStorage", function ($http, $localStorage) {
    var service = {};
    service.sendData = function (urlLink, method,data) {
        var userinfo = $localStorage.userinfo;
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':"Basic "+userinfo.password
            }
        };
        return $http({
            method: method,
            url:urlLink,
            data: data,
            config: config
        });
    };
    return service;
}]);
