const Cesium = window.Cesium;
const VisibilityAnalysis = async () => {
  // 通视分析
  let viewer = window.viewer;
  var viewsheds = [];

  var options = {
    qdOffset: 2,
    zdOffset: 2
  };
  var viewshed2 = new viewshed(viewer, options);
  viewsheds.push(viewshed2);

  function click_clear() {
    viewsheds.forEach(element => {
      element.clear();
    });
  }
};
export default VisibilityAnalysis;

class analyser {
  constructor(viewer) {
    //初始化分析工具
    this._viewer = viewer;

    this.BEYONANALYSER_STATE = {
      PREPARE: 0,
      OPERATING: 1,
      END: 2
    };

    //初始化
    this.init();
  }

  init() {
    //handler
    this.handler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas);
  }

  /**
   * 提示框
   * @param {*} bShow
   * @param {*} position
   * @param {*} message
   */
  showTip(label, bShow, position, message, effectOptions) {
    label.show = bShow;
    if (bShow) {
      if (position) label.position = position;
      if (message) label.label.text = message;
      if (effectOptions) {
        for (let key in effectOptions) {
          if (label.key) {
            label.key = effectOptions[key];
          }
        }
      }
    }
  }

  /**
   * 获取相交对象
   * @param {*} startPos
   * @param {*} endPos
   * @param {*} excludeArr
   * @param {*} bDrillPick
   */
  getIntersectObj(startPos, endPos, excludeArr = [], bDrillPick = false) {
    var viewer = this._viewer;
    var direction = Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(endPos, startPos, new Cesium.Cartesian3()), new Cesium.Cartesian3());
    var ray = new Cesium.Ray(startPos, direction); //无限延长的射线

    var results = [];

    if (bDrillPick) {
      results = viewer.scene.drillPickFromRay(ray, 10, excludeArr);
    } //只pick首个物体
    else {
      var result = viewer.scene.pickFromRay(ray, excludeArr);
      if (Cesium.defined(result)) {
        results = [result];
      }
    }
    return results;
  }
}

var latlng = {};
/**
 * 获取鼠标当前的屏幕坐标位置的三维Cesium坐标
 * @param {Cesium.Scene} scene
 * @param {Cesium.Cartesian2} position 二维屏幕坐标位置
 * @param {Cesium.Entity} noPickEntity 排除的对象（主要用于绘制中，排除对自己本身的拾取）
 */
latlng.getCurrentMousePosition = function (scene, position, noPickEntity) {
  var cartesian;

  //在模型上提取坐标
  var pickedObject = scene.pick(position);
  if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
    //pickPositionSupported :判断是否支持深度拾取,不支持时无法进行鼠标交互绘制
    var entity = pickedObject.id;
    if (noPickEntity == null || (noPickEntity && entity !== noPickEntity)) {
      var cartesian = scene.pickPosition(position);
      if (Cesium.defined(cartesian)) {
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        var height = cartographic.height; //模型高度
        if (height >= 0) return cartesian;

        //不是entity时，支持3dtiles地下
        if (!Cesium.defined(pickedObject.id) && height >= -500) return cartesian;
      }
    }
  }

  //测试scene.pickPosition和globe.pick的适用场景 https://zhuanlan.zhihu.com/p/44767866
  //1. globe.pick的结果相对稳定准确，不论地形深度检测开启与否，不论加载的是默认地形还是别的地形数据；
  //2. scene.pickPosition只有在开启地形深度检测，且不使用默认地形时是准确的。
  //注意点： 1. globe.pick只能求交地形； 2. scene.pickPosition不仅可以求交地形，还可以求交除地形以外其他所有写深度的物体。

  //提取鼠标点的地理坐标
  if (scene.mode === Cesium.SceneMode.SCENE3D) {
    //三维模式下
    var pickRay = scene.camera.getPickRay(position);
    cartesian = scene.globe.pick(pickRay, scene);
  } else {
    //二维模式下
    cartesian = scene.camera.pickEllipsoid(position, scene.globe.ellipsoid);
  }
  return cartesian;
};

/**
 * 提取地球中心点坐标
 * @param {Cesium.Viewer} viewer
 * */
