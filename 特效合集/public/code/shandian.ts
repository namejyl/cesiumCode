const Cesium = window.Cesium;
export default () => {
  var viewer = window.Viewer;
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(121.662323, 20.157338, 271712),
    orientation: {
      heading: Cesium.Math.toRadians(350.3),
      pitch: Cesium.Math.toRadians(-27.4),
      roll: 0.0
    }
  });

  // 雨
  new weatherEffects(viewer, {
    name: 'a',
    type: 'rain'
  });

  // 闪电
  let Lightning = `
    float hash(float x)
    {
    return fract(21654.6512 * sin(385.51 * x));
    }
    float hash(vec2 p)
    {
    return fract(1654.65157 * sin(15.5134763 * p.x + 45.5173247 * p.y + 5.21789));
    }
    vec2 hash2(vec2 p)
    {
    return vec2(hash(p * .754), hash(1.5743 * p + 4.5476351));
    }
    vec2 add = vec2(1.0, 0.0);
    vec2 noise2(vec2 x)
    {
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    vec2 res = mix(mix(hash2(p),
    hash2(p + add.xy), f.x),
    mix(hash2(p + add.yx), hash2(p + add.xx), f.x), f.y);
    return res;
    }
    vec2 fbm2(vec2 x)
    {
    vec2 r = vec2(0.0);
    float a = 1.0;
    for (int i = 0; i < 8; i++)
    {
    r += noise2(x) * a;
    x *= 2.;
    a *= .5;
    }
    return r;
    }
    float dseg(vec2 ba, vec2 pa)
    {
    float h = clamp(dot(pa, ba) / dot(ba, ba), -0.2, 1.);
    return length(pa - ba * h);
    }
    uniform sampler2D colorTexture; 
    uniform float fall_interval; 
    uniform float mix_factor; 
    in vec2 v_textureCoordinates; 
    void main(void){
    vec2 uv = gl_FragCoord.xy; 
    float iTime = czm_frameNumber * fall_interval * clamp(fall_interval * 0.1, 0.01, 0.1); 
    vec2 p = uv / czm_viewport.zw; 
    vec2 d; 
    vec2 tgt = vec2(1., -1.); 
    float c = 0.; 
    if (p.y >= 0.) 
    c = (1. - (fbm2((p + .2) * p.y + .1 * iTime)).x) * p.y; 
    else                                
    c = (1. - (fbm2(p + .2 + .1 * iTime)).x) * p.y * p.y; 
    vec3 col = vec3(0.); 
    vec3 col1 = c * vec3(.3, .5, 1.); 
    float mdist = 100000.; 
    float t = hash(floor(5. * iTime)); 
    tgt += 4. * hash2(tgt + t) - 1.5; 
    if (hash(t + 2.3) > .6) 
    for (int i = 0; i < 100; i++) {
    vec2 dtgt = tgt - p; 
    d = .05 * (vec2(-.5, -1.) + hash2(vec2(float(i), t))); 
    float dist = dseg(d, dtgt); 
    mdist = min(mdist, dist); 
    tgt -= d; 
    c = exp(-1.2 * dist) + exp(-55. * mdist); 
    col = c * vec3(.7, .8, 1.); 
    } 
    col += col1; 
    out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(col, 0.0), mix_factor); 
    } 
    `;

  Cesium.PostProcessStageLibrary.createLightningStage = function (val) {
    return new Cesium.PostProcessStage({
      name: 'czm_lightning',
      fragmentShader: Lightning,
      uniforms: {
        mix_factor: val.mix_factor, //混合系数0-1之间的数
        fall_interval: 0.8 //0-1之间的数
      }
    });
  };

  var collection = viewer.scene.postProcessStages;
  var lightning = Cesium.PostProcessStageLibrary.createLightningStage({
    mix_factor: 0.35 //混合系数
  });
  collection.add(lightning);
};
/***
 * @class DEUGlobe.Scene.sceneEffects.weatherEffects
 * @category  场景
 * @classdesc 场景特效-天气特效
 * @param {Object} viewer -  Cesium.viewer。
 * @param {Object} options - 参数。
 * @param {String} options.name - 天气特效名称。
 * @param {String} options.type - 天气特效类型. (snow：雪 ， rain：雨，fog：雾)。
 */
