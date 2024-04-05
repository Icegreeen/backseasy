---
title: "Line"
type: "animated"
date: "2024-04-05"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/4f264856-43b7-414f-a48f-29f03278ef06"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
import styles from './AnimatedBackground.module.css';

export default function Background() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className={styles.container}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

       {yout page/ component}
      </div>
    </div>
  );
}

```

Code: AnimatedBackground.module.css

```
.container {
  display: flex;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #310d29 0%, #0c0d13 100%);
  color: #000;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
}

.line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.line::after {
  content: '';
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
  animation: drop 7s 0s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

/* 1 line */

.line:nth-child(1) {
  margin-left: -25%;
}

.line:nth-child(1)::after {
  animation-delay: 2s;
}

/* 3 line */

.line:nth-child(3) {
  margin-left: 25%;
}

.line:nth-child(3)::after {
  animation-delay: 2.5s;
}

/* 4 line */

.line:nth-child(4) {
  margin-left: 50%;
}

.line:nth-child(4)::after {
  animation-delay: 1s;
}

/* 5 line */

.line:nth-child(5) {
  margin-left: -50%;
}

.line:nth-child(5)::after {
  animation-delay: 1s;
}

@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}


```

View background:

![Captura de tela de 2024-04-05 10-31-42](https://github.com/Icegreeen/blog-graphQL/assets/56550632/66fc0e7a-3098-4419-8950-703797debac4)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/a056ae6a-9a60-4899-9cad-577da3397e97)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).