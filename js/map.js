let mapSize = {width: 8192, height: 8192}
let pxTrans = { dx: -19065, dy: -45040, m: 11 }
let mapBounds = [
    [pxTrans.dy, pxTrans.dx],
    [
        pxTrans.dy + pxTrans.m * mapSize.height,
        pxTrans.dx + pxTrans.m * mapSize.width
    ]
];

export var Map = L.Map.extend({
    bounds: mapBounds,
    initialize: function() {
        L.Map.prototype.initialize.call(this, 'map', {
            crs: L.CRS.Simple,
            minZoom: -7,
            maxZoom: -2,
        });
        this.on('contextmenu', function() {/* Do nothing */});
        L.imageOverlay('img/map.jpg', this.bounds).addTo(this);
        this.fitBounds(this.bounds);
    }
});
