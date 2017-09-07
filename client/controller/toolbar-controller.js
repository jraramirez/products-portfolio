/**
*	Navigation Bar Controller Module
*
*/
'use strict';

(function(){
	angular
		.module('ACOEPortfolio')
		.controller('ToolbarCtrl', ['$mdDialog', '$window', 'ProjectService', ToolbarCtrl]);

		function ToolbarCtrl($mdDialog, $window, ProjectService) {

			var vm = this;
			
			vm.inProgress = function(ev) {
				$mdDialog.show($mdDialog.alert()
					.title("Pending")
					.textContent('Function in progress')
					.ok('Great')
					.targetEvent(ev)
				);
			};
			
			vm.isDisabled = function() {
				return !ProjectService.printQuery.projectName;
			};
			
			vm.saveAsImage = function(ev) {
				$mdDialog.show($mdDialog.alert()
					.title("Save")
					.textContent('Your download will start shortly')
					.ok('Great')
					.targetEvent(ev)
				);
					
				ProjectService
				.saveAsImage()
				.then(function(data) {
					$window.open('/api/tools/downloadImage?output=' + data.file);
				})
				.catch(function(data) {
					vm.error = true;
					vm.errorMessage = "";
					
					$mdDialog.show($mdDialog.alert()
						.title("Error")
						.textContent('Sorry. An error occured')
						.ok('Ok')
						.targetEvent(ev)
					);
				});
			};
		}

})();
