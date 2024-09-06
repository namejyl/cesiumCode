const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  let globe;
  let center = [109.70171, 18.22181];
  let radius = 30;
  let options = { steps: 128, units: 'meters' };
  globe = viewer.scene.globe;
  viewer.entities.add({
    name: 'Bowl',
    position: Cesium.Cartesian3.fromDegrees(center[0], center[1], 0),
    ellipsoid: {
      radii: new Cesium.Cartesian3(30.0, 30.0, 30.0),
      innerRadii: new Cesium.Cartesian3(29.0, 29.0, 29.0),
      minimumCone: Cesium.Math.PI_OVER_TWO,
      material: new Cesium.ImageMaterialProperty({
        image: '/static/southeast2.jpg',
        repeat: new Cesium.Cartesian2(1, 1)
      }),
      outline: false
    }
  });
  viewer.zoomTo(viewer.entities);
  let circle = turf.circle(center, radius, options);
  let coordinates = circle.geometry.coordinates[0];
  coordinates = coordinates.splice(0, coordinates.length - 1);
  const points = [];
  coordinates.forEach(coordinate => {
    points.push(Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1], 0));
  });
  const pointsLength = points.length;
  const clippingPlanes = [];
  for (let i = 0; i < pointsLength; ++i) {
    const nextIndex = (i + 1) % pointsLength;
    let midpoint = Cesium.Cartesian3.add(points[i], points[nextIndex], new Cesium.Cartesian3());
    midpoint = Cesium.Cartesian3.multiplyByScalar(midpoint, 0.5, midpoint);
    const up = Cesium.Cartesian3.normalize(midpoint, new Cesium.Cartesian3());
    let right = Cesium.Cartesian3.subtract(points[nextIndex], midpoint, new Cesium.Cartesian3());
    right = Cesium.Cartesian3.normalize(right, right);
    let normal = Cesium.Cartesian3.cross(right, up, new Cesium.Cartesian3());
    normal = Cesium.Cartesian3.normalize(normal, normal);
    const originCenteredPlane = new Cesium.Plane(normal, 0.0);
    const distance = Cesium.Plane.getPointDistance(originCenteredPlane, midpoint);
    clippingPlanes.push(new Cesium.ClippingPlane(normal, distance));
  }
  globe.clippingPlanes = new Cesium.ClippingPlaneCollection({
    planes: clippingPlanes,
    edgeWidth: 0.0,
    edgeColor: Cesium.Color.WHITE,
    enabled: true
  });
  globe.backFaceCulling = true;
  globe.showSkirts = true;

  let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  handler.setInputAction(event => {
    let ray = viewer.camera.getPickRay(event.position);
    let cartesian = viewer.scene.globe.pick(ray, viewer.scene);
    let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    let lng = Cesium.Math.toDegrees(cartographic.longitude); // 经度
    let lat = Cesium.Math.toDegrees(cartographic.latitude); // 纬度
    let alt = cartographic.height; // 高度
    let coordinate = {
      longitude: Number(lng.toFixed(6)),
      latitude: Number(lat.toFixed(6)),
      altitude: Number(alt.toFixed(2))
    };
    console.log(coordinate);
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};
