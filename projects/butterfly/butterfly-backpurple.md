---
title: "Backpurple"
type: "butterfly"
date: "2024-03-07"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/1946d200-c4e1-456b-b45e-48ed8067052d"
---

#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.


```

export default function Background() {
  return (
    <section className="flex flex-col h-screen bg-gradient-to-t from-[#000] items-center relative to-[#141521]">
                <svg className="absolute" fill="none" height="150%" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_17_17)">
                    <g filter="url(#filter0_f_17_17)">
                      <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="#EB03FF"></path>
                      <path d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z" fill="#FF0F9F"></path>
                      <path d="M320 400H400V78.75L51.5 67.5L320 400Z" fill="#3A0D84"></path>

                     {/*
                        <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="#FAD8F4"></path>
                    */}
                      
                    </g>
                  </g>
                  <defs>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_17_17" width="720.666" x="-160.333" y="-160.333">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_17_17" stdDeviation="80.1666"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>

                { your page / component }
              </section>
  );
}


```

#### 
View background:

![Captura de tela de 2024-03-07 17-40-31](https://github.com/Icegreeen/blog-graphQL/assets/56550632/b9231e49-dada-44d6-bf97-b4ddc49d6a2a)

### Mobile and Desktop:

![Macbook-Air-localhost (3) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/937e70f5-e410-4616-ba71-d00edcdac180)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).
