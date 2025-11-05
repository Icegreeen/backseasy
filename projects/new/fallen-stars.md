---
title: "Fallen Stars"
type: "new"
date: "2025-11-05"
image: "https://github.com/user-attachments/assets/2c70f699-2cfb-4386-bda9-b0bf5030274f"
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
        
        canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -10;
        }
    </style>
</head>
<body>
    <canvas id="aurora-canvas"></canvas>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <script>
        // WebGL Aurora Background
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        const canvas = document.getElementById('aurora-canvas');
        canvas.parentNode.replaceChild(renderer.domElement, canvas);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float iTime;
                uniform vec2 iResolution;

                #define NUM_OCTAVES 3

                float rand(vec2 n) { 
                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
                }

                float noise(vec2 p){
                    vec2 ip = floor(p);
                    vec2 u = fract(p);
                    u = u*u*(3.0-2.0*u);
                    
                    float res = mix(
                        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                    return res*res;
                }

                float fbm(vec2 x) {
                    float v = 0.0;
                    float a = 0.3;
                    vec2 shift = vec2(100);    
                    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                    for (int i = 0; i < NUM_OCTAVES; ++i) {
                        v += a * noise(x);
                        x = rot * x * 2.0 + shift;
                        a *= 0.4;
                    }
                    return v;
                }

                void main() {
                    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                    
                    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                    vec2 v;
                    vec4 o = vec4(0.0);
                    
                    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                    
                    for(float i = 0.0; i++ < 35.0;)
                    {
                        v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                        
                        float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                        
                        vec4 auroraColors = vec4(
                            0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
                            0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
                            0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
                            1.0
                        );
                        
                        vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                        
                        float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                        o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                    }
                    
                    o = tanh(pow(o / 100.0, vec4(1.6)));
                    gl_FragColor = o * 1.5;
                }
            `
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value += 0.016;
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        });

        animate();
    </script>
</body>
</html>
```

View background:

<img width="2214" height="1196" alt="Image" src="https://github.com/user-attachments/assets/2c70f699-2cfb-4386-bda9-b0bf5030274f" />

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
