---
title: "Stripe red"
type: "black"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/32eed804-d85a-4914-9e03-2ddb485eb0f0"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

```
export default function Background() {
  return (
        <div
          className="relative flex flex-col h-screen bg-black before:absolute before:inset-0 before:w-full before:bg-black before:opacity-60"
           style={{backgroundImage: `url(https://readymadeui.com/dark-bg-image.webp); `}}
         >
       
            {your page / component}
        </div>
  );
}
```

#### 
View background:

![Captura de tela de 2024-03-15 17-50-51](https://github.com/Icegreeen/blog-graphQL/assets/56550632/829528d0-7fc3-4ea2-b499-1f9adca1ad17)

### Mobile and Desktop:

![Macbook-Air-localhost (2) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/1e8c228b-e2a8-4384-8cc7-6984cb22e9d5)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).