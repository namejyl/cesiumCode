<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <div class="hade">瞰天科技</div>
    <div class="lefts" v-if="indexData.data.length > 0">
      <div class="title">
        <div class="icon"></div>
        <span style="position: absolute; left: 20px; color: #ffffff; font-weight: bold; line-height: 28px">{{ indexData.namse }}</span>
      </div>
      <el-scrollbar class="center">
        <div class="centerlist" v-for="(item, index) in indexData.data" :key="index" @click="item2ClickFn(item)">
          <div class="centerlistimg" :style="{ background: 'url(' + item.imageUrl + ') center center no-repeat', backgroundSize: '165px 165px' }"></div>
          <div :class="item.show2 ? 'centerlisttext' : 'centerlisttextShow'">{{ item.value }}</div>
        </div>
      </el-scrollbar>
    </div>
    <el-container>
      <el-main>
        <Map></Map>
      </el-main>
    </el-container>
    <div class="bottom">
      <div class="list" :class="item.show1 ? 'show' : 'hide'" v-for="(item, index) in listData" :key="index" @click="item1ClickFn(item)">{{ item.value }}</div>
    </div>
    <div class="button-1" v-if="indexCode" @click="ShowCodeFn">(显示/隐藏)源码</div>
    <Codemirror v-model:value="code" v-if="ShowCode" :options="cmOptions" border class="Codemirror"></Codemirror>
  </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
