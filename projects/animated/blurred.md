---
title: "Blurred"
type: "animated"
date: "2024-09-02"
image: "https://github.com/user-attachments/assets/005ca878-1b79-405b-a5aa-468a9414f7af"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
export default function Home() {
  return (
      <section>
        {/* your content*/}
        <div className="gradient"></div>
      </section>
 
  );
}
```

CSS:

```
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(460deg);
  }
}
.gradient {
  --size: 750px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(#6e20ff, #ef7be9);
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}
body {
  background-color: #070a0f;
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
}

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.5s ease-out;
}
```

View background:

![Captura de tela 2024-09-02 023612](https://github.com/user-attachments/assets/24620853-5cd8-4a52-b3e1-04204abd9c04)
![Captura de tela 2024-09-02 024022](https://github.com/user-attachments/assets/61b65652-51ae-432c-80cc-47edd3201b10)


Responsive: Mobile and desktop:

![Macbook-Air-localhost (1)](https://github.com/user-attachments/assets/5bc970a2-6b47-48a2-b269-90a19dfb4038)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
