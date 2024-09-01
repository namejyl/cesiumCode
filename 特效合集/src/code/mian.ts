const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  // extrudedHeight是本身高度
  // height是离地高度
  // --------注意：贴地时候，没extrudedHeight，所以outline不会生效---------------

  const redPolygon = viewer.entities.add({
    name: '最简单的贴地面',
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([-115.0, 37.0, -115.0, 32.0, -107.0, 33.0, -102.0, 31.0, -102.0, 35.0]),
      material: Cesium.Color.RED.withAlpha(0.5)
    },
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([-115.0, 37.0, -115.0, 32.0, -107.0, 33.0, -102.0, 31.0, -102.0, 35.0, -115.0, 37.0]),
      width: 3,
      material: Cesium.Color.BLUE,
      clampToGround: true //贴地画线
    }
  });

  const greenPolygon = viewer.entities.add({
    name: '贴地围墙',
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([-108.0, 42.0, -100.0, 42.0, -104.0, 40.0]),
      extrudedHeight: 50000.0,
      material: Cesium.Color.GREEN,
      closeTop: false,
      closeBottom: false
    }
  });

  const orangePolygon = viewer.entities.add({
    name: '立面拉伸填充面',
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([-108.0, 25.0, 100000, -100.0, 25.0, 100000, -100.0, 30.0, 100000, -108.0, 30.0, 300000]),
      extrudedHeight: 0,
      perPositionHeight: true,
      material: Cesium.Color.ORANGE.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK
    }
  });

  const cyanPolygon = viewer.entities.add({
    name: '立体悬浮面',
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([-90.0, 41.0, 0.0, -85.0, 41.0, 5000.0, -80.0, 36.0, 95550.0]),
      perPositionHeight: true,
      material: Cesium.Color.CYAN.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK
    }
  });

  viewer.zoomTo(viewer.entities);
};
