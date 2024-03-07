---
title: "Black Hole"
type: "sky"
date: "2024-03-07"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/6f66a617-256e-4dc4-83d9-132630c0df50"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```
export default function BlackHole() {
  return (
    <section
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: `
          radial-gradient(circle at top, #000 35%, #733000 45%, #000 75%)
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

![Captura de tela de 2024-03-07 10-45-48](https://github.com/Icegreeen/blog-graphQL/assets/56550632/f6204c92-44be-4fd5-ab8a-659a97d3a42c)

### Mobile and Desktop:


![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/20b024af-2d5d-4b47-aa47-da4495e034b9)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).