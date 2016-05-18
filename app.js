var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var miraConfig = require('./config/mira.json');

/* Add Mira API key to header */
apiProxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Api-Key', miraConfig["mira-api-key"]);
});

/* Redirect urls... */
app.all("/api/*", function(req, res) {
  apiProxy.web(req, res, {target: miraConfig["mira-url"]});
});

app.listen(5000);
