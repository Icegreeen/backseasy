---
title: "Black Star"
type: "black"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/e9a02ef1-e7d0-48ee-85ae-5f0cb9c6d470"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

```
export default function Background() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="relative flex flex-col h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
     
        {your page / component}       
      </div>
    </div>
  );
}
```

#### 
View background:

![Captura de tela de 2024-03-18 10-04-04](https://github.com/Icegreeen/blog-graphQL/assets/56550632/15392bdc-3674-49ea-92cf-9281c7518247)

### Mobile and Desktop:

![Macbook-Air-localhost (1) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/b00c3a7c-7639-4f69-9235-826ef72b49f5)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).