latlng.getCenter = function (viewer) {
  var scene = viewer.scene;
  var target = pickCenterPoint(scene);
  var bestTarget = target;
  if (!bestTarget) {
    var globe = scene.globe;
    var carto = scene.camera.positionCartographic.clone();
    var height = globe.getHeight(carto);
    carto.height = height || 0;
    bestTarget = Cesium.Ellipsoid.WGS84.cartographicToCartesian(carto);
  }

  var result = latlng.formatPositon(bestTarget);

  // 获取地球中心点世界位置  与  摄像机的世界位置  之间的距离
  var distance = Cesium.Cartesian3.distance(bestTarget, viewer.scene.camera.positionWC);
  result.cameraZ = distance;

  return result;
};

function pickCenterPoint(scene) {
  var canvas = scene.canvas;
  var center = new Cesium.Cartesian2(canvas.clientWidth / 2, canvas.clientHeight / 2);

  var ray = scene.camera.getPickRay(center);
  var target = scene.globe.pick(ray, scene);
  return target || scene.camera.pickEllipsoid(center);
}

/**
 * 提取地球视域边界
 * @param {Cesium.Viewer} viewer
 * */
latlng.getExtent = function (viewer) {
  // 范围对象
  var extent = {
    xmin: 70,
    xmax: 140,
    ymin: 0,
    ymax: 55
  }; //默认值：中国区域

  // 得到当前三维场景
  var scene = viewer.scene;

  // 得到当前三维场景的椭球体
  var ellipsoid = scene.globe.ellipsoid;
  var canvas = scene.canvas;

  // canvas左上角
  var car3_lt = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(0, 0), ellipsoid);
  if (car3_lt) {
    // 在椭球体上
    var carto_lt = ellipsoid.cartesianToCartographic(car3_lt);
    extent.xmin = Cesium.Math.toDegrees(carto_lt.longitude);
    extent.ymax = Cesium.Math.toDegrees(carto_lt.latitude);
  } else {
    // 不在椭球体上
    var xMax = canvas.width / 2;
    var yMax = canvas.height / 2;

    var car3_lt2;
    // 这里每次10像素递加，一是10像素相差不大，二是为了提高程序运行效率
    for (var yIdx = 0; yIdx <= yMax; yIdx += 10) {
      var xIdx = yIdx <= xMax ? yIdx : xMax;
      car3_lt2 = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(xIdx, yIdx), ellipsoid);
      if (car3_lt2) break;
    }
    if (car3_lt2) {
      var carto_lt = ellipsoid.cartesianToCartographic(car3_lt2);
      extent.xmin = Cesium.Math.toDegrees(carto_lt.longitude);
      extent.ymax = Cesium.Math.toDegrees(carto_lt.latitude);
    }
  }

  // canvas右下角
  var car3_rb = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(canvas.width, canvas.height), ellipsoid);
  if (car3_rb) {
    // 在椭球体上
    var carto_rb = ellipsoid.cartesianToCartographic(car3_rb);
    extent.xmax = Cesium.Math.toDegrees(carto_rb.longitude);
    extent.ymin = Cesium.Math.toDegrees(carto_rb.latitude);
  } else {
    // 不在椭球体上
    var xMax = canvas.width / 2;
    var yMax = canvas.height / 2;

    var car3_rb2;
    // 这里每次10像素递减，一是10像素相差不大，二是为了提高程序运行效率
    for (var yIdx = canvas.height; yIdx >= yMax; yIdx -= 10) {
      var xIdx = yIdx >= xMax ? yIdx : xMax;
      car3_rb2 = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(xIdx, yIdx), ellipsoid);
      if (car3_rb2) break;
    }
    if (car3_rb2) {
      var carto_rb = ellipsoid.cartesianToCartographic(car3_rb2);
      extent.xmax = Cesium.Math.toDegrees(carto_rb.longitude);
      extent.ymin = Cesium.Math.toDegrees(carto_rb.latitude);
    }
  }

  //交换
  if (extent.xmax < extent.xmin) {
    var temp = extent.xmax;
    extent.xmax = extent.xmin;
    extent.xmin = temp;
  }
  if (extent.ymax < extent.ymin) {
    var temp = extent.ymax;
    extent.ymax = extent.ymin;
    extent.ymin = temp;
  }

  return extent;
};
/**
 * 提取视域边界
 * @param {Cesium.Viewer} viewer
 *
 * */
