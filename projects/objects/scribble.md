---
title: "Scribble"
type: "objects"
date: "2024-09-02"
image: "https://github.com/user-attachments/assets/d5931e8d-ef3b-4e58-8b27-b99ecba314d0"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
export default function Home() {
  return (
    <section
      className="relative z-[1] h-screen"
      style={{
        background: `linear-gradient(to right, #100119, #080707)`,
      }}
    >
      <div className="relative z-[2]">
        {/* Your content*/}
      </div>

      <figure
        className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden z-[1]"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-2/4 -translate-x-2/4 w-[134%] min-w-[1280px] max-w-[1980px] h-auto"
          viewBox="0 0 1920 450"
          fill="none"
        >
          <rect
            opacity="0.5"
            x="1410.61"
            y="42.6123"
            width="246.643"
            height="304.604"
            transform="rotate(-45 1410.61 42.6123)"
            fill="url(#bg-decoration-v1-fx-1-linear-1)"
          />
          <rect
            opacity="0.5"
            x="1176"
            y="-20.5969"
            width="246.643"
            height="304.604"
            transform="rotate(-45 1176 -20.5969)"
            fill="url(#bg-decoration-v1-fx-1-linear-2)"
          />
          <circle
            opacity="0.5"
            cx="1572"
            cy="205"
            r="46"
            fill="url(#bg-decoration-v1-fx-1-radial-1)"
          />
          <g opacity="0.5" filter="url(#bg-decoration-v1-fx-1-blur-1)">
            <circle cx="1680" cy="324" r="26" fill="#4338ca" />
          </g>
          <defs>
            <filter
              id="bg-decoration-v1-fx-1-blur-1"
              x="1644"
              y="288"
              width="72"
              height="72"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient
              id="bg-decoration-v1-fx-1-linear-1"
              x1="1533.93"
              y1="42.6123"
              x2="1533.93"
              y2="347.217"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9ca3af" />
              <stop offset="1" stopColor="#9ca3af" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-1-linear-2"
              x1="1299.32"
              y1="-20.5969"
              x2="1299.32"
              y2="284.007"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9ca3af" />
              <stop offset="1" stopColor="#9ca3af" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="bg-decoration-v1-fx-1-radial-1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1572 205) rotate(90) scale(46)"
            >
              <stop stopColor="#4338ca" stopOpacity="0" />
              <stop offset="1" stopColor="#4338ca" />
            </radialGradient>
          </defs>
        </svg>
      </figure>
    </section>
  );
}

```

View background:

![Captura de tela 2024-09-02 020520](https://github.com/user-attachments/assets/871bc6c5-f72f-497b-875f-6283e4d529c3)

Responsive: Mobile and desktop:

![Macbook-Air-localhost](https://github.com/user-attachments/assets/ea80fc29-6ed1-4544-88ba-eb73d14181d6)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).