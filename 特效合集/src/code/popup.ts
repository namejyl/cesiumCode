const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
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
    }
  });

  //弹窗
  var popup = new Popup({
    viewer: viewer,
    className: 'bx-popup-ctn2'
  });

  popup.add({
    geometry: Cesium.Cartesian3.fromDegrees(-75.166493, 39.9060534),
    content: {
      header: '数据点',
      content: `
      <div><span>监控名称：</span><span>中国银行(银河三路店)</span></div>
      <div><span>监控编号：</span><span>${parseInt(Math.random() * 100)}</span></div>
      <div><span>监控类型：</span><span>固定枪机</span></div>
      <div><span>监控状态：</span><span>在线</span></div>
          `
    },
    isclose: true
  });

  var p2 = popup.add({
    geometry: Cesium.Cartesian3.fromDegrees(-100, 30),
    content: {
      header: '数据点2',
      content: `
      <div><span>监控名称：</span><span>中国银行(银河2路店)</span></div>
      <div><span>监控编号：</span><span>${parseInt(Math.random() * 100)}</span></div>
      <div><span>监控类型：</span><span>固定枪机</span></div>
      <div><span>监控状态：</span><span>在线</span></div>
          `
    },
    isclose: true
  });

  //弹窗
  var popup2 = new Popup({
    viewer: viewer,
    className: 'bx-popup-ctn2',
    html: function (header, content) {
      return `
    <div class="divpoint-wrap">
    <div class="divpoint-center">
    <div class="bx-popup-content-ctn" >
    <div class="bx-popup-content" >
    ${content}
    </div>
    </div>
    </div>
    </div>
    <div class="directional"></div>
    `;
    }
  });
  var p3 = popup2.add({
    geometry: Cesium.Cartesian3.fromDegrees(-80, 0),
    content: {
      content: `
      <div><span>监控名称：</span><span>中国银行(银河三路店)</span></div>
      <div><span>监控编号：</span><span>${parseInt(Math.random() * 100)}</span></div>
      <div><span>监控类型：</span><span>固定枪机</span></div>
      <div><span>监控状态：</span><span>在线</span></div>
          `
    },
    isclose: false
  });
};
/*
 * @class {Popup} 地图弹窗
 * @param {viewer} viewer 三维视图
 * @param {className} string 样式名
 * */

class Popup {
  constructor(option) {
    this.options = option;
    this.viewer = option.viewer; //弹窗创建的viewer
    this.className = option.className;
    this.html = option.html || null;
    this.id = 0;
    this.ctnList = {};
  }
  add(conf) {
    var _this = this;
    var geometry = conf.geometry; //弹窗挂载的位置
    var id = 'popup_' + (((1 + Math.random()) * 0x10000) | 0).toString(16) + _this.id++;
    var ctn = document.createElement('div');
    ctn.className = 'bx-popup-ctn' + (this.className ? ' ' + this.className : ' bx-popup-ctn1');
    ctn.id = id;
    document.getElementById(_this.viewer.container.id).appendChild(ctn);
    //测试弹窗内容
    var testConfig = conf.content;
    ctn.innerHTML = _this.createHtml(testConfig.header, testConfig.content, conf.isclose);
    _this.ctnList[id] = [geometry, ctn];
    _this.render();
    // ctn.style.transform = 'translateY(-' + ctn.offsetHeight + 'px)';
    // if (this.className == "bx-popup-ctn2")
    // ctn.style.marginLeft = '-' + (ctn.offsetWidth / 2) + 'px';
    if (!_this.eventListener) {
      _this.eventListener = function (clock) {
        _this.render();
      };
      _this.viewer.clock.onTick.addEventListener(_this.eventListener);
    }

    if (conf.isclose === false) {
    } else {
      if (ctn.getElementsByClassName('bx-popup-close') && ctn.getElementsByClassName('bx-popup-close').length > 0) {
        ctn.getElementsByClassName('bx-popup-close')[0].onclick = function () {
          _this.close(ctn);
        };
      }
    }
    return ctn;
  }
  render() {
    var _this = this;
    for (var c in _this.ctnList) {
      // var s1 = _this.viewer.scene.cartesianToCanvasCoordinates(_this.ctnList[c][0]);
      var position = Cesium.SceneTransforms.wgs84ToWindowCoordinates(_this.viewer.scene, _this.ctnList[c][0]);
      // console.log(s1.toString() + " ---- " + position.toString());
      if (position && position.x && position.y) {
        if (Math.abs(position.x) > window.innerWidth * 2 || Math.abs(position.y) > window.innerHeight * 2) {
          _this.ctnList[c][1].style.display = 'none';
        } else {
          _this.ctnList[c][1].style.display = '';
          _this.ctnList[c][1].style.left = position.x + 'px';
          _this.ctnList[c][1].style.top = position.y + 'px';
        }
      }
    }
  }
  createHtml(header, content, isclose) {
    if (this.html) {
      return this.html(header, content);
    } else {
      var html = `
            ${isclose === false ? '' : '<div class="bx-popup-close"><span class="iconfont_DEU icon-guanbi">×</span></div>'}
            <div class="divpoint-wrap">
            <div class="divpoint-border">
            <div class="divpoint-center">
            <div class="bx-popup-header-ctn">
            ${header}
            </div>
            <div class="bx-popup-content-ctn" >
            <div class="bx-popup-content" >
            ${content}
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="directional"></div>
            `;
      return html;
    }
  }
  close(e) {
    e.remove();
    delete this.ctnList[e.id];
    if (Object.keys(this.ctnList).length == 0) {
      this.viewer.clock.onTick.removeEventListener(this.eventListener);
      this.eventListener = null;
    }
  }
  closeAll(e) {
    for (var o in this.ctnList) {
      this.ctnList[o][1].remove();
    }
    this.ctnList = {};
    this.viewer.clock.onTick.removeEventListener(this.eventListener);
    this.eventListener = null;
  }
}
