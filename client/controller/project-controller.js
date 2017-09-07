/**
 *	Projects Controller Module
 *
 */
'use strict';

(function() {
	angular
		.module('ACOEPortfolio')
		.controller('ProjectCtrl', ['CacheService', 'ProjectService', ProjectCtrl])
		.controller('FeaturedCtrl', ['ProjectService', FeaturedCtrl])
		.controller('CategoryCtrl', ['$routeParams', 'ProjectService', CategoryCtrl])
		.controller('DetailsCtrl', ['$location', '$routeParams', 'CacheService', 'ProjectService', DetailsCtrl])
		.controller('AllProjectsCtrl', ['CacheService', 'ProjectService', AllProjectsCtrl]);

	function ProjectCtrl(CacheService, ProjectService) {

		var vm = this;

		vm.projects = {};

		vm.error = false;
		vm.errorMessage = "";

		//Function for getting all the projects
		vm.cacheAllProjects = function() {
			ProjectService
				.requestAllProjects()
				.then(function(data) {
					CacheService.put('appData', data);
				})
				.catch(function(data) {
					vm.error = true;
					vm.errorMessage = "";
				});
		};

		vm.cacheAllProjects();
	}

	function FeaturedCtrl(ProjectService) {

		var vm = this;

		vm.featuredProjects;

		vm.getFeaturedProjects = function() {
			ProjectService
				.requestFeaturedProjects()
				.then(function(data) {
					vm.featuredProjects = data;
				})
				.catch(function(data) {
					vm.error = true;
					vm.errorMessage = "";
				});
		};

		vm.getFeaturedProjects();
	}

	function CategoryCtrl($routeParams, ProjectService) {

		var vm = this;

		vm.projectList;
		vm.categoryMap = {
			"1": "Routine Requests",
			"2": "Known Error Resolutions",
			"3": "Testing and Validation",
			"4": "Dashboarding Solutions",
			"5": "Duty Manager Tasks",
			"6": "Monitoring",
			"7": "Reporting",
			"8": "Continuous Integration",
			"9": "ChatOps",
			"10": "Others"
		};

		vm.categoryName = vm.categoryMap[$routeParams.category];

		vm.getProjects = function() {
			ProjectService
				.requestProjects($routeParams.category)
				.then(function(data) {
					vm.projectList = data;
				})
				.catch(function(data) {
					vm.error = true;
					vm.errorMessage = "";
				});
		};

		vm.getProjects();
	}

	function DetailsCtrl($location, $routeParams, CacheService, ProjectService) {

		var vm = this;

		vm.allProjects = CacheService.get('appData');
		vm.relatedProjects = [];
		vm.selectedProject = {};

		vm.showRelated = false;

		vm.toggleShowRelated = function() {
			vm.showRelated = !vm.showRelated;
		}
		
		vm.setPrintQueryType = function(type) {
			// set selected project
			ProjectService.setPrintQueryType(type);
			ProjectService.printQuery.projectName = vm.selectedProject.title;
		}
		
		vm.setPrintQueryType = function(type, caseStudyIndex, selectedCaseStudyName) {
			// set selected project
			ProjectService.setPrintQueryType(type, caseStudyIndex);
			ProjectService.printQuery.projectName = vm.selectedProject.title;
			ProjectService.printQuery.caseStudyName = selectedCaseStudyName;
		}

		vm.fixName = function() {
			var x = 4;
			if (vm.selectedProject.project_x0020_manager) {
				// TODO: Fix name more properly	
				if (vm.selectedProject.project_x0020_manager[x] != '#')
					x--;
				vm.selectedProject.project_x0020_manager = vm.selectedProject.project_x0020_manager.substr(x, vm.selectedProject.project_x0020_manager.length)
			}
		}

		vm.getAllProjects = function() {
			if (!vm.allProjects) {
				ProjectService
					.requestAllProjects()
					.then(function(data) {
						vm.allProjects = data;
						vm.findSelectedProject($routeParams.appName);
					})
					.catch(function(data) {

					});
			} else {
				vm.findSelectedProject($routeParams.appName);
			}
		}

		//TODO: get related projects (top 5 of the same category) instead of the featured
		vm.getRelatedProjects = function() {
			ProjectService
				.requestFeaturedProjects()
				.then(function(data) {
					vm.relatedProjects = data;
				})
				.catch(function(data) {

				});
		}

		vm.findSelectedProject = function(appName) {
			vm.allProjects.forEach(function(element, index) {
				if (element.title === appName) {
					vm.selectedProject = element;
					if (vm.selectedProject.job_x0020_level != undefined) {
						vm.selectedProject.job_x0020_level = vm.selectedProject.job_x0020_level.substr(2, 3);
					}
					if (vm.selectedProject.project_x0020_manager) {
						vm.fixName();
					}
				}
			});
		}

		//TODO: get pricing based on selected project
		vm.showPricing = function() {
			$location.path("/project/" + vm.selectedProject.title + "/pricing");
		}
		
		//Back function
		vm.back = function() {
			$location.path("/project/" + vm.selectedProject.title);
			//reset printQuery
			ProjectService.printQuery.type = null;
		}

		vm.getAllProjects();
		vm.getRelatedProjects();

	}

	function AllProjectsCtrl(CacheService, ProjectService) {

		var vm = this;

		vm.allProjects = CacheService.get('appData');

		vm.fixJobLevels = function() {
			vm.allProjects.forEach(function(element, index) {
				if (element.job_x0020_level) {
					element.job_x0020_level = element.job_x0020_level.substr(2, 3);
				}
			});
		}

		vm.getAllProjects = function() {
			if (!vm.allProjects) {
				ProjectService
					.requestAllProjects()
					.then(function(data) {
						vm.allProjects = data;
						vm.fixJobLevels();
					})
					.catch(function(data) {
						vm.error = true;
						vm.errorMessage = "";
					});
			} else {
				vm.allProjects = CacheService.get('appData');
				vm.fixJobLevels();
			}

			// reset selected project
			ProjectService.printQuery = {};
		};

		vm.getAllProjects();
	}

})();