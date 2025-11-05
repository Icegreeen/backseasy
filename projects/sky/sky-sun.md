---
title: "Sun"
type: "sky"
date: "2024-03-07"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/39a0b674-5c7d-4e89-863d-2f416aa5ea09"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```

export default function Background() {
  return (
    <section
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: `
        radial-gradient(circle at top, #8a5101 35%, #733000 45%, #000 75%)
        `
      }}
    >
      
  {your component / page}
    </section>
  );
}

```

#### 
View background:

![Captura de tela de 2024-03-07 14-13-34](https://github.com/Icegreeen/blog-graphQL/assets/56550632/cbc9b0ed-3720-4e80-82fb-10bc6e36c067)

### Mobile and Desktop:

![Macbook-Air-localhost (2) (2)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/a508f624-6c85-4e15-b240-9801e068239c)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
