---
title: "White"
type: "white"
date: "2024-03-03"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/4d1508bd-e136-421a-a4f7-17cdc3083c4b"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```

export default function Background() {
  return (
    <>
        <section className="relative flex-col h-screen overflow-hidden" 
            style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    hsla(78, 0%, 63%, 0.05) 0,
                    hsla(78, 0%, 63%, 0.05) 1px,
                    transparent 1px,
                    transparent 104px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    hsla(78, 0%, 63%, 0.05) 0,
                    hsla(78, 0%, 63%, 0.05) 1px,
                    transparent 1px,
                    transparent 104px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    hsla(78, 0%, 63%, 0.08) 0,
                    hsla(78, 0%, 63%, 0.08) 1px,
                    transparent 1px,
                    transparent 26px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    hsla(78, 0%, 63%, 0.08) 0,
                    hsla(78, 0%, 63%, 0.08) 1px,
                    transparent 1px,
                    transparent 26px
                  ),
                  linear-gradient(45deg, #fff, #fff)
                  `
                }}
                >
                <svg className="absolute blur-3xl -right-96 -top-80" fill="none" viewBox="0 0 400 400" height="80%" width="80%" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_10_20)">
                    <g filter="url(#filter0_f_10_20)">
                      <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#000"></path>
                      <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                      <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#000"></path>
                      <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#6551f3"></path>
                    </g>
                  </g>
                  <defs>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
                
                <svg className="absolute blur-3xl -bottom-44 left-[-30rem]" fill="none" viewBox="0 0 400 400" height="60%" width="60%" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_10_20)">
                    <g filter="url(#filter0_f_10_20)">
                      <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#000"></path>
                      <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                      <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#000"></path>
                      <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#6551f3"></path>
                    </g>
                  </g>
                  <defs>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>

                {your page / component}
                
         </section>      
   </>
  );
}


```

View background:

![Captura de tela de 2024-03-15 05-26-51](https://github.com/Icegreeen/blog-graphQL/assets/56550632/a3a3bee5-754a-45a4-9169-f3f8abe3bd4b)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/cdb44d9d-1cf9-4516-9856-d78acdc77b01)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).
