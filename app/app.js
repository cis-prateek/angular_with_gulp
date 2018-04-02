require('angular')
var MainController = require('./controllers/MainController')
var homeController = require('./pages/home/homeController')
var aboutController = require('./pages/about/aboutController')

var app = angular.module('app', [require('angular-route'), 'ngLocationUpdate']);
app.controller('homeController', ['$scope', homeController]);
app.controller('aboutController', ['$scope', aboutController]);

// configure our routes
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: './dist/pages/home/home.html',
            controller: 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: './dist/pages/about/about.html',
            controller: 'aboutController'
        });
        $locationProvider.html5Mode(true).hashPrefix('!');
});