'use strict';

var tools = require('./../controller/tools');
/**
* Sets the routes of parameter of the function.
* @param {express.Router()} router - The router object to set routes to
* @return {express.Router()} The fully configured router object
*/
function setRoutes(router) {

  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /*router.route('/api/tools')
    .get(tools.getTools)
    .post(tools.addTools)
    .put(tools.editTools)
    .delete(tools.deleteTools);*/
    
  router.route('/api/tools/category').get(tools.getToolsByCategory);
  router.route('/api/tools/featured').get(tools.getFeaturedTools);
  router.route('/api/tools/all').get(tools.getAllTools);
	
  router.route('/api/tools/saveAsImage').get(tools.saveAsImage);
	router.route('/api/tools/downloadImage').get(tools.downloadImage);

  router.route('/api/tools/details')
    .get(tools.getToolDetails);

  return router;
}
module.exports = setRoutes;
