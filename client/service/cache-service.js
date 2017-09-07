/**
*	Cache Service Module
*	Includes the functions used for adding/getting tools data to/from the server
*/
'use strict';

(function(){
	angular
		.module('ACOEPortfolio')
		.factory('CacheService', function ($cacheFactory){
			return $cacheFactory('appData');
		});
})();
