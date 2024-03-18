---
title: "Smooth"
type: "white"
date: "2024-03-18"
image: "https://github.com/Icegreeen/counter_strike/assets/56550632/04d72d00-1fb7-4976-8865-8282767f9cd3"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
        <div className="blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
        <div className="blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
        <div className="blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-100 via-teal-100 to-blue-100"></div>
        <div className="blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
                    
        {your page / component}
    </div>
  );
}

```

View background:

![Captura de tela de 2024-03-18 09-16-05](https://github.com/Icegreeen/blog-graphQL/assets/56550632/54037811-2df3-47e8-8975-50c5219de3e2)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/0b8c8816-07e8-446b-8c44-d5b557064d8a)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).