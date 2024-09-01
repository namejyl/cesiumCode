const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  var imageryProvider = new Cesium.SingleTileImageryProvider({
    url: '/static/world_b.jpg',
    id: '1'
  });
  viewer.imageryLayers.addImageryProvider(imageryProvider);
};
