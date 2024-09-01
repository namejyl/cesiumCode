const Cesium = window.Cesium;
export default () => {
  var hello = viewer.entities.add({
    name: '贴地',
    position: Cesium.Cartesian3.fromDegrees(-75.166493, 39.9060534),
    point: {
      pixelSize: 5,
      color: Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    },
    label: {
      text: '贴地',
      font: '14pt monospace',
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
      showBackground: true,
      backgroundColor: Cesium.Color.WHITE
    }
  });

  var world = viewer.entities.add({
    name: '不贴地',
    position: Cesium.Cartesian3.fromDegrees(-95.166493, 39.9060534, 2000),
    point: {
      pixelSize: 5,
      color: Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2
    },
    label: {
      text: '不贴地',
      font: '14pt monospace',
      outlineWidth: 2
    }
  });
  var cartographic = Cesium.Cartographic.fromDegrees(-115.166493, 39.9060534, 10);
  var posi = new Cesium.Cartographic(cartographic.longitude, cartographic.latitude);
  var height = viewer.scene.globe.getHeight(posi);
  console.log(height);

  var haha = viewer.entities.add({
    name: '自动计算贴地,需要有地形',
    position: Cesium.Cartesian3.fromDegrees(-115.166493, 39.9060534, height + 0.1),
    point: {
      pixelSize: 5,
      color: Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    },
    label: {
      text: '自动计算贴地,需要有地形',
      font: '14pt monospace',
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    }
  });

  // 修改值和属性
  hello.label.fillColor = Cesium.Color.RED;
  // hello.position =  Cesium.Cartesian3.fromDegrees(-100, 39.9060534)
};