latlng.getViewBounds = function (viewer) {
  var rectangle = viewer.camera.computeViewRectangle();
  // 弧度转为经纬度，west为左（西）侧边界的经度，以下类推
  var west = (rectangle.west / Math.PI) * 180;
  var north = (rectangle.north / Math.PI) * 180;
  var east = (rectangle.east / Math.PI) * 180;
  var south = (rectangle.south / Math.PI) * 180;
  // 鉴于高德、leaflet获取的边界都是southwest和northeast字段来表示，本例保持一致性
  var bounds = {
    southwest: {
      lng: west,
      lat: south
    },
    northeast: {
      lng: east,
      lat: north
    }
  };
  return bounds;
};

/**
 * 提取相机视角范围参数
 * @param {Cesium.Viewer} viewer
 *
 * */
latlng.getCameraView = function (viewer) {
  var camera = viewer.camera;
  var position = camera.positionCartographic;

  var bookmark = {};
  bookmark.y = Number(Cesium.Math.toDegrees(position.latitude).toFixed(6));
  bookmark.x = Number(Cesium.Math.toDegrees(position.longitude).toFixed(6));
  bookmark.z = Number(position.height.toFixed(1));
  bookmark.heading = Number(Cesium.Math.toDegrees(camera.heading || -90).toFixed(1));
  bookmark.pitch = Number(Cesium.Math.toDegrees(camera.pitch || 0).toFixed(1));
  bookmark.roll = Number(Cesium.Math.toDegrees(camera.roll || 0).toFixed(1));

  return bookmark;
};

/**
 * 格式化坐标点为可显示的可理解格式（如：经度x:123.345345、纬度y:31.324324、高度z:123.1）。
 * @param {Cesium.Cartesian3} position
 * */
latlng.formatPositon = function (position) {
  var carto = Cesium.Cartographic.fromCartesian(position);
  var result = {};
  result.y = Number(Cesium.Math.toDegrees(carto.latitude).toFixed(6));
  result.x = Number(Cesium.Math.toDegrees(carto.longitude).toFixed(6));
  result.z = Number(carto.height.toFixed(1));
  return result;
};

//笛卡尔转经纬度/弧度
latlng.Cartesian3To = function (cartesian3, viewer) {
  if (cartesian3) {
    if (viewer) {
      var ellipsoid = viewer.scene.globe.ellipsoid;
      var cartographic;
      //转弧度
      cartographic = ellipsoid.cartesianToCartographic(cartesian3);
    } else {
      cartographic = Cesium.Cartographic.fromCartesian(cartesian3);
    }
    //转经纬度
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
    var lng = Cesium.Math.toDegrees(cartographic.longitude);
    var height = cartographic.height;
    return {
      cartesian3: cartesian3,
      cartographic: cartographic,
      latlng: {
        lat: lat,
        lng: lng,
        height: height
      }
    };
  }
};
//绕点 环绕飞行
latlng.windingPoint = {
  isStart: false,
  viewer: null,
  start: function (viewer, point) {
    if (!point) point = getCenter(viewer);

    this.viewer = viewer;
    this.position = Cesium.Cartesian3.fromDegrees(point.x, point.y, point.z);

    this.distance = point.distance || Cesium.Cartesian3.distance(this.position, viewer.camera.positionWC); // 给定相机距离点多少距离飞行
    this.angle = 360 / (point.time || 60); //time：给定飞行一周所需时间(单位 秒)

    this.time = viewer.clock.currentTime.clone();
    this.heading = viewer.camera.heading; // 相机的当前heading
    this.pitch = viewer.camera.pitch;

    this.viewer.clock.onTick.addEventListener(this.clock_onTickHandler, this);
    this.isStart = true;
  },
  clock_onTickHandler: function (e) {
    var delTime = Cesium.JulianDate.secondsDifference(this.viewer.clock.currentTime, this.time); // 当前已经过去的时间，单位 秒
    var heading = Cesium.Math.toRadians(delTime * this.angle) + this.heading;

    this.viewer.scene.camera.setView({
      destination: this.position, // 点的坐标
      orientation: {
        heading: heading,
        pitch: this.pitch
      }
    });
    this.viewer.scene.camera.moveBackward(this.distance);
  },
  stop: function () {
    if (!this.isStart) return;

    if (this.viewer) this.viewer.clock.onTick.removeEventListener(this.clock_onTickHandler, this);
    this.isStart = false;
  }
};

