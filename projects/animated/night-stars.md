---
title: "Starry sky"
type: "animated"
date: "2024-08-13"
image: "https://github.com/user-attachments/assets/8da6f1d6-7c19-4f7a-9169-ae6f1e811feb"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #070d13 0%, #090A0F 100%);
  overflow: hidden;
}

/* Estrelas pequenas */
#stars {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 
    100px 100px #f8aa00, 200px 300px #f8aa00, 400px 150px #f8aa00, 800px 700px #f8aa00,
    1200px 1100px #f8aa00, 1400px 1300px #f8aa00, 1600px 1150px #f8aa00, 1800px 1700px #f8aa00,
    500px 400px #f8aa00, 600px 600px #f8aa00, 700px 900px #f8aa00, 1100px 800px #f8aa00,
    200px 1200px #f8aa00, 400px 1300px #f8aa00, 600px 1450px #f8aa00, 800px 1600px #f8aa00,
    1700px 1700px #f8aa00, 1500px 1800px #f8aa00, 1300px 1950px #f8aa00, 1100px 2100px #f8aa00;
  animation: animStar 50s linear infinite;
}

/* Estrelas médias */
#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 
    150px 200px #01a2ff, 300px 400px #01a2ff, 500px 250px #01a2ff, 900px 800px #01a2ff,
    1200px 1050px #01a2ff, 1400px 1200px #01a2ff, 1600px 1350px #01a2ff, 1800px 1500px #01a2ff,
    200px 200px #01a2ff, 400px 500px #01a2ff, 600px 800px #01a2ff, 1000px 900px #01a2ff,
    300px 1100px #01a2ff, 500px 1250px #01a2ff, 700px 1400px #01a2ff, 900px 1550px #01a2ff,
    1100px 1600px #01a2ff, 1300px 1700px #01a2ff, 1500px 1850px #01a2ff, 1700px 2000px #01a2ff;
  animation: animStar 100s linear infinite;
}

/* Estrelas grandes */
#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 
    200px 300px #FFF, 400px 500px #FFF, 600px 350px #FFF, 1000px 900px #FFF,
    1300px 1150px #FFF, 1500px 1300px #FFF, 1700px 1450px #FFF, 1900px 1600px #FFF,
    250px 400px #FFF, 450px 600px #FFF, 650px 900px #FFF, 850px 1100px #FFF,
    1050px 1200px #FFF, 1250px 1400px #FFF, 1450px 1600px #FFF, 1650px 1800px #FFF,
    1850px 1900px #FFF, 2050px 2100px #FFF, 2250px 2300px #FFF, 2450px 2500px #FFF;
  animation: animStar 150s linear infinite;
}


@keyframes animStar {
  from {
    transform: translateY(-1000px);
  }
  to {
    transform: translateY(-2000px);
  }
}
```

Tsx:

```
export default function Home() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#431e47] via-[#100322] to-black">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    
      {your page / component}

      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars"></div>
    </section>
  );
}

```

View background:

![Captura de tela 2024-08-13 074320](https://github.com/user-attachments/assets/4d9363f6-f00b-47d4-91cd-a02cd22a86d9)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1)](https://github.com/user-attachments/assets/e7ae0918-4d71-41ad-886d-608c2a930c61)


#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
