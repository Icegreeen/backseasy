---
title: "Moon"
type: "sky"
date: "2024-03-07"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/3a77fa33-1377-43df-86bf-bbca1e8586be"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```

export default function Home() {
  return (
    <section
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: `
        radial-gradient(circle at top, #282828 3%, #848484 50%, #000 70%)
        `
      }}
    >

      {your component or page}
  
    </section>
  );
}

```

#### 
View background:

![Captura de tela de 2024-03-07 14-22-22](https://github.com/Icegreeen/blog-graphQL/assets/56550632/f63cee14-413a-447f-8f48-347e60817f5f)

### Mobile and Desktop:


![Macbook-Air-localhost (2) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/cf904b39-8ee5-44d3-bf8e-06cac3eaa808)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

