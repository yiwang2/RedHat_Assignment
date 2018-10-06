'use strict';

var taskModule = angular.module('taskModule', []);

/*taskModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tasks', {
        templateUrl: './tasks/task.html',
        controller: 'TaskCtrl'
    });
}]);*/

taskModule.controller('TaskCtrl', ["$scope", "uiGridConstants", "TaskService",
    function ($scope, uiGridConstants, taskService) {
        var vm = this;
        $scope.taskData = [];
        $scope.statusData = [];
        //get task data
        var getTaskData = function () {
            taskService.getTaskData().then(function (response) {
                    var taskData = response.data;
                    taskService.getTaskStatus().then(
                        function (response) {
                            var statusData = response.data;
                            taskData.forEach(function (task) {
                                $scope.taskData.push(
                                    {
                                        id: task.id,
                                        taskDescription: task.taskDescription,
                                        taskStatus: (statusData.find(function (s) {
                                            return s.statusId == task.taskStatus;
                                        }).status)
                                    }
                                );
                            });

                            statusData.forEach(function (status) {
                                $scope.statusData.push({
                                    value: status.status,
                                    label: status.status
                                });
                            });
                        },
                        function (error) {
                            console.log(error);
                        }
                    );
                },

                function (error) {
                    console.log(error);
                }
            );
        };
        getTaskData();

        //setup angular ui grid
        $scope.gridOptions = {
            enableFiltering: true,
            enableGridMenu: true,
            enableColumnResizing: true,
            data: $scope.taskData,
            columnDefs: [
                {field: 'id', displayName: 'Task ID', width: 110},
                {
                    field: 'taskDescription',
                    displayName: 'Description',
                    enableHiding:false // don't allow hide
                },
                {
                    field: 'taskStatus',
                    displayName: 'Status',
                    width: 110,
                    filter: {
                        type: uiGridConstants.filter.SELECT,
                        selectOptions: $scope.statusData
                    }
                }

            ],
            onRegisterApi: function(gridApi){
                $scope.gridApi = gridApi;
            }
        };

        $scope.toggleFiltering = function () {
            $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
            $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        };
    }]);

taskModule.factory('TaskService', ["$rootScope","HttpService", function ($rootScope,httpService) {
    var service = {};
    service.getTaskData = function () {
        return httpService.sendData($rootScope.baseurl+"tasks/getalltasks", "GET", null);
    };

    service.getTaskStatus = function () {
        return httpService.sendData($rootScope.baseurl+"tasks/getalltaskstatus", "GET", null);
    };
    return service;
}]);