// import { Menu as Setting } from '@element-plus/icons-vue';
import Map from './Map.vue';
import CesiumMap from '../../public/code/index.ts';
import 'codemirror/mode/javascript/javascript.js';
import Codemirror from 'codemirror-editor-vue3';
import axios from 'axios';
import type { EditorConfiguration } from 'codemirror';
const indexCode = ref<any>('');
const indexData = reactive<any>({
  data: [],
  namse: ''
});
const getImgUrl = (file: any) => {
  return new URL(`../../public/static/imgs/${file}.png`, import.meta.url).href;
};
const listData = reactive<any>([
  {
    value: '数据加载',
    show1: false,
    children: [
      {
        value: '加载XYZ瓦片服务',
        code: 'AddXyz',
        imageUrl: getImgUrl(1)
      },
      {
        value: '加载3DTileset模型',
        code: 'Add3DTileset',
        imageUrl: getImgUrl(2)
      },
      {
        value: '加载geojson数据',
        code: 'AddGeoJson',
        imageUrl: getImgUrl(3)
      },
      {
        value: '加载json数据',
        code: 'AddJson',
        imageUrl: getImgUrl(4)
      },
      {
        value: '加载kml数据',
        code: 'AddKml',
        imageUrl: getImgUrl(5)
      },
      {
        value: '加载czml数据',
        code: 'AddCzml',
        imageUrl: getImgUrl(6)
      },
      {
        value: '加载单张图片',
        code: 'adddztp',
        imageUrl: getImgUrl(7)
      },
      {
        value: '加载模型',
        code: 'addglb',
        imageUrl: getImgUrl(8)
      },
      {
        value: 'customShader自定义材质',
        code: 'customShaderzdycz',
        imageUrl: getImgUrl(9)
      }
    ]
  },
  {
    value: '场景效果',
    show1: false,
    children: [
      {
        value: '鹰眼图',
        code: 'Eye',
        imageUrl: getImgUrl(10)
      },
      {
        value: '分屏',
        code: 'Split',
        imageUrl: getImgUrl(11)
      },
      {
        value: '反选遮罩',
        code: 'Mask',
        imageUrl: getImgUrl(12)
      },
      {
        value: '地球自转(10秒停止)',
        code: 'Rotate',
        imageUrl: getImgUrl(13)
      },
      {
        value: '昼夜交替',
        code: 'UpdateLighting',
        imageUrl: getImgUrl(14)
      },
      {
        value: '日照阴影模拟效果',
        code: 'SunShadows',
        imageUrl: getImgUrl(15)
      },
      {
        value: '地球透明度',
        code: 'dqtmd',
        imageUrl: getImgUrl(16)
      },
      {
        value: '多彩矩形地球球体',
        code: 'InitColorfulRectEarth',
        imageUrl: getImgUrl(17)
      },
      {
        value: '自定义球体背景',
        code: 'SetBackground',
        imageUrl: getImgUrl(18)
      },
      {
        value: '自定义天空盒',
        code: 'CustomSkyBox',
        imageUrl: getImgUrl(19)
      },
      {
        value: '场景出图',
        code: 'SaveOutImg',
        imageUrl: getImgUrl(20)
      }
    ]
  },
  {
    value: '矢量',
    show1: false,
    children: [
      {
        value: '点',
        code: 'dian',
        imageUrl: getImgUrl(21)
      },
      {
        value: '线',
        code: 'xian',
        imageUrl: getImgUrl(22)
      },
      {
        value: '面',
        code: 'mian',
        imageUrl: getImgUrl(23)
      },
      {
        value: '图标',
        code: 'tubiao',
        imageUrl: getImgUrl(24)
      },
      {
        value: '海量图标',
        code: 'tubiaoAll',
        imageUrl: getImgUrl(25)
      },
      {
        value: 'popup',
        code: 'popup',
        imageUrl: getImgUrl(26)
      },
      {
        value: 'gif',
        code: 'gif',
        imageUrl: getImgUrl(27)
      },
      {
        value: '各种entity',
        code: 'entityAll',
        imageUrl: getImgUrl(28)
      }
    ]
  },
  {
    value: '要素特效',
    show1: false,
    children: [
      {
        value: '旋转实体',
        code: 'RotateEntity',
        imageUrl: getImgUrl(29)
      },
      {
        value: '道路流动线效果',
        code: 'RoadShuttle',
        imageUrl: getImgUrl(30)
      },
      {
        value: '道路闪烁线效果',
        code: 'RoadFlashing',
        imageUrl: getImgUrl(31)
      },
      {
        value: '竖直飞线效果',
        code: 'LineFlowInit',
        imageUrl: getImgUrl(32)
      },
      {
        value: '抛物流动飞线效果',
        code: 'ParabolaFlowInit',
        imageUrl: getImgUrl(33)
      },
      {
        value: '面状要素的立体拉伸效果',
        code: 'SurfaceElementStretching',
        imageUrl: getImgUrl(34)
      },
      {
        value: '六边形扩散效果',
        code: 'HexagonDiffusion',
        imageUrl: getImgUrl(35)
      },
      {
        value: '动态流动水面',
        code: 'FlowingWaterSurface',
        imageUrl: getImgUrl(36)
      },
      {
        value: '加载Polygon绘制墙',
        code: 'DrawWall',
        imageUrl: getImgUrl(37)
      },
      {
        value: '动态立体墙效果',
        code: 'DynamicWall',
        imageUrl: getImgUrl(38)
      },
      {
        value: '动态流动墙体效果',
        code: 'FlowWall',
        imageUrl: getImgUrl(39)
      },
      {
        value: '正多边形扩散墙效果',
        code: 'RegularPolygonDiffusionWall',
        imageUrl: getImgUrl(40)
      },
      {
        value: '立体墙（垂直、水平）渐变泛光效果',
        code: 'GradientFloodWall',
        imageUrl: getImgUrl(41)
      },
      {
        value: '旋转圆',
        code: 'RotateCircle',
        imageUrl: getImgUrl(42)
      },
      {
        value: '扫描圆',
        code: 'ScanningCircle',
        imageUrl: getImgUrl(43)
      },
      {
        value: '波纹圆',
        code: 'WavyCircle',
        imageUrl: getImgUrl(44)
      },
      {
        value: '扩散圆',
        code: 'DiffusionCircle',
        imageUrl: getImgUrl(45)
      },
      {
        value: '消隐圆',
        code: 'BlankingCircle',
        imageUrl: getImgUrl(46)
      },
      {
        value: '模糊圆',
        code: 'FuzzyCircle',
        imageUrl: getImgUrl(47)
      },
      {
        value: '螺旋圆',
        code: 'SpiralCircle',
        imageUrl: getImgUrl(48)
      },
      {
        value: '多彩圆',
        code: 'MulticoloredCircle',
        imageUrl: getImgUrl(49)
      },
      {
        value: '脉冲圆',
        code: 'PulseCircle',
        imageUrl: getImgUrl(50)
      },
      {
        value: '水波纹扩散效果',
        code: 'WaterRippleDiffusion',
        imageUrl: getImgUrl(51)
      },
      {
        value: '线圈发光效果',
        code: 'CoilLuminescence',
        imageUrl: getImgUrl(52)
      },
      {
        value: '雷达线效果',
        code: 'RadarLine',
        imageUrl: getImgUrl(53)
      },
      {
        value: '波纹雷达效果',
        code: 'RippleRadar',
        imageUrl: getImgUrl(54)
      },
      {
        value: '图片雷达效果',
        code: 'PictureRadar',
        imageUrl: getImgUrl(55)
      },
      {
        value: '雷达扫描效果2',
        code: 'RadarScanning',
        imageUrl: getImgUrl(56)
      },
      {
        value: '立体雷达扫描效果',
        code: 'StereoRadarScanning',
        imageUrl: getImgUrl(57)
      },
      {
        value: '轨迹球体效果',
        code: 'TrajectorySphere',
        imageUrl: getImgUrl(58)
      },
      {
        value: '电弧球体效果',
        code: 'ArcSphere',
        imageUrl: getImgUrl(59)
      },
      {
        value: '广告牌效果',
        code: 'Billboard',
        imageUrl: getImgUrl(60)
      },
      {
        value: 'glb模型(键盘控制模型姿态)',
        code: 'AddCesiumglb',
        imageUrl: getImgUrl(61)
      },
      {
        value: 'glb模型(轨迹移动)',
        code: 'TrajectoryMovement',
        imageUrl: getImgUrl(62)
      },
      {
        value: '点聚合',
        code: 'PointClustering',
        imageUrl: getImgUrl(63)
      }
    ]
  },
  {
    value: '空间分析',
    show1: false,
    children: [
      {
        value: '淹没分析',
        code: 'InduationAnalysis',
        imageUrl: getImgUrl(64)
      },
      {
        value: '可视域分析',
        code: 'VisibilityAnalysis',
        imageUrl: getImgUrl(65)
      },
      {
        value: '通视分析',
        code: 'ViewshedAnalysis',
        imageUrl: getImgUrl(66)
      },
      {
        value: '等高线',
        code: 'AddContourLines',
        imageUrl: getImgUrl(67)
      },
      {
        value: '剖面分析',
        code: 'ProfileAnalysis',
        imageUrl: getImgUrl(68)
      },
      {
        value: '地形开挖',
        code: 'Excavation',
        imageUrl: getImgUrl(69)
      },
      {
        value: '地形三角网',
        code: 'GeneratingTriangulation',
        imageUrl: getImgUrl(70)
      },
      {
        value: '热力图',
        code: 'ThermalMap',
        imageUrl: getImgUrl(71)
      },
      {
        value: '立体热力图',
        code: 'ThermalMap_3D',
        imageUrl: getImgUrl(72)
      }
    ]
  },
  {
    value: '特效',
    show1: false,
    children: [
      {
        value: '下雪天效果',
        code: 'SnowEffect',
        imageUrl: getImgUrl(73)
      },
      {
        value: '下雨天效果',
        code: 'RainEffect',
        imageUrl: getImgUrl(74)
      },
      {
        value: '雾天效果',
        code: 'FogEffect',
        imageUrl: getImgUrl(75)
      },
      {
        value: '粒子特效',
        code: 'ParticleEffect',
        imageUrl: getImgUrl(76)
      },
      {
        value: '火焰',
        code: 'huoyan',
        imageUrl: getImgUrl(77)
      },
      {
        value: '水枪',
        code: 'shuiqiang',
        imageUrl: getImgUrl(78)
      },
      {
        value: '爆炸',
        code: 'baozha',
        imageUrl: getImgUrl(79)
      },
      {
        value: '喷雾',
        code: 'penwu',
        imageUrl: getImgUrl(80)
      },
      {
        value: '烟',
        code: 'yan',
        imageUrl: getImgUrl(81)
      },
      {
        value: '体积云',
        code: 'tijiyun',
        imageUrl: getImgUrl(82)
      },
      {
        value: '闪电',
        code: 'shandian',
        imageUrl: getImgUrl(83)
      },
      {
        value: '核爆1',
        code: 'MushroomCloudV1'
        // imageUrl: getImgUrl()
      },
      {
        value: '核爆2',
        code: 'MushroomCloudV2'
        // imageUrl: getImgUrl()
      },
      {
        value: '核爆3',
        code: 'MushroomCloudV3'
        // imageUrl: getImgUrl()
      },
      {
        value: '水面1',
        code: 'Underwater1'
        // imageUrl: getImgUrl()
      },
      {
        value: '水面2',
        code: 'Underwater2'
        // imageUrl: getImgUrl()
      },
      {
        value: '水面3',
        code: 'Underwater3'
        // imageUrl: getImgUrl()
      },
      {
        value: '弹坑1',
        code: 'crater1'
        // imageUrl: getImgUrl()
      },
      {
        value: '弹坑2',
        code: 'crater2'
        // imageUrl: getImgUrl()
      }
    ]
  },
  {
    value: 'Three（无）',
    show1: false,
    children: [
      // {
      //   value: '辅助线'
      // },
      // {
      //   value: '光线'
      // },
      // {
      //   value: '相机控件'
      // },
      // {
      //   value: '动画'
      // },
      // {
      //   value: '全屏'
      // },
      // {
      //   value: '帧率'
      // },
      // {
      //   value: '阵列模型'
      // },
      // {
      //   value: '几何体'
      // },
      // {
      //   value: '点、线'
      // },
      // {
      //   value: '网格'
      // },
      // {
      //   value: '索引'
      // },
      // {
      //   value: '旋转、缩放、平移几何体'
      // },
      // {
      //   value: '自带几何体顶点'
      // },
      // {
      //   value: '顶点颜色'
      // }
    ]
  },
  {
    value: 'Echarts',
    show1: false,
    children: [
      {
        value: 'Echarts-饼图',
        code: 'PieEcharts',
        imageUrl: getImgUrl(84)
      },
      {
        value: 'Echarts-散点图',
        code: 'ScatterEcharts',
        imageUrl: getImgUrl(85)
      },
      {
        value: 'Echarts-柱状图',
        code: 'BarEcharts',
        imageUrl: getImgUrl(86)
      }
    ]
  }
]);

