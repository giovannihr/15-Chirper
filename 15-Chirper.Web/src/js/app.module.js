(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'LocalStorageModule',
            'toastr'
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',  function($stateProvider, $urlRouterProvider, $httpProvider){
        	$urlRouterProvider.otherwise('login');

            $httpProvider.interceptors.push('authInterceptor');

        	$stateProvider.state('register', { url: '/register', templateUrl: '/templates/register.html', controller: 'RegisterController as register'})
        				  .state('login', { url:'/login', templateUrl: '/templates/login.html', controller: 'LoginController as login'})
        				  .state('posts', { url: '/posts', templateUrl: 'templates/posts.html', controller: 'PostsController as posts'});
        }])
        .value('apiUrl', 'http://localhost:64321/api/');
})();