const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  var points = turf.randomPoint(50000, { bbox: [-180, -90, 180, 90] });
  const billboardCollection = viewer.scene.primitives.add(new Cesium.BillboardCollection());
  points.features.forEach(k => {
    let cor = k.geometry.coordinates;
    billboardCollection.add({
      //根据距离缩放
      scaleByDistance: new Cesium.NearFarScalar(2000000, 1, 8000000, 0.1),
      position: Cesium.Cartesian3.fromDegrees(cor[0], cor[1]),
      image: '/static/icon.png',
      width: 32,
      height: 32
    });
  });
};