//固定点 向四周旋转
latlng.aroundPoint = {
  isStart: false,
  viewer: null,
  start: function (viewer, point) {
    if (!point) point = getCenter(viewer);

    this.viewer = viewer;
    this.position = Cesium.Cartesian3.fromDegrees(point.x, point.y, point.z);

    this.angle = 360 / (point.time || 60); //time：给定飞行一周所需时间(单位 秒)

    this.time = viewer.clock.currentTime.clone();
    this.heading = viewer.camera.heading; // 相机的当前heading
    this.pitch = viewer.camera.pitch;

    this.viewer.clock.onTick.addEventListener(this.clock_onTickHandler, this);
    this.isStart = true;
  },
  clock_onTickHandler: function (e) {
    // 当前已经过去的时间，单位s
    var delTime = Cesium.JulianDate.secondsDifference(this.viewer.clock.currentTime, this.time);
    var heading = Cesium.Math.toRadians(delTime * this.angle) + this.heading;
    viewer.scene.camera.setView({
      orientation: {
        heading: heading,
        pitch: this.pitch
      }
    });
  },
  stop: function () {
    if (!this.isStart) return;

    if (this.viewer) this.viewer.clock.onTick.removeEventListener(this.clock_onTickHandler, this);
    this.isStart = false;
  }
};

/**
 * 可视域分析。
 *
 * @author Helsing
 * @date 2020/08/28
 * @alias viewshed
 * @class
 * @param {Cesium.Viewer} viewer Cesium三维视窗。
 * @param {Object} options 选项。
 * @param {Cesium.Cartesian3} options.viewPosition 观测点位置。
 * @param {Cesium.Cartesian3} options.viewPositionEnd 最远观测点位置（如果设置了观测距离，这个属性可以不设置）。
 * @param {Number} options.viewDistance 观测距离（单位`米`，默认值100）。
 * @param {Number} options.viewHeading 航向角（单位`度`，默认值0）。
 * @param {Number} options.viewPitch 俯仰角（单位`度`，默认值0）。
 * @param {Number} options.horizontalViewAngle 可视域水平夹角（单位`度`，默认值90）。
 * @param {Number} options.verticalViewAngle 可视域垂直夹角（单位`度`，默认值60）。
 * @param {Cesium.Color} options.visibleAreaColor 可视区域颜色（默认值`绿色`）。
 * @param {Cesium.Color} options.invisibleAreaColor 不可视区域颜色（默认值`红色`）。
 * @param {Boolean} options.enabled 阴影贴图是否可用。
 * @param {Boolean} options.softShadows 是否启用柔和阴影。
 * @param {Boolean} options.size 每个阴影贴图的大小。
 */

class viewshed extends analyser {
  constructor(viewer, options) {
    super(viewer);
    this.viewer = viewer;
    this.viewPosition = options.viewPosition;
    this.viewPositionEnd = options.viewPositionEnd;
    this.viewDistance = this.viewPositionEnd ? Cesium.Cartesian3.distance(this.viewPosition, this.viewPositionEnd) : options.viewDistance || 100.0;
    this.viewHeading = this.viewPositionEnd ? getHeading(this.viewPosition, this.viewPositionEnd) : options.viewHeading || 0.0;
    this.viewPitch = this.viewPositionEnd ? getPitch(this.viewPosition, this.viewPositionEnd) : options.viewPitch || 0.0;
    this.horizontalViewAngle = options.horizontalViewAngle || 90.0;
    this.verticalViewAngle = options.verticalViewAngle || 60.0;
    this.visibleAreaColor = options.visibleAreaColor || Cesium.Color.GREEN;
    this.invisibleAreaColor = options.invisibleAreaColor || Cesium.Color.RED;
    this.enabled = typeof options.enabled === 'boolean' ? options.enabled : true;
    this.softShadows = typeof options.softShadows === 'boolean' ? options.softShadows : true;
    this.size = options.size || 2048;

    this.options = options;
    this.id = Cesium.createGuid();
    this._resultTip = this.viewer.entities.add({
      id: this.id,
      label: {
        fillColor: Cesium.Color.YELLOW,
        showBackground: true,
        font: '14px monospace',
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -10)
      }
    });
    this.posArray = [];
    this._markers = [];
    this.state = this.BEYONANALYSER_STATE.PREPARE;

