/**
*	Business Case Controller Module
*
*/
'use strict';

(function(){
		angular
			.module('ACOEPortfolio')
			.controller('AllBusinessCaseCtrl', [AllBusinessCaseCtrl]);

			function AllBusinessCaseCtrl($routeParams){

			 var vm=this;

			 vm.showPricing = false;

			 vm.toggleShowPricing = function(){
				 vm.showPricing = !vm.showPricing;
			 }

			 //TODO: get business case list
			 vm.allCaseStudies = [
				{
					"id" : 0,
					"title" : "Case 1",
					"details" : "some details for Case 1",
					"engineers" : ["dela Cruz, Juan A.", "Clinton, Bill A."],
					"projectManager" : "dela Cruz, Juan A.",
					"teamsInvolved" : ["Automation Team 1", "Automation Team 2"],
					"savings" : ["Vodafone – 65% improvement in service quality ratings. Within the first year of using BSM, Vodafone experienced a 300% return on investment, annual savings of €1.2M."
							,"Kuveyt Turk - Reduced IT Costs 30% reduced services calls ;reduces labor costs by over $1.2M over 3years."
						],
					"benefits" : ["Error-proof configuration of environments."
							,"Support for heterogeneous environments."
							,"Increased utilization of hardware."
						],
					"features" : ["Automated release management"
							,"Flexible application modeling"
							,"Application deployment and infrastructure provisioning"
						]
				}
				,{
					"id" : 1,
					"title" : "Case 2",
					"details" : "some details for Case 2",
					"engineers" : ["dela Cruz, Juan A.", "Clinton, Bill A."],
					"projectManager" : "dela Cruz, Juan A.",
					"teamsInvolved" : ["Automation Team 1", "Automation Team 2"],
					"savings" : ["2Vodafone – 65% improvement in service quality ratings. Within the first year of using BSM, Vodafone experienced a 300% return on investment, annual savings of €1.2M."
							,"2Kuveyt Turk2 - Reduced IT Costs 30% reduced services calls ;reduces labor costs by over $1.2M over 3years."
						],
					"benefits" : ["2Error-proof configuration of environments."
							,"2Support for heterogeneous environments"
							,"2Increased utilization of hardware"
						],
					"features" : ["2Automated release management"
							,"2Flexible application modeling"
							,"2Application deployment and infrastructure provisioning"
						]
				}
				,{
					"id" : 2,
					"title" : "Case 3",
					"details" : "some details for Case 3",
					"engineers" : ["dela Cruz, Juan A.", "Clinton, Bill A."],
					"projectManager" : "dela Cruz, Juan A.",
					"teamsInvolved" : ["Automation Team 1", "Automation Team 2"],
					"savings" : ["2Vodafone – 65% improvement in service quality ratings. Within the first year of using BSM, Vodafone experienced a 300% return on investment, annual savings of €1.2M."
							,"2Kuveyt Turk2 - Reduced IT Costs 30% reduced services calls ;reduces labor costs by over $1.2M over 3years."
						],
					"benefits" : ["2Error-proof configuration of environments."
							,"2Support for heterogeneous environments"
							,"2Increased utilization of hardware"
						],
					"features" : ["2Automated release management"
							,"2Flexible application modeling"
							,"2Application deployment and infrastructure provisioning"
						]
				}
			 ];

			 vm.isShowButtonShown = vm.allCaseStudies.length > 1;
			 vm.areOtherCasesShown = false;

			 vm.toggleShowOtherCases = function() {
				 vm.areOtherCasesShown = !vm.areOtherCasesShown;
			 }

			//TODO: create/call summary function
			 vm.summaryColumns = [
				 {"title":"Current Mode of Operation",
				 "contents":[
				 	"Current process of resolving PM Dashboard Unavailability issues is done manually and involves several steps",
				 	"Mode of opreation 2",
				 	"Mode of opreation 3"
				 ]},
				 {"title":"Problem Statement",
				 "contents":[
				 	"The Portfolio Management (PM) Dashboard application is BI tool used by P&G which needs to have 100% application availability.  In case of application unavailability, the current process in restoring the application from an outage has involves manual steps and intervention of support team. There is a need for faster and proactive way of resolving dashboard application outages.",
				 	"Problem statement 2",
				 	"Problem statement 3",

				 ]},
				 {"title":"Future Mode of Operations",
				 "contents":[
				 	"The HP OO flow is responsible for the end-to-end process of restarting the dashboard service and validation of dashboards availability. Once the unavailability of the dashboards is detected from BAC, the flow will run to automatically restart the Qlikview services for the PM Dashboard Application. No human intervention is required.",
				 	"Future mode of operations 2",
				 	"Future mode of opreations 3"
				 	]}
			 ];
			 vm.selectedBusinessCase = {};

			 vm.getBusinessCaseDetails = function(businessCaseName){

				 //  TODO: Get details of a selected business case
				 vm.selectedBusinessCase={
					 "title":"Title of Business Case",
					 "story":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dignissim tellus. Sed dictum luctus blandit. In blandit imperdiet congue. In id risus sapien. Maecenas sed urna non justo efficitur tempus. Cras euismod risus sapien, ut ornare lacus egestas nec. Maecenas dictum tortor vel sollicitudin placerat. Donec non dui bibendum, imperdiet ante ac, interdum mi. Sed vel vestibulum massa, sit amet efficitur sem. Quisque sed ex nec nisi consectetur pulvinar ut eget augue.",
					 "focus_function":"Focus function of the business case",
					 "account":"Account of the business case",
					 "value":"Value of the business case"
				 };
			 }

			}

})();
