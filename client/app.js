/**
*	Main Javascript file for Angular
*/
(function() {
	'use strict';

	angular
		.module('ACOEPortfolio', ['ngRoute','ngMaterial','ngMessages'])
		.config(['$routeProvider',setRoutes])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('teal')
				.accentPalette('orange');
		});

		function setRoutes($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'view/home.html'
				})
				.when('/project/template', {
					templateUrl: 'view/project/page-template.html'
				})
				.when('/project/category/:category', {
					templateUrl: 'view/project/category.html'
				})
				.when('/project/all', {
					templateUrl: 'view/project/all.html'
				})
				.when('/project/:appName/pricing', {
					templateUrl: 'view/project/pricing.html'
				})
				.when('/project/:appName/caseStudy/:caseStudy', {
					templateUrl: 'view/project/caseStudy.html'
				})
				.when('/project/:appName', {
					templateUrl: 'view/project/details.html'
				})
				.otherwise({redirectTo: '/'});
		}

})();
