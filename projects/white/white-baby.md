---
title: "Baby"
type: "white"
date: "2024-03-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/470f1d5a-921e-48ec-b764-6a1ca2ced42c"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
export default function Background() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform 
      bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.8)_50%)]"></div>

        {yout page / component}
    </div>
  );
}
```

View background:

![Captura de tela de 2024-03-18 10-45-48](https://github.com/Icegreeen/blog-graphQL/assets/56550632/06be16b3-c24b-4cd5-8092-eea56e48ad0f)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/a67c8fd7-fa05-494d-8840-24febced9c51)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
