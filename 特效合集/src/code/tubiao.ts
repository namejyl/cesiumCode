const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  var billboard = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-115.59777, 40.03883),
    billboard: {
      image: '/static/icon.png',
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // 贴附地面

      scaleByDistance: new Cesium.NearFarScalar(2000000, 1.5, 8000000, 0.5),

      // scaleByDistance 根据摄像机的距离来设置缩放比例
      // Cesium.NearFarScalar （near:摄像机范围的下限，nearValue:摄像机范围下限的值，far:摄像机范围的上限，farValue:摄像机范围上限的值）

      // new Cesium.NearFarScalar(100, 0.8, 1000, 0.2)
      // 0-100米，缩放比固定为0.8
      // 100-1000米，缩放比随着距离变大，由0.8插值变成0.2
      // 1000米以上，缩放比固定为0.2

      // scaleByDistance 设置距离方位内，Billboard或Label的缩放比例
      // translucencyByDistance  设置距离方位内，Billboard或Label的半透明度比例
      // pixelOffsetScaleByDistance ： 设置距离方位内，Billboard或Label的偏移量比例

      scale: 1,
      show: true,
      // pixelOffset: new Cesium.Cartesian2(10, -10),
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      width: 32,
      height: 32
    }
  });
};
