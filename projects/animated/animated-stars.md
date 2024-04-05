---
title: "Stars"
type: "animated"
date: "2024-04-04"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/bc9303cc-be30-4b5d-b464-1d1e0c42f4fe"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
import styles from './AnimatedBackground.module.css';

interface CustomCSSProperties extends React.CSSProperties {
  [key: string]: string | number | undefined;
}

export default function Background() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className={styles.star}
            style={{
              '--top-offset': `${Math.random() * 130}vh`,
              '--fall-duration': `${Math.random() * 10 + 5}s`,
              '--fall-delay': `${Math.random() * 10}s`,
            } as CustomCSSProperties} 
          ></div>
        ))}
      </div>

    {your page / component}
  </div>
  );
}

```

Code: AnimatedBackground.module.css

```
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    overflow: hidden;

    flex-direction: column;
  }
  
  .stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    transform: rotate(-45deg);
  }
  
  .star {
    --star-color: var(--primary-color);
    --star-tail-length: 6em;
    --star-tail-height: 2px;
    --star-width: calc(var(--star-tail-length) / 6);
    --fall-duration: 9s;
    --tail-fade-duration: var(--fall-duration);
    position: absolute;
    top: var(--top-offset);
    left: 0;
    width: var(--star-tail-length);
    height: var(--star-tail-height);
    color: var(--star-color);
    background: linear-gradient(45deg, currentColor, transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px currentColor);
    transform: translate3d(104em, 0, 0);
    animation: fall var(--fall-duration) 0s linear infinite, tail-fade var(--tail-fade-duration) 0s ease-out infinite;
  }
  
  @media screen and (max-width: 750px) {
    .star {
      animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
    }
  }
  
  .star::before,
  .star::after {
    position: absolute;
    content: "";
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }
  
  .star::before {
    transform: rotate(45deg);
  }
  
  .star::after {
    transform: rotate(-45deg);
  }
  
  @keyframes fall {
    to {
      transform: translate3d(-50em, 0, 0);
    }
  }
  
  @keyframes tail-fade {
    0%,
    50% {
      width: var(--star-tail-length);
      opacity: 1;
    }
    70%,
    80% {
      width: 0;
      opacity: 0.4;
    }
    100% {
      width: 0;
      opacity: 0;
    }
  }
  
  @keyframes blink {
    50% {
      opacity: 0.6;
    }
  }
```

View background:

![Captura de tela de 2024-04-04 22-13-24](https://github.com/Icegreeen/blog-graphQL/assets/56550632/b1ef6f63-a704-4759-a27d-ecc763893b4d)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (2) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/03d1b9ee-c0ce-4bfb-b88e-ecdc615bf320)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).