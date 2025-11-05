---
title: "Gray"
type: "black"
date: "2024-02-18"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/1ef87271-9fc4-409e-9032-670f74bc0a0b"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

```
export default function Background() {
  return (
    <section className="bg-[#1a1d27] relative overflow-hidden w-screen h-screen items-center flex">
      <svg className="absolute opacity-20" width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_17_23)">
                    <g filter="url(#filter0_f_17_23)">
                      <path d="M271.4 0H400V322.2L320 290L271.4 0Z" fill="#fff"></path>
                      <path d="M400 322.2V400H320H244L320 290L400 322.2Z" fill="#fff"></path>
                      <path d="M244 400H0V166L320 290L244 400Z" fill="#fff"></path>
                      <path d="M0 0H271.4L320 290L0 166V0Z" fill="#fff"></path>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_f_17_23" x="-159.933" y="-159.933" width="719.867" height="719.867" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_23"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
                <svg className="absolute opacity-30" viewBox="0 0 960 637" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_f_1_167)">
                    <ellipse cx="479.5" cy="318.5" rx="118.5" ry="118.5" transform="rotate(-90 479.5 318.5)" fill="#3C459A" fill-opacity="0.5"></ellipse>
                  </g>
                  <mask id="mask0_1_167"  maskUnits="userSpaceOnUse" x="0" y="32" width="960" height="573">
                    <rect y="32" width="960" height="573" fill="url(#paint0_radial_1_167)"></rect>
                  </mask>
                  <g mask="url(#mask0_1_167)">
                    <rect x="123.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="439.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="518.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="41.5" width="79" height="79" fill="white" fill-opacity="0.25" stroke="white"></rect>
                    <rect x="676.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="41.5" width="79" height="79" stroke="white"></rect>
                    <rect x="123.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="439.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="518.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="676.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="120.5" width="79" height="79" stroke="white"></rect>
                    <rect x="123.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="439.5" y="199.5" width="79" height="79" fill="white" fill-opacity="0.25" stroke="white"></rect>
                    <rect x="518.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="199.5" width="79" height="79" fill="white" fill-opacity="0.25" stroke="white"></rect>
                    <rect x="676.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="199.5" width="79" height="79" stroke="white"></rect>
                    <rect x="123.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="439.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="518.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="676.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="278.5" width="79" height="79" stroke="white"></rect>
                    <rect x="123.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="357.5" width="79" height="79" fill="white" fill-opacity="0.25" stroke="white"></rect>
                    <rect x="439.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="518.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="676.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="357.5" width="79" height="79" stroke="white"></rect>
                    <rect x="123.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="439.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="518.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="676.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="436.5" width="79" height="79" stroke="white"></rect>
                    <rect x="123.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="202.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="281.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="360.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="439.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="518.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="597.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="676.5" y="515.5" width="79" height="79" stroke="white"></rect>
                    <rect x="755.5" y="515.5" width="79" height="79" stroke="white"></rect>
                  </g>
                  <defs>
                    <filter id="filter0_f_1_167" x="161" y="1.14441e-05" width="637" height="637" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_167"></feGaussianBlur>
                    </filter>
                    <radialGradient id="paint0_radial_1_167" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(480 318.5) rotate(90) scale(353.19 591.732)">
                      <stop stop-color="#D9D9D9" stop-opacity="0.2"></stop>
                      <stop offset="0.802083" stop-color="#D9D9D9" stop-opacity="0"></stop>
                    </radialGradient>
                  </defs>
                </svg>

                {your page / component}
              </section>
  );
}

```

#### 
View background:

![Captura de tela de 2024-03-04 12-03-21](https://github.com/Icegreeen/blog-graphQL/assets/56550632/70b93d81-ac2b-499d-ab0a-08f6c6cc49be)

### Mobile and Desktop:

![Macbook-Air-localhost (2) (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/57737e43-9073-442e-8674-7f502aef8a78)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
