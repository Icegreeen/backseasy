---
title: "Esmerald"
type: "atmosphere"
date: "2024-06-29"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/bb50aec0-42e7-4a26-b224-8a98411afc9b"
---
#### How to implement:

With tailwind installed in your project (tutorial), implement these tailwind classes in your parent div where it will reflect the background.

```
export default function background() {
  return (
    <div className="relative flex flex-col h-screen bg-gradient-to-t from-emerald-950 to-neutral-950">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="400 50 1000 560"
          className=""
        >
          <g opacity="0.1">
            <path
              stroke="url(#paint0_linear_757_2083)"
              d="M1400 615c0-276.142-223.86-500-500-500-276.142 0-500 223.858-500 500"
            ></path>
            <path
              stroke="url(#paint1_linear_757_2083)"
              d="M1325 615c0-234.721-190.28-425-425-425-234.721 0-425 190.279-425 425"
            ></path>
            <path
              stroke="url(#paint2_linear_757_2083)"
              d="M1250 615c0-193.3-156.7-350-350-350S550 421.7 550 615"
            ></path>
            <path
              stroke="url(#paint3_linear_757_2083)"
              d="M1175 615c0-151.878-123.12-275-275-275-151.878 0-275 123.122-275 275"
            ></path>
            <circle cx="1314.5" cy="335.5" r="4.5" fill="currentColor"></circle>
            <circle cx="656.5" cy="267.5" r="4.5" fill="currentColor"></circle>
            <circle cx="677.5" cy="453.5" r="4.5" fill="currentColor"></circle>
            <circle cx="1205.5" cy="444.5" r="4.5" fill="currentColor"></circle>
            <circle cx="463.5" cy="371.5" r="4.5" fill="currentColor"></circle>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_757_2083"
              x1="900"
              x2="900"
              y1="115"
              y2="615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_757_2083"
              x1="900"
              x2="900"
              y1="190"
              y2="615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_757_2083"
              x1="900"
              x2="900"
              y1="265"
              y2="615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_757_2083"
              x1="900"
              x2="900"
              y1="340"
              y2="615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor"></stop>
              <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

	  { your component / page}
    </div>
  );
}


```

#### 
View background:

![Captura de tela de 2024-06-29 00-58-59](https://github.com/Icegreeen/blog-graphQL/assets/56550632/0e28acae-825c-45d3-879c-b5ae124d84c6)

### Mobile and Desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/blog-graphQL/assets/56550632/284baefd-5b8d-480c-8f33-425eb6e4e9cc)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
