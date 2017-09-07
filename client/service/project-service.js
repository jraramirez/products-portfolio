/**
*	Tools Service Module
*	Includes the functions used for adding/getting tools data to/from the server
*/
'use strict';

(function(){
	angular
		.module('ACOEPortfolio')
		.factory("ProjectService",['$http', '$q', ProjectService]);

		function ProjectService($http, $q) {

			var TOOLS_URL = '/api/tools';

			var service = {};
			service.requestAllProjects = requestAllProjects;
			service.requestFeaturedProjects = requestFeaturedProjects;
			service.requestProjects = requestProjects;
			
			service.printQuery = {};
			service.printQuery.type = null;
			service.setPrintQueryType = setPrintQueryType;
			
			service.saveAsImage = saveAsImage;
			service.downloadImage = downloadImage;
			return service;

			function setPrintQueryType(type) {
				service.printQuery.type = type;
			}
			
			function setPrintQueryType(type, caseStudyIndex, caseStudyName) {
				service.printQuery.type = type;
				service.printQuery.caseStudyIndex = caseStudyIndex;
				service.printQuery.caseStudyName = caseStudyName;
			}
			
			//Function for getting all the tools data from the server
			function requestAllProjects() {
				var deferred = $q.defer();
				$http.get(TOOLS_URL + '/all')
				.success(function(data){
						deferred.resolve(data);
					})
					.error(function(data,status) {
						deferred.reject(status);
					});

				return deferred.promise;
			}

			//Function for getting all the featured projects data from the server
			function requestFeaturedProjects() {
				var deferred = $q.defer();
				$http.get(TOOLS_URL + '/featured')
				.success(function(data){
						deferred.resolve(data);
					})
					.error(function(data,status) {
						deferred.reject(status);
					});

				return deferred.promise;
			}
			
			//Function for getting all the category projects data from the server
			function requestProjects(category) {
				var deferred = $q.defer();
				$http.get(TOOLS_URL + '/category?category=' + category)
				.success(function(data){
						deferred.resolve(data);
					})
					.error(function(data,status) {
						deferred.reject(status);
					});

				return deferred.promise;
			}
			
			//Function for creating a screenshot of the current screen
			function saveAsImage() {
				var deferred = $q.defer();
				
				$http({
					url: TOOLS_URL + '/saveAsImage',
					method: "GET",
					params: service.printQuery
					
				})
				.success(function(data){
						deferred.resolve(data);
					})
					.error(function(data,status) {
						deferred.reject(status);
					});

				return deferred.promise;
			}
			
			//Function for downloading image
			function downloadImage(file) {
				//var deferred = $q.defer();
				
				$http({
					url: TOOLS_URL + '/downloadImage',
					method: "GET",
					params: {output : file}
				});
				/*.success(function(data){
						deferred.resolve(data);
					})
					.error(function(data,status) {
						deferred.reject(status);
					});

				return deferred.promise;*/
			}

		}
})();
