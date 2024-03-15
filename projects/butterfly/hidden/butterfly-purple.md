---
title: "Purple"
type: "butterfly"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/f9a6c98f-542e-43e6-87aa-1b0448a45422"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```

export default function Background() {
  return (
    <section
      className="flex items-center h-screen"
      style={{
        backgroundImage: `
        radial-gradient(
          circle at 29% 55%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 4%,
          transparent 4%,
          transparent 44%,
          transparent 44%,
          transparent 100%
        ),
        radial-gradient(
          circle at 85% 89%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 51%,
          transparent 51%,
          transparent 52%,
          transparent 52%,
          transparent 100%
        ),
        radial-gradient(
          circle at 6% 90%,
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
          circle at 56% 75%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 16%,
          transparent 16%,
          transparent 23%,
          transparent 23%,
          transparent 100%
        ),
        radial-gradient(
          circle at 42% 0,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 3%,
          transparent 3%,
          transparent 26%,
          transparent 26%,
          transparent 100%
        ),
        radial-gradient(
          circle at 29% 28%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 51%,
          transparent 51%,
          transparent 75%,
          transparent 75%,
          transparent 100%
        ),
        radial-gradient(
          circle at 77% 21%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 35%,
          transparent 35%,
          transparent 55%,
          transparent 55%,
          transparent 100%
        ),
        radial-gradient(
          circle at 65% 91%,
          hsla(329, 0%, 99%, 0.05) 0,
          hsla(329, 0%, 99%, 0.05) 46%,
          transparent 46%,
          transparent 76%,
          transparent 76%,
          transparent 100%
        ),
        linear-gradient(45deg, #000, #36015e)`,
      }}
    >
      
     {your page / component}
    </section>
  );
}

```

#### 
View background:

![Captura de tela de 2024-03-04 16-45-17](https://github.com/Icegreeen/blog-graphQL/assets/56550632/b8d87d00-dd2c-4e87-86bd-a7285aa5e584)

### Mobile and Desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/1e9e2168-d70f-4aad-8162-a8f02954a2b3)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).