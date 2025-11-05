---
title: "Frame"
type: "animated"
date: "2024-03-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/7939159b-b505-41d8-bc24-cabfaa470156"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
import styles from './AnimatedBackground.module.css';

export default function Background() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className={styles.context}>
            <div className={styles.area}>
                <ul className={styles.circles}>
                    {[...Array(10)].map((_, index) => (
                        <li
                            key={index}
                            className={`${styles['animate-circle-' + (index + 1)]}`}
                        ></li>
                    ))}
                </ul>

                {your page / component }
            </div>
        </div>
    </div>
  );
}




```

Code: AnimatedBackground.module.css

```
.context {
    width: 100%;
    height: 100%;
}

.area {
    background: #290d6b;
    background: -webkit-linear-gradient(to left, #8f94fb, #060e09);
    width: 100%;
    height: 100%;
    position: relative;
    
    display: flex;
    flex-direction: column;
}

.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
}

/* Adicionando uma classe comum para estilizar os quadrados de animação */
.square-animation {
    border-radius: 0;
    background-color: rgba(255, 255, 255, 0.2);
}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 0s;
    animation-duration: 13s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;

    animation-duration: 12s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 0s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 0s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 8s;
}

@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 20%;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

```

View background:

![Captura de tela de 2024-04-04 14-50-08](https://github.com/Icegreeen/blog-graphQL/assets/56550632/3b143671-1c7e-454a-b0b1-293aa21a82d4)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/87148691-d24c-4d9c-a9e3-6fdedec6938b)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.