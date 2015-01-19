'use strict';

angular.module('desktop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'UserApp'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/main/main.html',
        controller: 'MainCtrl'
      })
        .state('login', {
          url:'/login',
          templateUrl: '/components/login/login.html',
          controller: 'LoginCtrl',
          data: {
            login: true
          }
        })
          .state('signup', {
          url:'/signup',
          templateUrl: '/components/login/signup.html',
          controller: 'LoginCtrl',
          data: {
            public: true
          }
        });
    $urlRouterProvider.otherwise('/login');
  })
.run(function($rootScope, user) {
//userapp id 54bc46e9aee51
  user.init({ appId: '54bc46e9aee51' });

});