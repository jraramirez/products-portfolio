/**
*	Navigation Bar Controller Module
*
*/
'use strict';

(function(){
		angular
			.module('ACOEPortfolio')
			.controller('SideNavCtrl', ['$mdComponentRegistry', SideNavCtrl]);

			function SideNavCtrl($mdComponentRegistry) {

        var vm=this;

				vm.categoryConfig = [
					{name : "Routine Requests", id : 1, icon: "replay"}
					,{name : "Known Error Resolutions", id : 2, icon: "error"}
					,{name : "Testing and Validation", id : 3, icon: "build"}
					,{name : "Dashboarding Solutions", id : 4, icon: "dashboard"}
					,{name : "Duty Manager Tasks", id : 5, icon: "insert_drive_file"}
					,{name : "Monitoring", id : 6, icon: "remove_red_eye"}
					,{name : "Reporting", id : 7, icon: "dvr"}
					,{name : "Continuous Integration", id : 8, icon: "fast_forward"}
					,{name : "ChatOps", id : 9, icon: "chat"}
					,{name : "Others", id : 10, icon: "more_horiz"}];

        vm.toggleLeft = function(){
          $mdComponentRegistry.when('left').then(function(it){
            it.toggle();
          });
        }

      }

})();
