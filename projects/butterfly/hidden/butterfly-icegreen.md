---
title: "Icegreen"
type: "butterfly"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/67a29b43-499c-437d-855a-18f4d94bc508"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```
export default function Home() {
  return (
    <section
      className="flex items-center h-screen"
      style={{
        backgroundImage: `
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
          circle at 16% 35%,
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
        linear-gradient(4deg, #008c88, #000)`,
      }}
    >
      {your page / component}
    </section>
  );
}


```

#### 
View background:

![Captura de tela de 2024-03-04 17-16-03](https://github.com/Icegreeen/blog-graphQL/assets/56550632/920bdc7e-cc71-4326-97e0-c8360ff0d466)

### Mobile and Desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/b7013f5b-6963-48d5-aab6-52ff0f57f651)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
