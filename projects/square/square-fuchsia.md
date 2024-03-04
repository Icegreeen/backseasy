---
title: "Square Fuchsia"
type: "square"
date: "2024-03-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/f92faaeb-8245-4adb-8c90-3b017ed7a713"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
<section className="bg-white w-full  bg-center h-screen dark:bg-fuchsia-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        {your page}
        <div className=" to-transparent dark:from-stone-950 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
```

View background:

![Captura de tela 2024-03-03 061217](https://github.com/Icegreeen/blog-graphQL/assets/56550632/356b4115-a5cb-4272-957f-72818fe58915)

Responsive: Mobile and desktop:
![Macbook-Air-localhost](https://github.com/Icegreeen/blog-graphQL/assets/56550632/b2dfa17d-dd77-4229-8562-f4fcdb50e5f5)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).