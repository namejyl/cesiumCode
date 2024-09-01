const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  // 单点
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
    point: {
      pixelSize: 10,
      color: Cesium.Color.YELLOW
    }
  });

  // polyline - 线
  viewer.entities.add({
    name: 'Red line on the surface',
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([75, 35, 125, 35]),
      width: 5,
      material: Cesium.Color.RED
    }
  });

  // polylineVolume - 折线
  function computeCircle(radius) {
    var positions = [];
    for (var i = 0; i < 360; i++) {
      var radians = Cesium.Math.toRadians(i);
      positions.push(new Cesium.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)));
    }
    return positions;
  }
  viewer.entities.add({
    name: 'Red tube with rounded corners',
    polylineVolume: {
      positions: Cesium.Cartesian3.fromDegreesArray([85.0, 32.0, 85.0, 36.0, 89.0, 36.0]),
      shape: computeCircle(60000.0),
      material: Cesium.Color.RED
    }
  });

  // Polygon - 面
  viewer.entities.add({
    name: 'Red polygon on surface',
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([115.0, 37.0, 115.0, 32.0, 107.0, 33.0, 102.0, 31.0, 102.0, 35.0]),
      material: Cesium.Color.RED
    }
  });

  // Circle - 圆
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(111.0, 40.0, 150000.0),
    name: 'Green circle at height',
    ellipse: {
      semiMinorAxis: 300000.0,
      semiMajorAxis: 300000.0,
      height: 200000.0,
      material: Cesium.Color.GREEN, // 单色
      // material: Cesium.Color.RED.withAlpha(0.5), // 透明色
      // material: "./sampledata/images/globe.jpg", // 图片
      fill: true,
      outline: true, // 必须设置height，否则ouline无法显示
      outlineColor: Cesium.Color.BLUE.withAlpha(0.5),
      outlineWidth: 10.0 // 不能设置，固定为1
    }
  });

  // box - 盒子
  viewer.entities.add({
    name: 'Blue box',
    position: Cesium.Cartesian3.fromDegrees(111.0, 40.0, 0),
    box: {
      dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
      material: Cesium.Color.BLUE
    }
  });

  // Ellipse - 椭圆
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(103.0, 40.0),
    name: 'Red ellipse on surface with outline',
    ellipse: {
      semiMinorAxis: 250000.0,
      semiMajorAxis: 400000.0,
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.RED
    }
  });

  // Corridor - 走廊
  viewer.entities.add({
    name: 'Red corridor on surface with rounded corners and outline',
    corridor: {
      positions: Cesium.Cartesian3.fromDegreesArray([100.0, 40.0, 105.0, 40.0, 105.0, 35.0]),
      width: 200000.0,
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.RED
    }
  });

  // Cylinder - 圆柱
  viewer.entities.add({
    name: 'Green cylinder with black outline',
    position: Cesium.Cartesian3.fromDegrees(100.0, 40.0, 200000.0),
    cylinder: {
      length: 400000.0,
      topRadius: 200000.0,
      bottomRadius: 200000.0,
      material: Cesium.Color.GREEN.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.DARK_GREEN
    }
  });

  // Cone - 圆锥
  viewer.entities.add({
    name: 'Red cone',
    position: Cesium.Cartesian3.fromDegrees(105.0, 40.0, 200000.0),
    cylinder: {
      length: 400000.0,
      topRadius: 0.0,
      bottomRadius: 200000.0,
      material: Cesium.Color.RED
    }
  });

  // rectangle - 矩形
  viewer.entities.add({
    name: 'Red translucent rectangle with outline',
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(80.0, 20.0, 110.0, 25.0),
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.RED
    }
  });

  // Sphere - 球体
  viewer.entities.add({
    name: 'Red sphere with black outline',
    position: Cesium.Cartesian3.fromDegrees(107.0, 40.0, 300000.0),
    ellipsoid: {
      radii: new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK
    }
  });

  // ellipsoid - 椭球体
  viewer.entities.add({
    name: 'Blue ellipsoid',
    position: Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0),
    ellipsoid: {
      radii: new Cesium.Cartesian3(200000.0, 200000.0, 300000.0),
      material: Cesium.Color.BLUE
    }
  });

  // wall - 墙
  viewer.entities.add({
    name: 'Green wall from surface with outline',
    wall: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([107.0, 43.0, 100000.0, 97.0, 43.0, 100000.0, 97.0, 40.0, 100000.0, 107.0, 40.0, 100000.0, 107.0, 43.0, 100000.0]),
      material: Cesium.Color.GREEN
    }
  });
};
