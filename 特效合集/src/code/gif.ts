const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  let div = document.createElement('div');
  let img = document.createElement('img');
  div.appendChild(img);
  img.src = '/static/tf.gif';

  img.onload = () => {
    let rub = new SuperGif({
      gif: img
    });
    rub.load(() => {
      const entity = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(-75.166493, 39.9060534),
        billboard: {
          image: new Cesium.CallbackProperty(() => {
            return rub.get_canvas().toDataURL('image/png');
          }, false),
          scale: 0.3
          // scaleByDistance: new Cesium.NearFarScalar(10, 1.2, 50, 1.2),
          // distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 600000),
          // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          // disableDepthTestDistance: 1000000
        }
      });
      resolve(entity);
    });
  };
};
