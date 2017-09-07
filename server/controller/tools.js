/**
* Tools Controller module
* @module controller/tools
*/

'use strict';
var _path = require('path');

/**
* Description: Callback function for router for GET /api/tools
* Returns the contents of table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function getFeaturedTools(req, res, next) {
	var http = require('http');

	var options = {
		host: 'c4w13939.americas.hpqcorp.net',
		path: '/portfolio/api/featured',
		method: 'GET'
	};

	var request = http.request(options, function(apiResult) {
		apiResult.setEncoding('utf8');

		var productsApiResponse = '';
		apiResult.on('data', function(chunk) {
			productsApiResponse += chunk;
		});

		apiResult.on('end', function() {
			res.json(JSON.parse(productsApiResponse));
		});
	});

	request.on('error', function(err) {
		console.log(err);
		res.json({error : true, message : "Something happened in the request!"});
	});
	request.end();

	//res.send("get tools function in progress...");
}
exports.getFeaturedTools = getFeaturedTools;

/**
* Description: Callback function for router for GET /api/tools
* Returns the contents of table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function getToolsByCategory(req, res, next) {
	var http = require('http');

	var category = req.query.category;
	
	var options = {
		host: 'c4w13939.americas.hpqcorp.net',
		path: '/portfolio/api/bycategory/' + category,
		method: 'GET'
	};

	var request = http.request(options, function(apiResult) {
		apiResult.setEncoding('utf8');

		var productsApiResponse = '';
		apiResult.on('data', function(chunk) {
			productsApiResponse += chunk;
		});

		apiResult.on('end', function() {
			res.json(JSON.parse(productsApiResponse));
		});
	});

	request.on('error', function(err) {
		console.log(err);
		res.json({error : true, message : "Something happened in the request!"});
	});
	request.end();

	//res.send("get tools function in progress...");
}
exports.getToolsByCategory = getToolsByCategory;

/**
* Description: Callback function for router for GET /api/tools
* Returns the contents of table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function getAllTools(req, res, next) {
	var http = require('http');

	var options = {
		host: 'c4w13939.americas.hpqcorp.net',
		path: '/portfolio/api/all',
		method: 'GET'
	};

	var request = http.request(options, function(apiResult) {
		apiResult.setEncoding('utf8');

		var productsApiResponse = '';
		apiResult.on('data', function(chunk) {
			productsApiResponse += chunk;
		});

		apiResult.on('end', function() {
			res.json(JSON.parse(productsApiResponse));
		});
	});

	request.on('error', function(err) {
		console.log(err);
		res.json({error : true, message : "Something happened in the request!"});
	});
	request.end();

	//res.send("get tools function in progress...");
}
exports.getAllTools = getAllTools;

/**
* Description: Callback function for router for GET /api/tools
* Returns the contents of table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function getTools(req, res, next) {
	var http = require('http');

	var options = {
		host: 'localhost',
		port: 3001,
		path: '/tools',
		method: 'GET'
	};

	var request = http.request(options, function(apiResult) {
		//console.log('STATUS: ' + res.statusCode);
		//console.log('HEADERS: ' + JSON.stringify(res.headers));
		//console.log('CSRFTOKEN: ' + req.csrfToken());
		apiResult.setEncoding('utf8');

		var productsApiResponse = '';
		apiResult.on('data', function(chunk) {
			//console.log('BODY: ' + chunk);
			productsApiResponse += chunk;
		});

		apiResult.on('end', function() {
			res.json(JSON.parse(productsApiResponse));
		});
	});

	request.on('error', function(err) {
		console.log(err);
	});
	request.end();

	//res.send("get tools function in progress...");
}
exports.getTools = getTools;

/**
* Description: Callback function for router for GET /api/tool-details
* Returns the details of a specific tool
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function saveAsImage(req, res, next) {
	var exec = require('child_process').exec;
	var child;

	var phantomjsPath = _path.join('server', 'phantomjs');
	var phantomExe = _path.join( phantomjsPath, 'phantomjs-2.1.1-windows', 'bin', 'phantomjs.exe' );
	var projectRenderJs = _path.join( phantomjsPath, 'ProjectRender.js' )
	var url = "";
	var outputName = "";
	
	if (req.query.type == 2) {
		url = url + "\"" + "http://localhost:3000/#/project/" + req.query.projectName + "/pricing/\"";
		outputName = outputName + req.query.projectName + "-Pricing.jpg";
	}
	else if (req.query.type == 1) {
		url = url + "\"" + "http://localhost:3000/#/project/" + req.query.projectName + "/caseStudy/" + req.query.caseStudyIndex + "\"";
		outputName = outputName + req.query.projectName + "-Case-" + req.query.caseStudyName + ".jpg";
	}
	else {
		// this is in details page
		url = url + "\"" + "http://localhost:3000/#/project/" + req.query.projectName + "\"";
		outputName = outputName + req.query.projectName + ".jpg";
	}
	
	var output = "\"" + _path.join( phantomjsPath, 'output', outputName ) + "\"";
	
	child = function() {
		exec( phantomExe + ' ' + projectRenderJs + ' ' + url + ' ' + output
			
			,function (error, stdout, stderr) {
				res.json({file : _path.join( phantomjsPath, 'output', outputName )});
				if (error !== null) {
					console.log('exec error: ' + error);
				}
			}
		)};
	
	child();
}
exports.saveAsImage = saveAsImage;

/**
* Description: Callback function for router for downloading the saved image
* Returns downloads the saved image
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function downloadImage(req, res, next) {
	// var file = req.params.eno + '_pds.xls';
	var path = req.query.output;
	res.download(path);
}
exports.downloadImage = downloadImage;

/**
* Description: Callback function for router for GET /api/tool-details
* Returns the details of a specific tool
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function getToolDetails(req, res, next) {
	res.send("get tool details function in progress...");
}
exports.getToolDetails = getToolDetails;

/**
* Description: Callback function for router for POST /api/tools
* Adds an entry to the table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function addTools(req, res, next) {
	var body = req.body;
	res.send("add tools function in progress...");
}
exports.addTools = addTools;

/**
* Description: Callback function for router for PUT /api/tools
* Modifies an entry to the table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function editTools(req, res, next) {
	var body = req.body;
	res.send("edit tools function in progress...");
}
exports.editTools = editTools;

/**
* Description: Callback function for router for DELETE /api/tools
* Deletes an entry to the table ...
* End: Sends an array of JSON object containing the query
* @param {express.Request} req - The request object of express
* @param {express.Response} res - The response object of express
*/
function deleteTools(req, res, next) {
	var body = req.body;
	res.send("delete tools function in progress...");
}
exports.deleteTools = deleteTools;
