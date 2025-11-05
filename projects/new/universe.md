---
title: "Universe"
type: "new"
date: "2025-11-05"
image: "https://github.com/user-attachments/assets/3c91c332-0384-4abe-a447-a0f0445e0f5b"
---
#### How to implement:

Code:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html, body {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        
        body {
            position: relative;
        }
        
        #shader-canvas {
            position: absolute;
            inset: 0;
            z-index: -10;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <canvas id="shader-canvas"></canvas>
    
    <script id="fragShader" type="x-shader/x-fragment">
        precision highp float;

        uniform vec2 iResolution;
        uniform float iTime;

        vec3 hash( vec3 p ) {
          p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
                    dot(p,vec3(269.5,183.3,246.1)),
                    dot(p,vec3(113.5,271.9,124.6)));
          return -1.0 + 2.0*fract(sin(p)*43758.5453123);
        }

        float noise( in vec3 p ) {
          vec3 i = floor( p );
          vec3 f = fract( p );
          vec3 u = f*f*(3.0-2.0*f);
          return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),
                              dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                         mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),
                              dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),
                              dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                         mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),
                              dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
          float stars_threshold = 8.0;
          float stars_exposure = 200.0;
          float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
          stars *= mix(0.4, 1.4, noise(stars_direction * 100.0 + vec3(iTime)));
          gl_FragColor = vec4(vec3(stars),1.0);
        }
    </script>
    
    <script>
        const canvas = document.getElementById('shader-canvas');
        const gl = canvas.getContext('webgl');

        function resize() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        }
        window.addEventListener('resize', resize);
        resize();

        function compileShader(gl, source, type) {
          const shader = gl.createShader(type);
          gl.shaderSource(shader, source);
          gl.compileShader(shader);
          if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader));
          }
          return shader;
        }

        const vertSrc = `
          attribute vec2 position;
          void main() {
            gl_Position = vec4(position, 0.0, 1.0);
          }
        `;

        const fragSrc = document.getElementById('fragShader').textContent;

        const vertShader = compileShader(gl, vertSrc, gl.VERTEX_SHADER);
        const fragShader = compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);

        const program = gl.createProgram();
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          throw new Error(gl.getProgramInfoLog(program));
        }
        gl.useProgram(program);

        const posLoc = gl.getAttribLocation(program, 'position');
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
          -1, -1, 1, -1, -1, 1,
          -1, 1, 1, -1, 1, 1,
        ]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        const iResolution = gl.getUniformLocation(program, 'iResolution');
        const iTime = gl.getUniformLocation(program, 'iTime');

        function render(time) {
          gl.uniform2f(iResolution, canvas.width, canvas.height);
          gl.uniform1f(iTime, time * 0.001);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    </script>
</body>
</html>

```

View background:

<img width="2192" height="1196" alt="Image" src="https://github.com/user-attachments/assets/3c91c332-0384-4abe-a447-a0f0445e0f5b" />

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
