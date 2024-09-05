const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  viewer.scene.debugShowFramesPerSecond = true;

  viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
  viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

  var position = Cesium.Cartesian3.fromDegrees(-95.0, 40.0, 200000.0);
  var heading = Cesium.Math.toRadians(0);
  var pitch = Cesium.Math.toRadians(0);
  var roll = Cesium.Math.toRadians(0);

  var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
  var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

  var entity = viewer.entities.add({
    position: position,
    orientation: orientation,
    model: {
      uri: '/glb/feiji.glb',
      scale: 10,
      color: Cesium.Color.fromCssColorString('rgba(254, 129, 6, 0.65)'), //混合色
      silhouetteColor: Cesium.Color.fromCssColorString('#001aff'), //边框
      silhouetteSize: 5, //边框大小
      colorBlendMode: Cesium.ColorBlendMode.MIX,
      runAnimations: true,
      shadows: Cesium.ShadowMode.CAST_ONLY,
      colorBlendAmount: 0
    }
  });

  viewer.flyTo(entity);
};
