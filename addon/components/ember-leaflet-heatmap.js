import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';
import ContainerMixin from 'ember-leaflet/mixins/container';

export default BaseLayer.extend (
	ContainerMixin,
	{
		leafletOptions : [
			'latlngs',
		    'heatmapOptions'
		],
		createLayer(){
			return this.L.heatLayer (this.get('latlngs'), this.get('heatmapOptions'));
		},
		didInsertElement() {
			this._super (...arguments);
			this.layerSetup ();
		},
		layerSetup() {
			if (Ember.isNone (this.get('_layer'))) {
				this._layer = this.createLayer ();
				this._addObservers ();
				this._addEventListeners ();
				this.didCreateLayer ();
			}
			if (this.get('containerLayer')) {
				if (Ember.isNone (this.get('containerLayer')._layer) === false) {
					this.get('containerLayer')._layer.addLayer (this._layer);
				}
			}
			
		}
	}
);
