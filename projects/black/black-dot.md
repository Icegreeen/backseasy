---
title: "Dot"
type: "black"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/e87d36d0-dfd1-4e60-a815-f0e17a31c541"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

```
export default function Background() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#07000d_1px)] bg-[size:20px_20px]"></div>

      {your page / component}     
    </div>
  );
}

```

#### 
View background:

![Captura de tela de 2024-03-18 09-43-37](https://github.com/Icegreeen/blog-graphQL/assets/56550632/36b9683e-1a5b-4c18-bbbb-1a7f22f7015f)

### Mobile and Desktop:

![Macbook-Air-localhost (1) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/4b1a87e9-919b-4680-b5d8-319b50f0be37)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
