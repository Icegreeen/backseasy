---
title: "Purple Planet"
type: "sky"
date: "2024-03-07"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/b891efd6-0d82-4bd1-bb17-53cfad093776"
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
        radial-gradient(circle at top, #26004d 45%,  #6b00d6 55%, #06000d 70%)`
      }}
    >
     
     {your page / component}
    </section>
  );
}


```

#### 
View background:

![Captura de tela de 2024-03-07 17-08-18](https://github.com/Icegreeen/blog-graphQL/assets/56550632/6f12e0e7-2418-46b0-a7fb-ceaadda12cf7)

### Mobile and Desktop:

![Macbook-Air-localhost (2) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/c0088671-ff7c-42ba-8e39-018742d55da1)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).