/** @jsx React.DOM */
var React = require('react');

require('../bower_components/bootstrap/dist/css/bootstrap.css');
require('../bower_components/bootstrap/dist/css/bootstrap-theme.css');

require('file!../bower_components/jquery/jquery.js');
require('file!../bower_components/bootstrap/dist/js/bootstrap.js');

require('./starter-template.css');


var RegisterShipmentPage = require('./pages/RegisterShipmentPage');
React.renderComponent(<RegisterShipmentPage/>, document.querySelector('#app'));
