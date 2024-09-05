const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  var clouds = viewer.scene.primitives.add(
    new Cesium.CloudCollection({
      noiseDetail: 16.0
    })
  );

  //添加云
  var cloud = clouds.add({
    position: Cesium.Cartesian3.fromDegrees(114.39264, 30.52252, 200),
    scale: new Cesium.Cartesian2(25, 12),
    slice: 0.36,
    brightness: 1
  });

  //设置相机位置及方向
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(114.401867, 30.520423, 243.7),
    duration: 2,
    orientation: {
      heading: Cesium.Math.toRadians(281.8),
      pitch: Cesium.Math.toRadians(-6.6),
      roll: 0.0
    }
  });

  var ScaleX = document.getElementById('ScaleX'); //X轴尺寸
  var ScaleXValue = document.getElementById('ScaleXValue'); //ScaleX滑动条值
  var ScaleY = document.getElementById('ScaleY'); //Y轴尺寸
  var ScaleYValue = document.getElementById('ScaleYValue'); //ScaleY滑动条值
  var Brightness = document.getElementById('Brightness'); //亮度
  var BrightnessValue = document.getElementById('BrightnessValue'); //亮度滑动条值
  changeScale();
  //Scale滑动条
  function changeScale() {
    //拿到scaleX滑动条当前值
    var sX = Number(ScaleX.value);
    //文本框显示当前值
    ScaleXValue.value = sX;

    //拿到scaleY滑动条当前值
    var sY = Number(ScaleY.value);
    //x轴旋转文本框显示当前值
    ScaleYValue.value = sY;

    //修改云的比例
    cloud.scale = new Cesium.Cartesian2(sX, sY);
  }
  //ScaleX文本框
  function changeScaleX() {
    //拿到scaleX文本框的值并赋值给滑动条
    ScaleX.value = Number(ScaleXValue.value);

    changeScale();
  }
  //ScaleY文本框
  function changeScaleY() {
    //拿到scaleY文本框的值并赋值给滑动条
    ScaleY.value = Number(ScaleYValue.value);
    changeScale();
  }

  //Brightness滑动条
  function changeBrightness() {
    //拿到Brightness滑动条滑动条当前值
    var brightness = Number(Brightness.value);
    //文本框显示当前值
    BrightnessValue.value = brightness;

    //修改云的亮度
    cloud.brightness = brightness;
  }
  //Brightness文本框
  function changeBrightnessValue() {
    //拿到文本框的值并赋值给滑动条
    Brightness.value = Number(BrightnessValue.value);
    changeBrightness();
  }
};
