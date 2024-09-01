const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;

  class undergroundmodes {
    constructor(option) {
      this.viewer = option.viewer;
      this.options = option;
      this.viewer = viewer;
      this.config = {
        enableCollisionDetection: false,
        NearFarScalar: new Cesium.NearFarScalar(500.0, 0.0, 1000.0, 1.0),
        translucencyEnabled: true,
        fadeByDistance: true,
        alpha: 0.1
      };
      this.config = Object.assign(this.config, this.options);
      this.config.ecd = this.viewer.scene.screenSpaceCameraController.enableCollisionDetection;
      //透明度
      var alpha = Number(this.options.alpha ? this.options.alpha : 0.5);
      alpha = !isNaN(alpha) ? alpha : 1.0;
      alpha = Cesium.Math.clamp(alpha, 0.0, 1.0);
      this.config.alpha = alpha;
      this.viewer.scene.screenSpaceCameraController.enableCollisionDetection = this.config.enableCollisionDetection;
      //地下模式展示的相机范围
      this.viewer.scene.globe.translucency.frontFaceAlphaByDistance = this.config.NearFarScalar;
      this.update();
    }

    update() {
      //半透明启用
      this.viewer.scene.globe.translucency.enabled = this.config.translucencyEnabled;
      //按距离淡入
      this.viewer.scene.globe.translucency.frontFaceAlphaByDistance.nearValue = this.config.alpha;
      this.viewer.scene.globe.translucency.frontFaceAlphaByDistance.farValue = this.config.fadeByDistance ? 1.0 : this.config.alpha;
    }
    //改变半透明启用
    changeTranslucencyEnabled(enabled) {
      if (enabled != undefined) {
        this.config.translucencyEnabled = enabled;
        this.update();
      }
    }
    //改变是否按距离淡入
    changeFadeByDistance(fadeByDistance) {
      if (fadeByDistance != undefined) {
        this.config.fadeByDistance = fadeByDistance;
        this.update();
      }
    }
    //改变地表透明度
    changeAlpha(alpha) {
      if (alpha != undefined) {
        this.config.alpha = alpha;
        this.update();
      }
    }
  }

  var undergroundmode = new undergroundmodes({
    viewer: viewer
  });

  let v = 0.15;
  //改变地表透明度
  undergroundmode.changeAlpha(v);

  // 先把所有的影像图层的透明度设置为0
  viewer.imageryLayers._layers.forEach(layer => {
    layer.alpha = v;
  });
  viewer.scene.globe.baseColor = new Cesium.Color(0, 0, 0, 0);
};
