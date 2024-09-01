const Cesium = window.Cesium;
export default async () => {
  var viewer = window.Viewer;
  // 开启帧率
  viewer.scene.debugShowFramesPerSecond = true;

  const tileset = await Cesium.Cesium3DTileset.fromUrl('/static/3DT/taibei/tileset.json');
  viewer.scene.primitives.add(tileset);
  tileset.allTilesLoaded.addEventListener(function () {
    console.log('All tiles are loaded');
  });
  viewer.zoomTo(tileset);

  // 纯渐变色
  function customShader1() {
    let customShader = new Cesium.CustomShader({
      //片元着色器
      fragmentShaderText: `
                    void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                        vec3 positionMC = fsInput.attributes.positionMC;
                        material.diffuse = vec3(0.0, 1.0-positionMC.y*0.005, 1.0-positionMC.y*0.0015);
                    }`
    });
    tileset.customShader = customShader;
  }

  // 纯渐变色+动态光圈
  function customShader2() {
    let customShader = new Cesium.CustomShader({
      //片元着色器
      fragmentShaderText: `
                        void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                            vec3 positionMC = fsInput.attributes.positionMC;
                            material.diffuse = vec3(0.0, 1.0-positionMC.y*0.005, 1.0-positionMC.y*0.0015);

                            float _baseHeight = 18.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
                            float _heightRange = 60.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange) 默认是 0-60米
                            float _glowRange = 120.0; // 光环的移动范围(高度)

                            float vtxf_height = fsInput.attributes.positionMC.y - _baseHeight;
                            float vtxf_a11 = fract(czm_frameNumber / 360.0) * 3.14159265 * 2.0; //此处括号内分母为移动速度
                            float vtxf_a12 = vtxf_height / _heightRange + sin(vtxf_a11) * 0.1;
                            material.diffuse *= vec3(vtxf_a12, vtxf_a12, vtxf_a12);

                            float vtxf_a13 = fract(czm_frameNumber / 360.0); //此处括号内分母为移动速度，数值越大，速度越慢
                            float vtxf_h = clamp(vtxf_height / _glowRange, 0.0, 1.0);
                            vtxf_a13 = abs(vtxf_a13 - 0.5) * 2.0;
                            float vtxf_diff = step(0.01, abs(vtxf_h - vtxf_a13)); // 0.1 为高亮光条的范围（粗细）
                            material.diffuse += material.diffuse * (1.0 - vtxf_diff);
                        }`
    });
    tileset.customShader = customShader;
  }

  /*
        
            CustomShader用法

        */
  const customShaders = new Cesium.CustomShader({
    // 用户想要添加到着色器的任何自定义uniform。
    //Uniform是一种在着色器程序中定义的全局变量，它们可以在着色器程序的任何地方使用，但它们的值在每个渲染周期中都是不变的。
    // 这些可以在运行时通过以下方式 更改 customShader.setUniform()
    uniforms: {
      u_time: {
        value: 0, // 初始值
        type: Cesium.UniformType.FLOAT
      },
      // Textures can be loaded from a URL, a Resource, or a TypedArray.//纹理可以从 URL、资源或类型数组加载
      // 有关更多详细信息，请参阅Uniforms部分
      u_externalTexture: {
        value: new Cesium.TextureUniform({
          url: 'http://example.com/image.png'
        }),
        type: Cesium.UniformType.SAMPLER_2D
      },
      // 将出现在自定义顶点和片段着色器文本中的自定义变化。
      varyings: {
        v_customTexCoords: Cesium.VaryingType.VEC2
      },
      // configure where in the fragment shader's materials/lighting pipeline the custom shader goes. More on this below.
      //配置自定义着色器在片段着色器的材质/光照管线中的位置。更多内容见下文。
      mode: Cesium.CustomShaderMode.MODIFY_MATERIAL,
      // either PBR (physically-based rendering) or UNLIT depending on the desired results.
      //PBR（基于物理的渲染）或 UNLIT，具体取决于所需的结果。
      lightingModel: Cesium.LightingModel.PBR,
      // Force the shader to render as transparent, even if the primitive had an opaque material
      //强制着色器渲染为透明，即使基元具有不透明材质
      translucencyMode: Cesium.CustomShaderTranslucencyMode.TRANSLUCENT,
      // Custom vertex shader. This is a function from model space -> model space.VertexInput is documented below
      // 自定义顶点着色器。这是模型空间 ->模型空间的函数.VertexInput输入记录如下
      vertexShaderText: `
                    // IMPORTANT: the function signature must use these parameter names. This
                    // makes it easier for the runtime to generate the shader and make optimizations.
                    //重要说明：函数签名必须使用这些参数名称。这使运行时更容易生成着色器并进行优化。
                    void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
                        // code goes here. An empty body is a no-op.
                        //代码在这里……空的内容是无操作的。
                    }
                `,
      // Custom fragment shader.
      // FragmentInput will be documented below
      // Regardless of the mode, this always takes in a material and modifies it in place.
      //自定义片元着色器
      //FragmentInput（片元）输入将被记录在下面
      //无论模式如何，这里需要一个material（材质）并将其modifies（位置）放到位
      fragmentShaderText: `
                    // IMPORTANT: the function signature must use these parameter names. This
                    // makes it easier for the runtime to generate the shader and make optimizations.
                    // 重要提示：函数签名必须使用这些参数名称。这
                    // 使运行时更容易生成着色器并进行优化。
                    void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                        // code goes here. e.g. to set the diffuse color to a translucent red:
                        //代码在这里。例如将漫反射颜色设置为半透明的红色：
                        material.diffuse = vec3(1.0, 0.0, 0.0);
                        material.alpha = 0.5;
                    }
                `
    }
  });

  //   贴图
  function customShader3() {
    let customShader = new Cesium.CustomShader({
      // lightingModel: Cesium.LightingModel.UNLIT,
      //  lightingModel: Cesium.LightingModel.PBR,
      //设置变量，由顶点着色器传递给片元着色器
      varyings: {
        v_normalMC: Cesium.VaryingType.VEC3,
        v_st: Cesium.VaryingType.VEC3
      },
      //外部传给顶点着色器或者片元着色器
      uniforms: {
        u_texture: {
          value: new Cesium.TextureUniform({
            url: '/static/wall.jpg'
          }),
          type: Cesium.UniformType.SAMPLER_2D
        },
        u_texture1: {
          value: new Cesium.TextureUniform({
            url: '/static/wall1.jpg'
          }),
          type: Cesium.UniformType.SAMPLER_2D
        }
      },
      //贴纹理
      //顶点着色器
      //将法向量从顶点着色器设置变量传给片元着色器
      vertexShaderText: `
              void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
                      v_normalMC = vsInput.attributes.normalMC;
                      v_st=vsInput.attributes.positionMC ;   
          }`,
      //片元着色器
      fragmentShaderText: `
              void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                  vec3 positionMC = fsInput.attributes.positionMC;
                  //这里是设置要贴图的图片的尺寸，设置小了会重复
                  float width = 30.0;
                  float height = 70.0;
                  vec3 rgb;
                  //这是是设置了屋顶的颜色，当和法向量平行时，就是屋顶，这里设置0.95，相当于垂直，建筑物四周开始贴图
                  if (dot(vec3(0.0, 1.0, 0.0), v_normalMC) > 0.95) {
                      material.diffuse = vec3(0.65, 0.65, 0.65);
                  } else {
                      float textureX = 0.0;
                      float dotYAxis = dot(vec3(0.0, 0.0, 1.0), v_normalMC);
                      // cos(45deg) 约等于 0.71，这里是建筑物四周的向量与法向量会大于四十五度夹角
                      if (dotYAxis > 0.71 || dotYAxis < -0.71) {
                      //x代表的是前后面
                          textureX = mod(positionMC.x, width) / width;
                      } else {
                      //z代表的是左右面
                          textureX = mod(positionMC.z, width) / width;
                      }
                      float textureY = mod(positionMC.y, height) / height;
                      //我这里是根据建筑物高度贴了两张不同的图片
                      if (positionMC.y > 40.0) {
                          rgb = texture(u_texture, vec2(textureX, textureY)).rgb;       
                      } else {
                          rgb = texture(u_texture1, vec2(textureX, textureY)).rgb;
                      }
                      
                      material.diffuse = rgb;
                  }
              }`
    });

    tileset.customShader = customShader;
  }
  //   贴图
  function customShader4() {
    let customShader = new Cesium.CustomShader({
      // lightingModel: Cesium.LightingModel.UNLIT,
      //  lightingModel: Cesium.LightingModel.PBR,
      //设置变量，由顶点着色器传递给片元着色器
      varyings: {
        v_normalMC: Cesium.VaryingType.VEC3,
        v_st: Cesium.VaryingType.VEC3
      },
      //外部传给顶点着色器或者片元着色器
      uniforms: {
        u_texture: {
          value: new Cesium.TextureUniform({
            url: '/static/wall.jpg'
          }),
          type: Cesium.UniformType.SAMPLER_2D
        },
        u_texture1: {
          value: new Cesium.TextureUniform({
            url: '/static/wall.jpg'
          }),
          type: Cesium.UniformType.SAMPLER_2D
        }
      },
      //贴纹理
      //顶点着色器
      //将法向量从顶点着色器设置变量传给片元着色器
      vertexShaderText: `
          void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
                  v_normalMC = vsInput.attributes.normalMC;
                  v_st=vsInput.attributes.positionMC ;   
          }`,
      //片元着色器
      fragmentShaderText: `
              void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                  vec3 positionMC = fsInput.attributes.positionMC;
                  //这里是设置要贴图的图片的尺寸，设置小了会重复
                  float width = 30.0;
                  float height = 70.0;
                  vec3 rgb;
                  //这是是设置了屋顶的颜色，当和法向量平行时，就是屋顶，这里设置0.95，相当于垂直，建筑物四周开始贴图
                  if (dot(vec3(0.0, 1.0, 0.0), v_normalMC) > 0.95) {
                      material.diffuse = vec3(0.65, 0.65, 0.65);
                  } else {
                      float textureX = 0.0;
                      float dotYAxis = dot(vec3(0.0, 0.0, 1.0), v_normalMC);
                      // cos(45deg) 约等于 0.71，这里是建筑物四周的向量与法向量会大于四十五度夹角
                      if (dotYAxis > 0.71 || dotYAxis < -0.71) {
                      //x代表的是前后面
                          textureX = mod(positionMC.x, width) / width;
                      } else {
                      //z代表的是左右面
                          textureX = mod(positionMC.z, width) / width;
                      }
                      float textureY = mod(positionMC.y, height) / height;
                      //我这里是根据建筑物高度贴了两张不同的图片
                      if (positionMC.y > 30.0) {
                          rgb = texture(u_texture, vec2(textureX, textureY)).rgb;       
                      } else {
                          rgb = texture(u_texture1, vec2(textureX, textureY)).rgb;
                      }
                      
                      material.diffuse = rgb;

                      //此处以下为光线效果
                      float _baseHeight = 10.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
                      float _glowRange = 120.0; // 光环的移动范围(高度)

                      float vtxf_height = fsInput.attributes.positionMC.y - _baseHeight;

                      float vtxf_a13 = fract(czm_frameNumber / 360.0); //此处括号内分母为移动速度，数值越大，速度越慢
                      float vtxf_h = clamp(vtxf_height / _glowRange, 0.0, 1.0);
                      vtxf_a13 = abs(vtxf_a13 - 0.5) * 2.0;
                      float vtxf_diff = step(0.01, abs(vtxf_h - vtxf_a13)); // 0.1 为高亮光条的范围（粗细）
                      material.diffuse += material.diffuse * (1.0 - vtxf_diff);
                  }
              }`
    });

    tileset.customShader = customShader;
  }
  //   贴图
  function customShader5() {
    let customShader = new Cesium.CustomShader({
      varyings: {
        v_normalMC: Cesium.VaryingType.VEC3,
        v_st: Cesium.VaryingType.VEC3
      },
      //外部传给顶点着色器或者片元着色器
      uniforms: {
        u_texture: {
          value: new Cesium.TextureUniform({
            url: '/static/wall.jpg'
          }),
          type: Cesium.UniformType.SAMPLER_2D
        },
        u_texture1: {
          value: new Cesium.TextureUniform({
            url: '/static/wall1.jpg'
          }),
          type: Cesium.UniformType.SAMPLER_2D
        }
      },
      //贴纹理
      //顶点着色器
      //将法向量从顶点着色器设置变量传给片元着色器
      vertexShaderText: `
              void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
                      v_normalMC = vsInput.attributes.normalMC;
                      v_st=vsInput.attributes.positionMC ;   
          }`,
      //片元着色器
      fragmentShaderText: `
              void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                  vec3 positionMC = fsInput.attributes.positionMC;
                  //这里是设置要贴图的图片的尺寸，设置小了会重复
                  float width = 30.0;
                  float height = 70.0;
                  vec3 rgb;
                  //这是是设置了屋顶的颜色，当和法向量平行时，就是屋顶，这里设置0.95，相当于垂直，建筑物四周开始贴图
                  if (dot(vec3(0.0, 1.0, 0.0), v_normalMC) > 0.95) {
                      material.diffuse = vec3(0.65, 0.65, 0.65);
                  } else {
                      float textureX = 0.0;
                      float dotYAxis = dot(vec3(0.0, 0.0, 1.0), v_normalMC);
                      // cos(45deg) 约等于 0.71，这里是建筑物四周的向量与法向量会大于四十五度夹角
                      if (dotYAxis > 0.71 || dotYAxis < -0.71) {
                          textureX = mod(positionMC.x, width) / width;
                      } else {
                          textureX = mod(positionMC.z, width) / width;
                      }
                      float textureY = mod(positionMC.y, height) / height;
                      
                      rgb = texture(u_texture1, vec2(textureX, textureY)).rgb;      
                      material.diffuse = rgb;
                  }
              }`
    });

    tileset.customShader = customShader;
  }
  //   清楚
  function clears() {
    let customShader = new Cesium.CustomShader({});
    tileset.customShader = customShader;
  }
  // 创建一个按钮元素
  var btn1 = document.createElement('button');
  var btn2 = document.createElement('button');
  var btn3 = document.createElement('button');
  var btn4 = document.createElement('button');
  var btn5 = document.createElement('button');

  // 设置按钮文本
  btn1.innerHTML = '纯渐变色';
  btn1.style.position = 'fixed';
  btn1.style.top = '85px';
  btn1.style.left = '400px';
  btn1.style.width = '100px';
  btn1.style.height = '45px';
  btn2.innerHTML = '纯渐变色+动态光圈';
  btn2.style.top = '85px';
  btn2.style.left = '500px';
  btn2.style.width = '100px';
  btn2.style.height = '45px';
  btn3.innerHTML = '贴图1';
  btn3.style.top = '85px';
  btn3.style.left = '600px';
  btn3.style.width = '100px';
  btn3.style.height = '45px';
  btn4.innerHTML = '贴图2';
  btn4.style.top = '85px';
  btn4.style.left = '700px';
  btn4.style.width = '100px';
  btn4.style.height = '45px';
  btn5.innerHTML = '贴图3';
  btn5.style.top = '85px';
  btn5.style.left = '800px';
  btn5.style.width = '100px';
  btn5.style.height = '45px';
  btn2.style.position = 'fixed';
  btn3.style.position = 'fixed';
  btn4.style.position = 'fixed';
  btn5.style.position = 'fixed';
  // 添加点击事件处理程序
  btn1.onclick = customShader1;
  btn2.onclick = customShader2;
  btn3.onclick = customShader3;
  btn4.onclick = customShader4;
  btn5.onclick = customShader5;
  // 将按钮添加到body中
  document.body.appendChild(btn1);
  document.body.appendChild(btn2);
  document.body.appendChild(btn3);
  document.body.appendChild(btn4);
  document.body.appendChild(btn5);
};
