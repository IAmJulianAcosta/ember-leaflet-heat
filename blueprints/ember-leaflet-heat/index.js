/*jshint node:true*/
module.exports = {
	description : '',
	afterInstall : function () {
		return this.addBowerPackageToProject ('Leaflet.heat');
	}
};
