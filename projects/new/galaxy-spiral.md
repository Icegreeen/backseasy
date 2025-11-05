---
title: "Spiral Galaxy"
type: "new"
date: "2025-10-31"
image: "https://github.com/user-attachments/assets/950b4d99-e20f-4d30-87c9-1f274ee49510"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Infinite Spiral Galaxy Smooth</title>
<style>
  body { margin: 0; overflow: hidden; background: #000; }
  canvas { display: block; }
</style>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<script>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 0;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// === Halo central ===
const halo = new THREE.Mesh(
  new THREE.RingGeometry(2.2,3,64),
  new THREE.MeshBasicMaterial({
    color:0xff4c4c,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  })
);
halo.rotation.x = Math.PI/2;
scene.add(halo);

// Anéis lentos
const rings = [];
for(let i=0;i<3;i++){
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(3.5 + i*0.7,3.7 + i*0.7,64),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(`hsl(${i*40},100%,60%)`),
      side: THREE.DoubleSide,
      transparent:true,
      opacity:0.25,
      blending: THREE.AdditiveBlending
    })
  );
  ring.rotation.x = Math.PI/2;
  scene.add(ring);
  rings.push({mesh:ring,speed:0.001 + i*0.001});
}

// === Criar textura circular para partículas ===
const circleCanvas = document.createElement('canvas');
circleCanvas.width = 32;
circleCanvas.height = 32;
const ctx = circleCanvas.getContext('2d');
ctx.beginPath();
ctx.arc(16,16,14,0,Math.PI*2);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();
const texture = new THREE.CanvasTexture(circleCanvas);

// Partículas galáxia espiral
const particleCount = 5000;
const tunnelDepth = 200;
const particlesGeo = new THREE.BufferGeometry();
const positions = [];
const colors = [];

const arms = 3;

for(let i=0;i<particleCount;i++){
  const arm = i % arms;
  const angle = (arm/arms)*Math.PI*2 + Math.random()*0.5;
  const radius = 2 + Math.random()*20;
  const height = (Math.random()-0.5)*2;
  const spread = Math.random()*0.5;
  const x = (radius+spread)*Math.cos(angle + radius*0.2);
  const y = height + spread*Math.sin(angle*3);
  const z = -Math.random()*tunnelDepth;
  positions.push(x,y,z);

  const color = new THREE.Color();
  if(Math.random() < 0.1){
    color.setHSL(0.05 + Math.random()*0.05,1,0.6); 
  } else {
    color.setHSL(0.55 + Math.random()*0.1,0.7,0.6);
  }
  colors.push(color.r,color.g,color.b);
}

particlesGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions,3));
particlesGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors,3));

const particleMat = new THREE.PointsMaterial({
  size:0.025, 
  vertexColors:true,
  transparent:true,
  opacity:0.7,
  blending: THREE.AdditiveBlending,
  map: texture,
  alphaTest: 0.01
});

const particleSystem = new THREE.Points(particlesGeo,particleMat);
scene.add(particleSystem);

// === Animação infinita e suave ===
const speed = 0.015;
const clock = new THREE.Clock();

function animate(){
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  halo.material.opacity = 0.3 + 0.07*Math.sin(time*1.5);
  rings.forEach(r=> r.mesh.rotation.z += r.speed);

  const pos = particleSystem.geometry.attributes.position.array;
  for(let i=0;i<particleCount;i++){
    const idx = i*3;
    pos[idx+2] += speed;
    if(pos[idx+2] > 0) pos[idx+2] -= tunnelDepth;
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene,camera);
}

animate();

window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});
</script>
</body>
</html>

```

View background:

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
