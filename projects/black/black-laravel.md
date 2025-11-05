---
title: "Laravel"
type: "black"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/a6def790-d603-4f61-90dc-f367f93f0d65"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

```
export default function Background() {
  return (
    <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
      <img className="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg" />   
        <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
   
        {your page / component}
        </div>
    </div>
  );
}


```

#### 
View background:

![Captura de tela de 2024-03-17 11-17-13](https://github.com/Icegreeen/blog-graphQL/assets/56550632/252f08dd-12c6-4308-b422-ed18162352db)

### Mobile and Desktop:

![Macbook-Air-localhost (1) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/f2ab184d-d6a2-4230-8257-8ef94dd951d8)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
