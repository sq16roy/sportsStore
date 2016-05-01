angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope, JsonService) {
        $scope.data = JsonService.getData();
    });