    this.action();
  }

  action() {
    let _self = this;
    var ellipsoid = this.viewer.scene.globe.ellipsoid;
    _self.handler.setInputAction(function (movement) {
      var cartesian = latlng.getCurrentMousePosition(_self.viewer.scene, movement.position);

      if (_self._markers.length == 0) {
        var temp1 = Cesium.Cartographic.fromCartesian(cartesian);
        var h1;
        if (_self.options.qdOffset) {
          h1 = temp1.height + _self.options.qdOffset;
        } else {
          h1 = temp1.height + 1;
        }
        var cartographictemp = Cesium.Cartographic.fromDegrees((temp1.longitude / Math.PI) * 180, (temp1.latitude / Math.PI) * 180, h1);
        cartesian = ellipsoid.cartographicToCartesian(cartographictemp);
      } else if (_self._markers.length == 1) {
        var temp1 = Cesium.Cartographic.fromCartesian(cartesian);
        var h1;
        if (_self.options.zdOffset) {
          h1 = temp1.height + _self.options.qdOffset;
        } else {
          h1 = temp1.height + 1;
        }
        var cartographictemp = Cesium.Cartographic.fromDegrees((temp1.longitude / Math.PI) * 180, (temp1.latitude / Math.PI) * 180, h1);
        cartesian = ellipsoid.cartographicToCartesian(cartographictemp);
      }

      if (!cartesian) {
        return;
      }

      _self.posArray.push(cartesian);
      if (_self._markers.length == 0) {
        var startSphere = _self.viewer.entities.add({
          position: cartesian,
          ellipsoid: {
            radii: new Cesium.Cartesian3(1.0, 1.0, 1.0),
            material: Cesium.Color.BLUE
          },
          label: {
            text: '视线起点',
            fillColor: Cesium.Color.YELLOW,
            pixelOffset: {
              x: 0,
              y: -20
            },
            scale: 0.5
          }
        });
        _self._markers.push(startSphere);
        _self.state = _self.BEYONANALYSER_STATE.OPERATING;
      } else if (_self._markers.length == 1) {
        var redSphere = _self.viewer.entities.add({
          position: cartesian,
          ellipsoid: {
            radii: new Cesium.Cartesian3(1.0, 1.0, 1.0),
            material: Cesium.Color.RED
          },
          label: {
            text: '视线终点',
            fillColor: Cesium.Color.YELLOW,
            pixelOffset: {
              x: 0,
              y: -20
            },
            scale: 0.5
          }
        });
        _self._markers.push(redSphere);

        _self.viewPosition = _self.posArray[0];
        _self.viewPositionEnd = cartesian;
        _self.viewDistance = _self.viewPositionEnd ? Cesium.Cartesian3.distance(_self.viewPosition, _self.viewPositionEnd) : _self.options.viewDistance || 100.0;
        _self.viewHeading = _self.viewPositionEnd ? getHeading(_self.viewPosition, _self.viewPositionEnd) : _self.options.viewHeading || 0.0;
        _self.viewPitch = _self.viewPositionEnd ? getPitch(_self.viewPosition, _self.viewPositionEnd) : _self.options.viewPitch || 0.0;

        _self.state = _self.BEYONANALYSER_STATE.END;
        _self.handler.destroy();
        _self.handler = null;

        _self.remove();
        _self.update();
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    //移动
    var info;
    _self.handler.setInputAction(function (movement) {
      var cartesian = _self.viewer.scene.pickPosition(movement.endPosition);
      if (_self.state === _self.BEYONANALYSER_STATE.PREPARE) {
        info = '点击设定起点';
        _self.showTip(_self._resultTip, true, cartesian, info);
      } else if (_self.state === _self.BEYONANALYSER_STATE.OPERATING) {
        info = '点击设定终点';
        _self.showTip(_self._resultTip, true, cartesian, info);
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  remove() {
    if (this._markers.length == 0) {
      return false;
    }

    for (let index = 0; index < this._markers.length; index++) {
      var element = this._markers[index];
      this.viewer.entities.remove(element);
    }
    this._markers.length = 0;

    this.viewer.entities.remove(this._resultTip);
    this._resultTip = undefined;
  }

  add() {
    this.createLightCamera();
    this.createShadowMap();
    this.createPostStage();
    this.drawFrustumOutline();
    this.drawSketch();
  }

  update() {
    this.clear();
    this.add();
  }

  clear() {
    if (this.sketch) {
      this.viewer.entities.removeById(this.sketch.id);
      this.sketch = null;
    }
    if (this.frustumOutline) {
      this.frustumOutline.destroy();
      this.frustumOutline = null;
    }
    if (this.postStage) {
      this.viewer.scene.postProcessStages.remove(this.postStage);
      this.postStage = null;
    }
  }

  //创建相机
  createLightCamera() {
    this.lightCamera = new Cesium.Camera(this.viewer.scene);
    this.lightCamera.position = this.viewPosition;
    // if (this.viewPositionEnd) {
    //     let direction = Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(this.viewPositionEnd, this.viewPosition, new Cesium.Cartesian3()), new Cesium.Cartesian3());
    //     this.lightCamera.direction = direction; // direction是相机面向的方向
    // }
    this.lightCamera.frustum.near = this.viewDistance * 0.001;
    this.lightCamera.frustum.far = this.viewDistance;
    const hr = Cesium.Math.toRadians(this.horizontalViewAngle);
    const vr = Cesium.Math.toRadians(this.verticalViewAngle);
    const aspectRatio = (this.viewDistance * Math.tan(hr / 2) * 2) / (this.viewDistance * Math.tan(vr / 2) * 2);
    this.lightCamera.frustum.aspectRatio = aspectRatio;
    if (hr > vr) {
      this.lightCamera.frustum.fov = hr;
    } else {
      this.lightCamera.frustum.fov = vr;
    }
    this.lightCamera.setView({
      destination: this.viewPosition,
      orientation: {
        heading: Cesium.Math.toRadians(this.viewHeading || 0),
        pitch: Cesium.Math.toRadians(this.viewPitch || 0),
        roll: 0
      }
    });
  }

  //创建阴影贴图
  createShadowMap() {
    this.shadowMap = new Cesium.ShadowMap({
      context: this.viewer.scene.context,
      lightCamera: this.lightCamera,
      enabled: this.enabled,
      isPointLight: true,
      pointLightRadius: this.viewDistance,
      cascadesEnabled: false,
      size: this.size,
      softShadows: this.softShadows,
      normalOffset: false,
      fromLightSource: false
    });
    this.viewer.scene.shadowMap = this.shadowMap;
  }

  //创建PostStage
  createPostStage() {
    const fs = `
      #define USE_CUBE_MAP_SHADOW true
      uniform sampler2D colorTexture;
      uniform sampler2D depthTexture;
      in vec2 v_textureCoordinates;
      uniform mat4 camera_projection_matrix;
      uniform mat4 camera_view_matrix;
      uniform samplerCube shadowMap_textureCube;
      uniform mat4 shadowMap_matrix;
      uniform vec4 shadowMap_lightPositionEC;
      uniform vec4 shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness;
      uniform vec4 shadowMap_texelSizeDepthBiasAndNormalShadingSmooth;
      uniform float helsing_viewDistance; 
      uniform vec4 helsing_visibleAreaColor;
      uniform vec4 helsing_invisibleAreaColor;
      struct zx_shadowParameters
      {
          vec3 texCoords;
          float depthBias;
          float depth;
          float nDotL;
          vec2 texelStepSize;
          float normalShadingSmooth;
          float darkness;
      };
      float czm_shadowVisibility(samplerCube shadowMap, zx_shadowParameters shadowParameters)
      {
          float depthBias = shadowParameters.depthBias;
          float depth = shadowParameters.depth;
          float nDotL = shadowParameters.nDotL;
          float normalShadingSmooth = shadowParameters.normalShadingSmooth;
          float darkness = shadowParameters.darkness;
          vec3 uvw = shadowParameters.texCoords;
          depth -= depthBias;
          float visibility = czm_shadowDepthCompare(shadowMap, uvw, depth);
          return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
      }
      vec4 getPositionEC(){
          return czm_windowToEyeCoordinates(gl_FragCoord);
      }
      vec3 getNormalEC(){
          return vec3(1.);
      }
      vec4 toEye( vec2 uv, float depth){
          vec2 xy=vec2((uv.x*2.-1.),(uv.y*2.-1.));
          vec4 posInCamera=czm_inverseProjection*vec4(xy,depth,1.);
          posInCamera=posInCamera/posInCamera.w;
          return posInCamera;
      }
      vec3 pointProjectOnPlane( vec3 planeNormal, vec3 planeOrigin, vec3 point){
          vec3 v01=point-planeOrigin;
          float d=dot(planeNormal,v01);
          return(point-planeNormal*d);
      }
      float getDepth( vec4 depth){
          float z_window=czm_unpackDepth(depth);
          z_window=czm_reverseLogDepth(z_window);
          float n_range=czm_depthRange.near;
          float f_range=czm_depthRange.far;
          return(2.*z_window-n_range-f_range)/(f_range-n_range);
      }
      float shadow( vec4 positionEC){
          vec3 normalEC=getNormalEC();
          zx_shadowParameters shadowParameters;
          shadowParameters.texelStepSize=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.xy;
          shadowParameters.depthBias=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.z;
          shadowParameters.normalShadingSmooth=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.w;
          shadowParameters.darkness=shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness.w;
          vec3 directionEC=positionEC.xyz-shadowMap_lightPositionEC.xyz;
          float distance=length(directionEC);
          directionEC=normalize(directionEC);
          float radius=shadowMap_lightPositionEC.w;
          if(distance>radius)
          {
              return 2.0;
          }
          vec3 directionWC=czm_inverseViewRotation*directionEC;
          shadowParameters.depth=distance/radius-0.0003;
          shadowParameters.nDotL=clamp(dot(normalEC,-directionEC),0.,1.);
          shadowParameters.texCoords=directionWC;
          float visibility=czm_shadowVisibility(shadowMap_textureCube,shadowParameters);
          return visibility;
      }
      bool visible( vec4 result)
      {
          result.x/=result.w;
          result.y/=result.w;
          result.z/=result.w;
          return result.x>=-1.&&result.x<=1.
          &&result.y>=-1.&&result.y<=1.
          &&result.z>=-1.&&result.z<=1.;
      }
      void main(){
          // 釉色 = 结构二维(颜色纹理, 纹理坐标)
          out_FragColor = texture(colorTexture, v_textureCoordinates);
          // 深度 = 获取深度(结构二维(深度纹理, 纹理坐标))
          float depth = getDepth(texture(depthTexture, v_textureCoordinates));
          // 视角 = (纹理坐标, 深度)
          vec4 viewPos = toEye(v_textureCoordinates, depth);
          // 世界坐标
          vec4 wordPos = czm_inverseView * viewPos;
          // 虚拟相机中坐标
          vec4 vcPos = camera_view_matrix * wordPos;
          float near = .001 * helsing_viewDistance;
          float dis = length(vcPos.xyz);
          if(dis > near && dis < helsing_viewDistance){
              // 透视投影
              vec4 posInEye = camera_projection_matrix * vcPos;
              // 可视区颜色
              // vec4 helsing_visibleAreaColor=vec4(0.,1.,0.,.5);
              // vec4 helsing_invisibleAreaColor=vec4(1.,0.,0.,.5);
              if(visible(posInEye)){
                  float vis = shadow(viewPos);
                  if(vis > 0.3){
                      out_FragColor = mix(out_FragColor,helsing_visibleAreaColor,.5);
                  } else{
                      out_FragColor = mix(out_FragColor,helsing_invisibleAreaColor,.5);
                  }
              }
          }
      }`;
    const postStage = new Cesium.PostProcessStage({
      fragmentShader: fs,
      uniforms: {
        shadowMap_textureCube: () => {
          this.shadowMap.update(Reflect.get(this.viewer.scene, '_frameState'));
          return Reflect.get(this.shadowMap, '_shadowMapTexture');
        },
        shadowMap_matrix: () => {
          this.shadowMap.update(Reflect.get(this.viewer.scene, '_frameState'));
          return Reflect.get(this.shadowMap, '_shadowMapMatrix');
        },
        shadowMap_lightPositionEC: () => {
          this.shadowMap.update(Reflect.get(this.viewer.scene, '_frameState'));
          return Reflect.get(this.shadowMap, '_lightPositionEC');
        },
        shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness: () => {
          this.shadowMap.update(Reflect.get(this.viewer.scene, '_frameState'));
          const bias = this.shadowMap._pointBias;
          return Cesium.Cartesian4.fromElements(bias.normalOffsetScale, this.shadowMap._distance, this.shadowMap.maximumDistance, 0.0, new Cesium.Cartesian4());
        },
        shadowMap_texelSizeDepthBiasAndNormalShadingSmooth: () => {
          this.shadowMap.update(Reflect.get(this.viewer.scene, '_frameState'));
          const bias = this.shadowMap._pointBias;
          const scratchTexelStepSize = new Cesium.Cartesian2();
          const texelStepSize = scratchTexelStepSize;
          texelStepSize.x = 1.0 / this.shadowMap._textureSize.x;
          texelStepSize.y = 1.0 / this.shadowMap._textureSize.y;

          return Cesium.Cartesian4.fromElements(texelStepSize.x, texelStepSize.y, bias.depthBias, bias.normalShadingSmooth, new Cesium.Cartesian4());
        },
        camera_projection_matrix: this.lightCamera.frustum.projectionMatrix,
        camera_view_matrix: this.lightCamera.viewMatrix,
        helsing_viewDistance: () => {
          return this.viewDistance;
        },
        helsing_visibleAreaColor: this.visibleAreaColor,
        helsing_invisibleAreaColor: this.invisibleAreaColor
      }
    });
    this.postStage = this.viewer.scene.postProcessStages.add(postStage);
  }

  //创建视锥线
  drawFrustumOutline() {
    const scratchRight = new Cesium.Cartesian3();
    const scratchRotation = new Cesium.Matrix3();
    const scratchOrientation = new Cesium.Quaternion();
    const position = this.lightCamera.positionWC;
    const direction = this.lightCamera.directionWC;
    const up = this.lightCamera.upWC;
    let right = this.lightCamera.rightWC;
    right = Cesium.Cartesian3.negate(right, scratchRight);
    let rotation = scratchRotation;
    Cesium.Matrix3.setColumn(rotation, 0, right, rotation);
    Cesium.Matrix3.setColumn(rotation, 1, up, rotation);
    Cesium.Matrix3.setColumn(rotation, 2, direction, rotation);
    let orientation = Cesium.Quaternion.fromRotationMatrix(rotation, scratchOrientation);

    let instance = new Cesium.GeometryInstance({
      geometry: new Cesium.FrustumOutlineGeometry({
        frustum: this.lightCamera.frustum,
        origin: this.viewPosition,
        orientation: orientation
      }),
      id: Math.random().toString(36).substr(2),
      attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(
          Cesium.Color.YELLOWGREEN //new Cesium.Color(0.0, 1.0, 0.0, 1.0)
        ),
        show: new Cesium.ShowGeometryInstanceAttribute(true)
      }
    });

    this.frustumOutline = this.viewer.scene.primitives.add(
      new Cesium.Primitive({
        geometryInstances: [instance],
        appearance: new Cesium.PerInstanceColorAppearance({
          flat: true,
          translucent: false
        })
      })
    );
  }

  //创建视网
  drawSketch() {
    this.sketch = this.viewer.entities.add({
      name: 'sketch',
      position: this.viewPosition,
      orientation: Cesium.Transforms.headingPitchRollQuaternion(this.viewPosition, Cesium.HeadingPitchRoll.fromDegrees(this.viewHeading - this.horizontalViewAngle, this.viewPitch, 0.0)),
      ellipsoid: {
        radii: new Cesium.Cartesian3(this.viewDistance, this.viewDistance, this.viewDistance),
        // innerRadii: new Cesium.Cartesian3(2.0, 2.0, 2.0),
        minimumClock: Cesium.Math.toRadians(-this.horizontalViewAngle / 2),
        maximumClock: Cesium.Math.toRadians(this.horizontalViewAngle / 2),
        minimumCone: Cesium.Math.toRadians(this.verticalViewAngle + 7.75),
        maximumCone: Cesium.Math.toRadians(180 - this.verticalViewAngle - 7.75),
        fill: false,
        outline: true,
        subdivisions: 256,
        stackPartitions: 64,
        slicePartitions: 64,
        outlineColor: Cesium.Color.YELLOWGREEN
      }
    });
  }
}

//获取偏航角
function getHeading(fromPosition, toPosition) {
  let finalPosition = new Cesium.Cartesian3();
  let matrix4 = Cesium.Transforms.eastNorthUpToFixedFrame(fromPosition);
  Cesium.Matrix4.inverse(matrix4, matrix4);
  Cesium.Matrix4.multiplyByPoint(matrix4, toPosition, finalPosition);
  Cesium.Cartesian3.normalize(finalPosition, finalPosition);
  return Cesium.Math.toDegrees(Math.atan2(finalPosition.x, finalPosition.y));
}

//获取俯仰角
function getPitch(fromPosition, toPosition) {
  let finalPosition = new Cesium.Cartesian3();
  let matrix4 = Cesium.Transforms.eastNorthUpToFixedFrame(fromPosition);
  Cesium.Matrix4.inverse(matrix4, matrix4);
  Cesium.Matrix4.multiplyByPoint(matrix4, toPosition, finalPosition);
  Cesium.Cartesian3.normalize(finalPosition, finalPosition);
  return Cesium.Math.toDegrees(Math.asin(finalPosition.z));
}
