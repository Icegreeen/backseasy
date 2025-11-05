---
title: "Point"
type: "new"
date: "2025-10-31"
image: "https://github.com/user-attachments/assets/0a9d88de-88f0-4b79-a6e9-e8991c5033f6"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ghost Mouse 3 - Background Interativo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #000;
    }
  </style>
</head>
<body>
  <div id="container" touch-action="none"></div>
  <!-- Three.js via CDN - usando versão r88 compatível -->
  <script>
    function loadThreeJS() {
      return new Promise(function(resolve, reject) {
        if (typeof THREE !== 'undefined') {
          resolve();
          return;
        }
        
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r88/three.min.js';
        script.async = true;
        
        script.onload = function() {
          var checkInterval = setInterval(function() {
            if (typeof THREE !== 'undefined') {
              clearInterval(checkInterval);
              resolve();
            }
          }, 10);
          
          setTimeout(function() {
            clearInterval(checkInterval);
            if (typeof THREE === 'undefined') {
              loadThreeJSAlternative().then(resolve).catch(reject);
            }
          }, 5000);
        };
        
        script.onerror = function() {
          console.warn('CDN principal falhou, tentando CDN alternativo...');
          loadThreeJSAlternative().then(resolve).catch(reject);
        };
        
        document.head.appendChild(script);
      });
    }
    
    function loadThreeJSAlternative() {
      return new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/three@0.88.0/build/three.min.js';
        script.async = true;
        
        script.onload = function() {
          var checkInterval = setInterval(function() {
            if (typeof THREE !== 'undefined') {
              clearInterval(checkInterval);
              resolve();
            }
          }, 10);
          
          setTimeout(function() {
            clearInterval(checkInterval);
            if (typeof THREE === 'undefined') {
              reject(new Error('Three.js não pôde ser carregado'));
            }
          }, 5000);
        };
        
        script.onerror = function() {
          reject(new Error('Todos os CDNs falharam'));
        };
        
        document.head.appendChild(script);
      });
    }
    
    window.threeJSLoadPromise = loadThreeJS();
  </script>

  <script id="vertexShader" type="x-shader/x-vertex">
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  </script>

  <!-- Fragment Shader -->
  <script id="fragmentShader" type="x-shader/x-fragment">
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform sampler2D u_noise;
    uniform sampler2D u_buffer;
    uniform bool u_renderpass;
    
    const float blurMultiplier = 0.95;
    const float circleSize = .25;
    const float blurStrength = .98;
    const float threshold = .5;
    const float scale = 4.;
    
    #define _fract true
    
    #define PI 3.141592653589793
    #define TAU 6.283185307179586

    vec2 hash2(vec2 p) {
      vec2 o = texture2D(u_noise, (p+0.5)/256.0, -100.0).xy;
      return o;
    }
    
    vec3 hsb2rgb(in vec3 c) {
      vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
      rgb = rgb*rgb*(3.0-2.0*rgb);
      return c.z * mix(vec3(1.0), rgb, c.y);
    }
    
    vec3 domain(vec2 z) {
      return vec3(hsb2rgb(vec3(atan(z.y,z.x)/TAU,1.,1.)));
    }
    
    vec3 colour(vec2 z) {
      return domain(z);
    }

    #define pow2(x) (x * x)

    const int samples = 8;
    const float sigma = float(samples) * 0.25;

    float gaussian(vec2 i) {
      return 1.0 / (2.0 * PI * pow2(sigma)) * exp(-((pow2(i.x) + pow2(i.y)) / (2.0 * pow2(sigma))));
    }

    vec3 hash33(vec3 p) {
      float n = sin(dot(p, vec3(7, 157, 113)));    
      return fract(vec3(2097152, 262144, 32768)*n); 
    }

    vec3 blur(sampler2D sp, vec2 uv, vec2 scale) {
      vec3 col = vec3(0.0);
      float accum = 0.0;
      float weight;
      vec2 offset;
      
      for (int x = -samples / 2; x < samples / 2; ++x) {
        for (int y = -samples / 2; y < samples / 2; ++y) {
          offset = vec2(x, y);
          weight = gaussian(offset);
          col += texture2D(sp, uv + scale * offset).rgb * weight;
          accum += weight;
        }
      }
      
      return col / accum;
    }
    
    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
      uv *= scale;
      vec2 mouse = u_mouse * scale;
      
      vec2 ps = vec2(1.0) / u_resolution.xy;
      vec2 sample = gl_FragCoord.xy / u_resolution.xy;
      vec2 o = mouse*.2+vec2(.65, .5);
      float d = .98;
      sample = d * (sample - o);
      sample += o;
      sample += vec2(sin((u_time+uv.y * .5)*10.)*.001, -.00);
      
      vec3 fragcolour;
      vec4 tex;
      
      if(u_renderpass) {
        tex = vec4(blur(u_buffer, sample, ps*blurStrength) * blurMultiplier, 1.);
        float df = length(mouse - uv);
        fragcolour = vec3(smoothstep(circleSize, 0., df));
      } else {
        tex = texture2D(u_buffer, sample, 2.) * .98;
        tex = vec4(
          smoothstep(0.0, threshold - fwidth(tex.x), tex.x),
          smoothstep(0.2, threshold - fwidth(tex.y) + .2, tex.y),
          smoothstep(-0.05, threshold - fwidth(tex.z) - .2, tex.z),
          1.);
        vec3 n = hash33(vec3(uv, u_time*.1));
        tex.rgb += n * .2 - .1;
      }

      gl_FragColor = vec4(fragcolour,1.0);
      gl_FragColor += tex;
    }
  </script>

  <!-- JavaScript inline - toda a lógica em um único arquivo -->
  <script>
    let retryCount = 0;
    const MAX_RETRIES = 50; // Máximo de 5 segundos (50 * 100ms)
    
    function initGhostMouse() {
      if (typeof THREE === 'undefined') {
        retryCount++;
        if (retryCount < MAX_RETRIES) {
          setTimeout(initGhostMouse, 100);
        } else {
          console.error('Three.js não conseguiu carregar. Verifique sua conexão ou o CDN.');
        }
        return;
      }
      
      retryCount = 0;

      (function() {
        'use strict';

        // ==========================================
        // Ghost Mouse 3 - Background Interativo
        // Tudo inline para fácil integração
        // ==========================================

        let container;
        let camera, scene, renderer;
        let uniforms;
        let divisor = 1 / 10;
        let newmouse = { x: 0, y: 0 };
        let texture, rtTexture, rtTexture2;
        let animationId;

        let loader = new THREE.TextureLoader();
        loader.setCrossOrigin("anonymous");
        loader.load(
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
          function do_something_with_texture(tex) {
            texture = tex;
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.minFilter = THREE.LinearFilter;
            init();
            animate();
          }
        );

      function init() {
        container = document.getElementById('container');

        camera = new THREE.Camera();
        camera.position.z = 1;

        scene = new THREE.Scene();
        var geometry = new THREE.PlaneBufferGeometry(2, 2);

        rtTexture = new THREE.WebGLRenderTarget(window.innerWidth * 0.2, window.innerHeight * 0.2);
        rtTexture2 = new THREE.WebGLRenderTarget(window.innerWidth * 0.2, window.innerHeight * 0.2);

        uniforms = {
          u_time: { type: "f", value: 1.0 },
          u_resolution: { type: "v2", value: new THREE.Vector2() },
          u_noise: { type: "t", value: texture },
          u_buffer: { type: "t", value: rtTexture.texture },
          u_mouse: { type: "v2", value: new THREE.Vector2() },
          u_renderpass: { type: 'b', value: false }
        };

        var material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: document.getElementById('vertexShader').textContent,
          fragmentShader: document.getElementById('fragmentShader').textContent
        });

        material.extensions.derivatives = true;

        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);

        container.appendChild(renderer.domElement);

        onWindowResize();
        window.addEventListener('resize', onWindowResize, false);

        document.addEventListener('pointermove', (e) => {
          let ratio = window.innerHeight / window.innerWidth;
          newmouse.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
          newmouse.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
          e.preventDefault();
        });
      }

      function onWindowResize(event) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_resolution.value.x = renderer.domElement.width;
        uniforms.u_resolution.value.y = renderer.domElement.height;

        rtTexture = new THREE.WebGLRenderTarget(window.innerWidth * 0.2, window.innerHeight * 0.2);
        rtTexture2 = new THREE.WebGLRenderTarget(window.innerWidth * 0.2, window.innerHeight * 0.2);
      }

      let then = 0;
      function renderTexture(delta) {
        let odims = uniforms.u_resolution.value.clone();
        uniforms.u_resolution.value.x = window.innerWidth * 0.2;
        uniforms.u_resolution.value.y = window.innerHeight * 0.2;

        uniforms.u_buffer.value = rtTexture2.texture;
        uniforms.u_renderpass.value = true;

        renderer.setRenderTarget(rtTexture);
        renderer.render(scene, camera, rtTexture, true);

        let buffer = rtTexture;
        rtTexture = rtTexture2;
        rtTexture2 = buffer;

        uniforms.u_buffer.value = rtTexture.texture;
        uniforms.u_resolution.value = odims;
        uniforms.u_renderpass.value = false;
      }

      function render(delta) {
        uniforms.u_mouse.value.x += (newmouse.x - uniforms.u_mouse.value.x) * divisor;
        uniforms.u_mouse.value.y += (newmouse.y - uniforms.u_mouse.value.y) * divisor;

        uniforms.u_time.value = delta * 0.0005;
        renderer.render(scene, camera);
        renderTexture();
      }

      function animate(delta) {
        animationId = requestAnimationFrame(animate);
        render(delta || 0);
      }

      // Função de limpeza para uso em React ou outros frameworks
      window.ghostMouseCleanup = function() {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        if (renderer) {
          renderer.dispose();
        }
        window.removeEventListener('resize', onWindowResize);
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('touchmove', handlePointerMove);
      };

      })();
    }

    // Aguardar o carregamento do Three.js
    function waitForThreeJS() {
      if (window.threeJSLoadPromise) {
        window.threeJSLoadPromise.then(function() {
          initGhostMouse();
        }).catch(function(error) {
          setTimeout(function() {
            if (typeof THREE !== 'undefined') {
              initGhostMouse();
            }
          }, 2000);
        });
      } else {
        var checkCount = 0;
        var maxChecks = 50; // 5 segundos
        
        var checkInterval = setInterval(function() {
          checkCount++;
          if (typeof THREE !== 'undefined') {
            clearInterval(checkInterval);
            initGhostMouse();
          } else if (checkCount >= maxChecks) {
            clearInterval(checkInterval);
            console.error('Three.js não está disponível. Recarregue a página.');
          }
        }, 100);
      }
    }
    
    // Aguardar DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', waitForThreeJS);
    } else {
      waitForThreeJS();
    }
  </script>
</body>
</html>

```

View background:



#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
