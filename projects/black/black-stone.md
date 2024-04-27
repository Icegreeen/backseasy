---
title: "Square Stone"
type: "black"
date: "2024-03-03"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/13c78cf0-209a-4054-958c-7c9693663e5b"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
<section className="bg-white w-full bg-cover bg-center h-screen dark:bg-stone-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        {your page}
        <div className="bg-gradient-to-r dark:from-stone-950 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
```

View background:

![Captura de tela 2024-03-03 053312](https://github.com/Icegreeen/blog-graphQL/assets/56550632/4200f84b-9a19-4e0a-95b1-91598386de6b)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (3) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/be152575-6494-4b8d-9bca-773062f28c45)


#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).
