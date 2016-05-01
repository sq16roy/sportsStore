(function(){   

 "use strict";
/**
 * @ngdoc overview
 * @name angular15App
 * @description
 * # angular15App
 *
 * Main module of the application.
 */
angular.module('sportsStore', ['ngAnimate','myAngularServices', "customFilters", "cart", 'ngResource','ngRoute','ngSanitize','ngTouch', 'myAngularDirectives'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/productList.html',
        controller: 'productListCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html',
        controller: 'cartSummaryController'
      })
      .when('/products', {
        templateUrl: 'views/productList.html',
        controller: 'productListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
