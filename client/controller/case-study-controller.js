/**
 *	Business Case Controller Module
 *
 */
'use strict';

(function() {
	angular
		.module('ACOEPortfolio')
		.controller('CaseStudyCtrl', ['$routeParams', 'ProjectService', CaseStudyCtrl]);

	function CaseStudyCtrl($routeParams, ProjectService) {

		var vm = this;

		vm.caseStudyList = [{
			"id": 0,
			"title": "Case 1",
			"details": "some details for Case 1",
			"engineers": ["dela Cruz, Juan A.", "Clinton, Bill A."],
			"projectManager": "dela Cruz, Juan A.",
			"teamsInvolved": ["Automation Team 1", "Automation Team 2"],
			"savings": ["Vodafone – 65% improvement in service quality ratings. Within the first year of using BSM, Vodafone experienced a 300% return on investment, annual savings of €1.2M.", "Kuveyt Turk - Reduced IT Costs 30% reduced services calls ;reduces labor costs by over $1.2M over 3years."],
			"benefits": ["Error-proof configuration of environments.", "Support for heterogeneous environments.", "Increased utilization of hardware."],
			"features": ["Automated release management", "Flexible application modeling", "Application deployment and infrastructure provisioning"]
		}, {
			"id": 1,
			"title": "Case 2",
			"details": "some details for Case 2",
			"engineers": ["dela Cruz, Juan A.", "Clinton, Bill A."],
			"projectManager": "dela Cruz, Juan A.",
			"teamsInvolved": ["Automation Team 1", "Automation Team 2"],
			"savings": ["Vodafone – 65% improvement in service quality ratings. Within the first year of using BSM, Vodafone experienced a 300% return on investment, annual savings of €1.2M.", "Kuveyt Turk - Reduced IT Costs 30% reduced services calls ;reduces labor costs by over $1.2M over 3years."],
			"benefits": ["Error-proof configuration of environments.", "Support for heterogeneous environments.", "Increased utilization of hardware."],
			"features": ["Automated release management", "Flexible application modeling", "Application deployment and infrastructure provisioning"]
		}, {
			"id": 2,
			"title": "Case 3",
			"details": "some details for Case 3",
			"engineers": ["dela Cruz, Juan A.", "Clinton, Bill A."],
			"projectManager": "dela Cruz, Juan A.",
			"teamsInvolved": ["Automation Team 1", "Automation Team 2"],
			"savings": ["Vodafone – 65% improvement in service quality ratings. Within the first year of using BSM, Vodafone experienced a 300% return on investment, annual savings of €1.2M.", "Kuveyt Turk - Reduced IT Costs 30% reduced services calls ;reduces labor costs by over $1.2M over 3years."],
			"benefits": ["Error-proof configuration of environments.", "Support for heterogeneous environments.", "Increased utilization of hardware."],
			"features": ["Automated release management", "Flexible application modeling", "Application deployment and infrastructure provisioning"]
		}];

		vm.index = $routeParams.caseStudy;
		vm.selectedCaseStudy = vm.caseStudyList[vm.index];
		vm.selectedCaseStudyName = vm.selectedCaseStudy.title;

		vm.otherCaseStudies = vm.caseStudyList.splice(0);
		vm.otherCaseStudies.splice(vm.index, 1);
	}
})();