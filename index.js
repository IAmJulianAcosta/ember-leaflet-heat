/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
	name : 'ember-leaflet-heatmap',
	blueprintsPath: function() {
		return path.join(__dirname, 'blueprints');
	},
};
