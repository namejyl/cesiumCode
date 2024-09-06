const Cesium = window.Cesium;
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
let gltfScene = null;

// 用 WGS84 标定边界，以帮助同步渲染器
let minWGS84 = [115.23, 39.55];
let maxWGS84 = [116.23, 41.55];

let objects3D = []; // 可以是任何 Three.js 对象网格

let three = {
  renderer: null,
  camera: null,
  scene: null
};

let cesiumContainer;
let viewer = null;
export default () => {
  viewer = window.Viewer;
  cesiumContainer = document.getElementById('cesiumContainer');
  initCesium(); // 初始化 Cesium 渲染器
  initThree(); // 初始化 Three.js 渲染器
  createMesh(); // 使用 Cesium 笛卡尔坐标系初始化 Three.js 对象网格
  loop(); // 循环渲染器
};

function initCesium() {
  let center = Cesium.Cartesian3.fromDegrees((minWGS84[0] + maxWGS84[0]) / 2, (minWGS84[1] + maxWGS84[1]) / 2, 0);

  let cameraViewEntity = viewer.entities.add({
    name: 'cameraViewEntity',
    position: center,
    point: {
      pixelSize: 1,
      color: Cesium.Color.WHITE.withAlpha(0)
    }
  });

  viewer.flyTo(cameraViewEntity, {
    offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(0), Cesium.Math.toRadians(0), 5000),
    duration: 2
  });
}

function initThree() {
  let fov = 45;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let aspect = width / height;
  let near = 0.1;
  let far = 10 * 1000 * 1000; // 需要很远才能支持 Cesium 的世界规模渲染

  three.scene = new THREE.Scene();
  three.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  three.renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
    alpha: true
  });
  three.renderer.setSize(width, height);

  // 添加环境光
  let ambientLight = new THREE.AmbientLight(0xffffff, 1);
  three.scene.add(ambientLight);

  cesiumContainer.appendChild(three.renderer.domElement);
}

function renderCesium() {
  viewer.render();
}

function renderThree() {
  // 设置相机跟cesium保持一致
  three.camera.fov = Cesium.Math.toDegrees(viewer.camera.frustum.fovy);
  // 声明一个将cesium框架的cartesian3转换为three.js的vector3（笛卡尔坐标转换为三维向量）
  let cartToVec = cart => {
    return new THREE.Vector3(cart.x, cart.y, cart.z);
  };
  // 将3D的物体通过经纬度转换成对应的位置
  objects3D.forEach((item, index) => {
    // 通过经纬度获取中心点的位置
    let center = Cesium.Cartesian3.fromDegrees((item.minWGS84[0] + item.maxWGS84[0]) / 2, (item.minWGS84[1] + item.maxWGS84[1]) / 2, 0);
    item.threeMesh.position.copy(cartToVec(center));

    //计算朝向（切面方向-切线向量）
    //中心高度点
    let centerHeight = Cesium.Cartesian3.fromDegrees((item.minWGS84[0] + item.maxWGS84[0]) / 2, (item.minWGS84[1] + item.maxWGS84[1]) / 2, 1);
    //左下
    let bottomLeft = cartToVec(Cesium.Cartesian3.fromDegrees(item.minWGS84[0], item.minWGS84[1]));
    //左上
    let topLeft = cartToVec(Cesium.Cartesian3.fromDegrees(item.minWGS84[0], item.maxWGS84[1]));
    //朝向（）
    let latDir = new THREE.Vector3().subVectors(bottomLeft, topLeft).normalize();
    //设置查看方向
    item.threeMesh.lookAt(centerHeight.x, centerHeight.y, centerHeight.z);
    //设置朝向
    item.threeMesh.up.copy(latDir);
  });

  // 设置摄像机矩阵
  // 设置相机跟cesium保持一致
  three.camera.matrixAutoUpdate = false; //自动更新
  // 复制cesium相机矩阵
  let cvm = viewer.camera.viewMatrix;
  let civm = viewer.camera.inverseViewMatrix;
  // three相机默认朝向0,0,0
  three.camera.lookAt(0, 0, 0);
  // 设置threejs相机矩阵
  three.camera.matrixWorld.set(civm[0], civm[4], civm[8], civm[12], civm[1], civm[5], civm[9], civm[13], civm[2], civm[6], civm[10], civm[14], civm[3], civm[7], civm[11], civm[15]);
  three.camera.matrixWorldInverse.set(cvm[0], cvm[4], cvm[8], cvm[12], cvm[1], cvm[5], cvm[9], cvm[13], cvm[2], cvm[6], cvm[10], cvm[14], cvm[3], cvm[7], cvm[11], cvm[15]);
  //设置宽高比例
  let width = cesiumContainer.clientWidth;
  let height = cesiumContainer.clientHeight;
  three.camera.aspect = width / height;
  //更新相机矩阵
  three.camera.updateProjectionMatrix();
  //设置尺寸大小
  three.renderer.setSize(width, height);
  three.renderer.clear();
  three.renderer.render(three.scene, three.camera);
}

function loop() {
  requestAnimationFrame(loop);
  renderCesium();
  renderThree();
}

function createMesh() {
  let meshGroup = new THREE.Group();
  const loader = new GLTFLoader();
  // loader.load("./SampleData/models/s4_crater.glb", (gltf) => {
  loader.load(
    '/glb/s4_crater_2.glb',
    gltf => {
      // loader.load("./SampleData/models/crater.glb", (gltf) => {
      // loader.load("./SampleData/models/crater2.glb", (gltf) => {
      // loader.load("./SampleData/models/crater3.glb", (gltf) => {
      // loader.load("./SampleData/models/snow_bowl.glb", (gltf) => {
      // loader.load("./SampleData/models/cratera_parelheiros_sp.glb", (gltf) => {
      // loader.load("./SampleData/models/talemzane_impact_crater_algeria.glb", (gltf) => {
      gltfScene = gltf.scene;
      meshGroup.add(gltfScene);
      gltfScene.rotateX(Cesium.Math.toRadians(90));
      meshGroup.scale.set(100, 100, 100);
      gltfScene.traverse(child => {
        if (child instanceof THREE.Mesh) {
          console.log(child);
          child.material = new THREE.MeshPhysicalMaterial({
            color: '#ffff00'
          });
          child.material.wireframe = true; // 开启线框模式
          child.material.needsUpdate = true; // 更新材质
        }
      });
      three.scene.add(meshGroup);
    },
    undefined,
    function (error) {
      console.log(error);
    }
  );

  // 创建3d物体
  let OB3d = new Object3D(meshGroup, [minWGS84[0], minWGS84[1]], [maxWGS84[0], maxWGS84[1]]);
  // 添加到3d物体数组
  objects3D.push(OB3d);
}
function Object3D(mesh, minWGS84, maxWGS84) {
  this.threeMesh = mesh; //物体
  this.minWGS84 = minWGS84; //范围
  this.maxWGS84 = maxWGS84; //范围
}