const item1ClickFn = async (item: any) => {
  for (let i in listData) {
    listData[i].show1 = false;
  }
  item.show1 = true;
  indexData.data = item.children;
  indexData.namse = item.value;
};
const item2ClickFn = async (item: any) => {
  for (let i in indexData.data) {
    indexData.data[i].show2 = false;
  }
  item.show2 = true;
  console.log(item);
  SettingCesiumFn(item.code);
};
const SettingCesiumFn = async (code: any) => {
  window.Viewer.entities.removeAll();
  window.Viewer.camera.flyHome(0);
  indexCode.value = code;
  ShowCode.value = false;
  setTimeout(() => {
    CesiumMap[code]();
  }, 1000);
};
const ShowCode = ref(false);
const code = ref(``);
const ShowCodeFn = async () => {
  axios.get('/code/' + indexCode.value + '.ts').then(res => {
    code.value = res.data.split('//# ')[0];
    ShowCode.value = !ShowCode.value;
  });
};
const cmOptions: EditorConfiguration = {
  mode: 'text/javascript',
  textAlign: 'right'
};
</script>

<style scoped>
.title {
  height: 30px;
  width: 360px;
  background-image: url('../assets/images/plotting/panel-header1-DVTX7Lb2.png');
  background-repeat: no-repeat;
  background-size: 360px 100%;
  font-family: YouShe, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-shadow: 0 2px 4px rgba(2, 7, 17, 0.8);
  position: relative;
}
.center {
  height: calc(100% - 60px);
  grid-template-columns: auto auto;
  padding: 10px 0px;
}
.centerlist {
  height: 170px;
  width: 170px;
  background: url('../assets/images/plotting/gk_bg-BG661DeI.png') no-repeat;
  background-size: 170px 170px;
  margin: 3px;
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.centerlistimg {
  height: 170px;
  width: 170px;
  background: url('../assets/images/plotting/2.1.1、单张图片.png') no-repeat;
  background-size: 165px 165px;
  margin: 3px;
}
.centerlisttextShow {
  position: absolute;
  bottom: 0;
  min-height: 20px;
  width: 100%;
  text-align: center;
  background: rgba(76, 203, 244, 0.5);
  color: #ffffff;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
}
.centerlisttext {
  position: absolute;
  bottom: 0;
  min-height: 20px;
  width: 100%;
  text-align: center;
  background: rgba(76, 203, 244, 0.5);
  color: #00ff72;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
}
.lefts {
  position: fixed;
  left: 20px;
  height: 80%;
  background: linear-gradient(to right, rgba(37, 54, 54, 0.4) 0%, rgba(37, 54, 54, 0.2) 100%);
  width: 360px;
  margin-top: 70px;
  z-index: 9999999;
}
.title {
}
.bottom {
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translate(-50%);
  height: 40px;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
}
.show {
  height: 40px;
  width: 151px;
  font-family: PangMenZhengDao, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  position: relative;
  cursor: pointer;
  background-image: url('../assets/images/plotting/show.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
}
.hide {
  height: 40px;
  width: 151px;
  font-family: PangMenZhengDao, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  position: relative;
  cursor: pointer;
  background-image: url('../assets/images/plotting/hide.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
}
.hade {
  position: fixed;
  background: url('../assets/images/plotting/header-CE2FZDIm.png') no-repeat;
  top: 0;
  width: 100%;
  height: 70px;
  background-size: 100% 70px;
  z-index: 99999;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 30px;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.Codemirror {
  width: 600px !important;
  height: 100% !important;
  right: 0;
  position: fixed;
  z-index: 99999;
}
.button-1 {
  right: 0px;
  bottom: 0px;
  position: fixed;
  z-index: 999999;
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-1:hover,
.button-1:focus {
  background-color: #f082ac;
}
:deep(.CodeMirror-line) {
  display: flex !important;
}
</style>
