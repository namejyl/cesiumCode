const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(98.71707797694049, 27.677299704639537, 50000.0)
  });

  viewer.entities.removeAll(); //删除所有

  let waterHeight = 1000;
  let targertWaterHeight = 3600;
  let speed;
  let times;
  var startTime = Cesium.JulianDate.now();

  const redPolygon = viewer.entities.add({
    name: '最简单的贴地面',
    polygon: {
      extrudedHeight: new Cesium.CallbackProperty(function () {
        console.log(startTime);
        console.log(Cesium.JulianDate.now());
        // 要按流速速度的话，加时间判断即可
        waterHeight += 2;
        if (waterHeight > targertWaterHeight) {
          waterHeight = targertWaterHeight;
        }
        return waterHeight;
      }, false),
      hierarchy: Cesium.Cartesian3.fromDegreesArray([98.676842346815, 27.571578111198868, 98.86252156624968, 27.77444519911974, 98.76756234288729, 27.800244194152533, 98.57088699052892, 27.72492584876768, 98.676842346815, 27.571578111198868]),
      material: new Cesium.Color.fromBytes(64, 157, 253, 150),
      perPositionHeight: true
    }
  });
};