class weatherEffects {
  constructor(viewer, options) {
    this.viewer = viewer;
    var opt = options || {};
    this.name = opt.name;
    this.type = opt.type;
    let stage = this.getStage(),
      fs = null;
    if (stage == null) {
      switch (this.type) {
        case 'snow':
          fs = this.fs_snow();
          break;
        case 'rain':
          fs = this.fs_rain();
          break;
        case 'fog':
          fs = this.fs_fog();
          break;
      }
    }
    stage = new Cesium.PostProcessStage({
      name: this.name,
      fragmentShader: fs,
      uniforms: {
        color: Cesium.Color.fromAlpha(Cesium.Color.BLACK, parseFloat(1))
      }
    });
    viewer.scene.postProcessStages.add(stage);
  }
  removePostProcessStage() {
    let stage = this.getStage();
    if (stage) {
      this.viewer.scene.postProcessStages.remove(stage);
    }
  }
  getStage() {
    let stage = null,
      stages = this.viewer.scene.postProcessStages;
    for (let i = 0; i < stages._stages.length; i++) {
      let tmp = stages.get(i);
      if (tmp != undefined && tmp.name == this.name) {
        stage = tmp;
        break;
      }
    }
    return stage;
  }
  fs_snow() {
    return (
      'uniform sampler2D colorTexture;\n' +
      'in vec2 v_textureCoordinates;\n' +
      'float snow(vec2 uv,float scale)\n' +
      '{\n' +
      '    float time = czm_frameNumber / 60.0;\n' +
      '    float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;\n' +
      '    uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;\n' +
      '    uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;\n' +
      '    p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);\n' +
      '    k=smoothstep(0.,k,sin(f.x+f.y)*0.01);\n' +
      '    return k*w;\n' +
      '}\n' +
      'void main(void){\n' +
      '     vec2 resolution = czm_viewport.zw;\n' +
      '     vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n' +
      '     vec3 finalColor=vec3(0);\n' +
      '     float c = 0.0;\n' +
      '     c+=snow(uv,30.)*.0;\n' +
      '     c+=snow(uv,20.)*.0;\n' +
      '     c+=snow(uv,15.)*.0;\n' +
      '     c+=snow(uv,10.);\n' +
      '     c+=snow(uv,8.);\n' +
      '     c+=snow(uv,6.);\n' +
      '     c+=snow(uv,5.);\n' +
      '     finalColor=(vec3(c));\n' +
      '     out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(finalColor,1), 0.5);\n' +
      '}'
    );
  }
  fs_rain() {
    return (
      'uniform sampler2D colorTexture;\n' +
      'in vec2 v_textureCoordinates;\n' +
      '	float hash(float x){\n' +
      '	     return fract(sin(x*133.3)*13.13);\n' +
      '	 }\n' +
      '	void main(void){\n' +
      '	     float time = czm_frameNumber / 60.0;\n' +
      '	     vec2 resolution = czm_viewport.zw; \n' +
      '	     vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n' +
      '	     vec3 c=vec3(.6,.7,.8); \n' +
      '	     float a=-.4;\n' +
      '	     float si=sin(a),co=cos(a);\n' +
      '	     uv*=mat2(co,-si,si,co);\n' +
      '	     uv*=length(uv+vec2(0,4.9))*.3+1.;\n' +
      '	     float v=1.-sin(hash(floor(uv.x*100.))*2.);\n' +
      '	     float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n' +
      '	     c*=v*b; \n' +
      '	     out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c,1), 0.5); \n' +
      '	}'
    );
  }
  fs_fog() {
    return (
      'uniform sampler2D colorTexture;\n' +
      '  uniform sampler2D depthTexture;\n' +
      '  in vec2 v_textureCoordinates;\n' +
      '  void main(void)\n' +
      '  {\n' +
      '      vec4 origcolor=texture(colorTexture, v_textureCoordinates);\n' +
      '      vec4 fogcolor=vec4(0.8,0.8,0.8,0.5);\n' +
      '      float depth = czm_readDepth(depthTexture, v_textureCoordinates);\n' +
      '      vec4 depthcolor=texture(depthTexture, v_textureCoordinates);\n' +
      '      float f=(depthcolor.r-0.22)/0.2;\n' +
      '      if(f<0.0) f=0.0;\n' +
      '      else if(f>1.0) f=1.0;\n' +
      '      out_FragColor = mix(origcolor,fogcolor,0.8);\n' +
      '   }'
    );
  }
}
