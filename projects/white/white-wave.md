---
title: "Wave"
type: "white"
date: "2024-03-03"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/ee2a44c0-e329-4b00-bd85-61cb0014cbbb"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```

export default function Home() {
  return (
    <>  
         <section className="relative flex flex-col items-center h-screen bg-[#fff] overflow-hidden clash-grotesk">
                <svg className="absolute opacity-30" width="2321" height="1350" viewBox="0 0 1681 978" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_1503_1700" style={{maskType: `alpha`}} maskUnits="userSpaceOnUse" x="0" y="0" width="1681" height="978">
                    <path d="M0.5 0L1680.5 0V768L0.5 978V0Z" fill="#1C1740"></path>
                  </mask>
                  <g mask="url(#mask0_1503_1700)">
                    {/*
                    <path d="M0.5 0L1680.5 0V768L0.5 978V0Z" fill="#0E0D17"></path>
                    */}
                    <g filter="url(#filter0_f_1503_1700)">
                      <path d="M2156.05 -606.341C2156.05 -606.341 2075.29 25.8064 1731.15 201.252C1394.62 372.826 1152.78 -75.6031 819.09 101.068C485.521 277.673 743.525 703.193 419.536 895.252C70.69 1102.05 -575.501 838.969 -575.501 838.969" stroke="url(#paint0_angular_1503_1700)" stroke-width="325.413" stroke-linecap="round"></path>
                    </g>
                    <g filter="url(#filter1_f_1503_1700)">
                      <path d="M2290.69 543.196C2290.69 543.196 1863.83 968.178 1555.06 879.367C1253.1 792.517 1378.97 298.802 1075.64 217.624C772.419 136.477 669.857 623.3 363.039 559.967C32.6814 491.774 -191.789 -121.981 -191.789 -121.981" stroke="url(#paint1_angular_1503_1700)" stroke-width="325.413" stroke-linecap="round"></path>
                    </g>
                    <g style={{mixBlendMode: `overlay`}} filter="url(#filter2_f_1503_1700)">
                      <path d="M1743.11 788.778C1743.11 788.778 1440.79 1023.51 1207.37 957.41C979.098 892.767 1054.54 604.218 825.457 542.894C596.459 481.592 538.127 767.036 307.109 716.187C58.3658 661.436 -131.751 286.41 -131.751 286.41" stroke="url(#paint2_angular_1503_1700)" stroke-width="325.413" stroke-linecap="round"></path>
                    </g>
                    <g filter="url(#filter3_f_1503_1700)">
                      <path d="M398.746 1256.29C398.746 1256.29 374.987 904.578 532.709 802.487C686.949 702.649 856.582 947.979 1008.85 845.354C1161.05 742.766 985.518 510.366 1131.24 399.342C1288.15 279.799 1645.24 416.706 1645.24 416.706" stroke="url(#paint3_angular_1503_1700)" stroke-width="325.413" stroke-linecap="round"></path>
                    </g>
                    <g style={{mixBlendMode: `soft-light`}} opacity="0.5">
                      <path d="M0.5 422L1919.5 182.5V-57L0.5 182.5V422Z" fill="url(#paint4_linear_1503_1700)"></path>
                    </g>
                    <g style={{mixBlendMode: `soft-light`}} opacity="0.5">
                      <path d="M1630.5 218L-364.5 467.5L-364.5 717L1630.5 467.5L1630.5 218Z" fill="url(#paint5_linear_1503_1700)"></path>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_f_1503_1700" x="-870.685" y="-896.931" width="3321.89" height="2162.05" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
                    </filter>
                    <filter id="filter1_f_1503_1700" x="-483.427" y="-416.166" width="3065.71" height="1601.89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
                    </filter>
                    <filter id="filter2_f_1503_1700" x="-423.376" y="-7.76707" width="2458.08" height="1271.04" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
                    </filter>
                    <filter id="filter3_f_1503_1700" x="102.081" y="60.0571" width="1838.6" height="1486.55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
                    </filter>                 
                    <radialGradient id="paint0_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(918.431 340.19) rotate(-119.789) scale(257.962 1544.32)">
                      <stop stop-color="#FF7BDA"></stop>
                      <stop offset="0.354167" stop-color="#BFDEF8"></stop>
                      <stop offset="0.604167" stop-color="#5840FA"></stop>
                      <stop offset="0.806766" stop-color="#BFDEF8"></stop>
                      <stop offset="1" stop-color="#5840FA"></stop>
                    </radialGradient>
                    <radialGradient id="paint1_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(991.002 461.861) rotate(-76.9047) scale(257.962 1284.31)">
                      <stop stop-color="#FF7BDA"></stop>
                      <stop offset="0.354167" stop-color="#BFDEF8"></stop>
                      <stop offset="0.604167" stop-color="#5840FA"></stop>
                      <stop offset="0.806766" stop-color="#BFDEF8"></stop>
                      <stop offset="1" stop-color="#5840FA"></stop>
                    </radialGradient>
                    <radialGradient id="paint2_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(771.464 684.678) rotate(-76.9047) scale(151.011 969.963)">
                      <stop stop-color="#FF7BDA"></stop>
                      <stop offset="0.354167" stop-color="#BFDEF8"></stop>
                      <stop offset="0.604167" stop-color="#5840FA"></stop>
                      <stop offset="0.806766" stop-color="#BFDEF8"></stop>
                      <stop offset="1" stop-color="#5840FA"></stop>
                    </radialGradient>
                    <radialGradient id="paint3_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(933.516 714.121) rotate(54.1329) scale(151.011 751.026)">
                      <stop stop-color="#FF7BDA"></stop>
                      <stop offset="0.354167" stop-color="#BFDEF8"></stop>
                      <stop offset="0.604167" stop-color="#5840FA"></stop>
                      <stop offset="0.806766" stop-color="#BFDEF8"></stop>
                      <stop offset="1" stop-color="#5840FA"></stop>
                    </radialGradient>
                    <linearGradient id="paint4_linear_1503_1700" x1="1933.78" y1="34.2379" x2="37.7558" y2="320.803" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"></stop>
                      <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint5_linear_1503_1700" x1="-379.344" y1="621.953" x2="1591.95" y2="324.626" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"></stop>
                      <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>

               {your page / component} 
            </section>   
        </>
  );
}

```

View background:

![Captura de tela de 2024-03-15 16-04-26](https://github.com/Icegreeen/blog-graphQL/assets/56550632/5f6d71b5-d336-4004-985a-b16d8d792309)

Responsive: Mobile and desktop:

![333333333333](https://github.com/Icegreeen/blog-graphQL/assets/56550632/53e2fe10-371f-46f7-b230-61cfde80305a)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).
