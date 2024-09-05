const Cesium = window.Cesium;
export default () => {
  var waterFace = [90.0, 30.0, 0, 91.0, 30.0, 0, 91.0, 29.0, 0, 90.0, 29.0, 0];

  var waterPrimitive = new Cesium.Primitive({
    show: true, // 默认隐藏
    allowPicking: false,
    geometryInstances: new Cesium.GeometryInstance({
      geometry: new Cesium.PolygonGeometry({
        polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(waterFace))
      })
    }),
    // 可以设置内置的水面shader
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      material: new Cesium.Material({
        fabric: {
          type: 'Water',
          uniforms: {
            normalMap: Cesium.buildModuleUrl('/static/waterNormals.jpg'),
            frequency: 1000.0,
            animationSpeed: 0.01,
            amplitude: 10.0
          }
        }
      })
    })
  });
  viewer.scene.primitives.add(waterPrimitive);

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(90.5, 29.5, 60000.0),
    orientation: {
      heading: Cesium.Math.toRadians(0.0), //默认朝北0度，顺时针方向，东是90度
      pitch: Cesium.Math.toRadians(-90), //默认朝下看-90,0为水平看，
      roll: Cesium.Math.toRadians(0) //默认0
    }
  });
};
