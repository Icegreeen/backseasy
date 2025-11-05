---
title: "Earth"
type: "sky"
date: "2024-03-07"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/4f9fe3e6-17a9-4be9-8f53-23bc02e6b39b"
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
        radial-gradient(circle at top, #1e2963 45%, #06083a 50%, #000 55%)
        `
      }}
    >

    {page / your component}
    </section>
  );
}


```

#### 
View background:

![Captura de tela de 2024-03-07 15-01-29](https://github.com/Icegreeen/blog-graphQL/assets/56550632/613cbccc-f1f0-4e5f-8ac8-5d872887e007)

### Mobile and Desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/3aa8378a-dd22-487e-b00e-41bcae310f93)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
