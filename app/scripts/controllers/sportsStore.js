angular.module("sportsStore")
    //.constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function ($scope, JsonService) {
        $scope.data = JsonService.getData();
    });
