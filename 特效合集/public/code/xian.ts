const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  // 贴地
  var hello = viewer.entities.add({
    name: 'hello world',
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([-77, 35, -80, 35, -90, 45]),
      width: 3,
      material: Cesium.Color.RED,
      clampToGround: true //贴地画线
    }
  });

  // 不贴地
  var world = viewer.entities.add({
    name: 'hello world',
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([-77, 30, -80, 30, -90, 40]),
      width: 3,
      material: Cesium.Color.BLUE,
      clampToGround: false
    }
  });

  // 不贴地2
  var start = Cesium.Cartesian3.fromDegrees(-57, 30, 2800.0);
  var end = Cesium.Cartesian3.fromDegrees(-70, 40, 300000.0);

  var world = viewer.entities.add({
    name: 'hello world',
    polyline: {
      positions: [start, end],
      width: 3,
      material: Cesium.Color.BLUE,
      clampToGround: false
    }
  });
};
