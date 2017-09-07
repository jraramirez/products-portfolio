/**
*	Pricing Controller Module
*
*/
'use strict';

(function(){
		angular
			.module('ACOEPortfolio')
			.controller('PricingCtrl', ['ProjectService', PricingCtrl]);

			function PricingCtrl(ProjectService){

				var vm = this;

				vm.pricingDetails = {};

				vm.error = false;
				vm.errorMessage = "";

				//TODO: get pricing details
				//TODO: Table for the pricing description
				vm.pricingDetails = {
					"pricingDescription":[
						{"kind":"One Time Cost", "small": "25045", "medium": "25045", "large": "25045"},
						{"kind":"Monthly Estimate", "small": "25045", "medium": "25045", "large": "25045" },
						{"kind":"Yearly Estimate", "small": "25045", "medium": "25045", "large": "25045" }
					],
					"pricingElements": [
						"Number of nodes",
						"Number of Satellite Servers",
						"Agent deployment (done by the account)"
					],
					"pricingRisks": [
						"Satellite server installation takes a lot of coordination with accounts",
						"Must engage the engineering team for script reviews and review time is variable dependent on complexity",
						"Centralized instance means new plug-in installation will have to follow prescribed release cycle"
					],
					"pricingOthers": [
						"There are development environments available for use to develop and test scripts",
						"Global, Simple Pricing Model, Mature",
						"There is also an add on for DMA which would help alleviate some of the Database Administration tasks, there are 200 DMA scripts written available from the ES Automation Community.",
					],
				};
			}

})();
