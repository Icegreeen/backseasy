---
title: "Strong"
type: "svg"
date: "2024-04-26"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/5e38e791-6cb9-4409-b8c7-2aa869ba7c5c"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1UoH_tIViFPD0-bnNdPxaEtxkeRr_NNaI/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/strong.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(strong.png)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' 
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      
    {your page / component}
    </section>
  );
}

```

View background:

![Captura de tela 2024-04-26 152830](https://github.com/Icegreeen/backseasy/assets/56550632/ea7484c9-6e8a-4f84-b387-6c34bd140719)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1)](https://github.com/Icegreeen/backseasy/assets/56550632/6470276d-7c63-4d1d-9ad4-0318a405076e)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).