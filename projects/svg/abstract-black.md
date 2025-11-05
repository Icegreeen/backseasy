---
title: "Abstract black"
type: "svg"
date: "2024-04-26"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/a1b71648-6f93-4a19-a46e-e7c71a8e3e1d"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1Ia_XxUbLXBWuk3StEkUtcUIZtMIlyHmJ/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/abstract-black.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(abstract-black.png)`,
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

![Captura](https://github.com/Icegreeen/backseasy/assets/56550632/2ce5b58a-4b44-43b6-ab65-b70b4d27877d)

Responsive: Mobile and desktop:

![Macbook](https://github.com/Icegreeen/backseasy/assets/56550632/15f8015d-a384-4d33-a9f1-1990b6150d27)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
