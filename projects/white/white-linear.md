---
title: "Linear"
type: "white"
date: "2024-03-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/6f3657e5-2007-4aa9-b219-e5039c1480b3"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
export default function Background() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
     <div className="relative flex flex-col items-center  h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {your page / component}
        </div>
    </div>
  );
}

```

View background:

![Captura de tela de 2024-03-18 10-17-08](https://github.com/Icegreeen/blog-graphQL/assets/56550632/cb2698f0-6ed0-4c86-8ecd-527d0a56716f)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (2) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/4b7bafde-ca46-414f-ae26-63ff34e82e2c)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
