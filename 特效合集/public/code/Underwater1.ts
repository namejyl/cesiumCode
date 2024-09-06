const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  let scene = viewer.scene;
  let globe = scene.globe;
  scene.debugShowFramesPerSecond = true;

  viewer.scene.primitives.add(
    new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.RectangleGeometry({
          rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
          vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
        })
      }),
      //水材质
      appearance: new Cesium.EllipsoidSurfaceAppearance({
        material: new Cesium.Material({
          fabric: {
            type: 'Water',
            uniforms: {
              baseWaterColor: new Cesium.Color(89 / 255, 148 / 255, 236 / 255, 1), // 水区颜色
              blendColor: new Cesium.Color(0.5, 1.0, 0.699, 1.0), // 从水到非水区域混合
              normalMap: './Cesium/Assets/Textures/waterNormals.jpg',
              specularMap: '/static/earthspec1k.jpg',
              frequency: 2000.0, // 波浪数量。
              animationSpeed: 0.01, // 动画速度
              amplitude: 10.0, // 水波振幅
              specularIntensity: 0 // 镜面反射强度
            }
          }
        }),
        aboveGround: true
      }),
      show: true
    })
  );
};
