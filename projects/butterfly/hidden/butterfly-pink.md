---
title: "Pink"
type: "butterfly"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/c4c57cf6-a382-4108-bf95-2618912d7d7c"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```
export default function Background() {
  return (
    <section
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: `
        radial-gradient(
          circle at -15% 190%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 53%,
          transparent 53%,
          transparent 64%,
          transparent 64%,
          transparent 100%
        ),

        radial-gradient(
          circle at 35% 75%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 6%,
          transparent 6%,
          transparent 98%,
          transparent 98%,
          transparent 100%
        ),

        radial-gradient(
          circle at 15% 105%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 15%,
          transparent 6%,
          transparent 98%,
          transparent 98%,
          transparent 100%
        ),
        
        radial-gradient(
          circle at 56% 25%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 16%,
          transparent 16%,
          transparent 23%,
          transparent 23%,
          transparent 100%
        ),

        radial-gradient(
          circle at 60% 75%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 17%,
          transparent 16%,
          transparent 23%,
          transparent 23%,
          transparent 100%
        ),

        radial-gradient(
          circle at 99% 65%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 89%, 0.05) 18%,
          transparent 16%,
          transparent 23%,
          transparent 23%,
          transparent 100%
        ),
        
        radial-gradient(
          circle at 42% 5%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 3%,
          transparent 3%,
          transparent 26%,
          transparent 26%,
          transparent 100%
        ),

         radial-gradient(
          circle at 82% 8%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 10%,
          transparent 3%,
          transparent 26%,
          transparent 26%,
          transparent 100%
        ),

        radial-gradient(
          circle at 38% 40%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 6%,
          transparent 3%,
          transparent 26%,
          transparent 26%,
          transparent 100%
        ),
         
        radial-gradient(
          circle at 12% 20%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 10%,
          transparent 3%,
          transparent 26%,
          transparent 26%,
          transparent 100%
        ),

        linear-gradient(4deg, #b304b0 , #000)`,
      }}
    >
  
      {your page / component}
    </section>
  );
}


```

#### 
View background:

![Captura de tela de 2024-03-06 19-37-59](https://github.com/Icegreeen/blog-graphQL/assets/56550632/a7024f55-bee9-43b4-9c3b-91441b14480c)

### Mobile and Desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/132bc201-16f3-446c-9b0e-c23a0e515e2d)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

