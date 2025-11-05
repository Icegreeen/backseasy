---
title: "Abstract green"
type: "svg"
date: "2024-04-26"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/25619a25-c6aa-4603-acea-f5b30c6e917a"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1fafYjW_I-x7QcK3o4ur6_R2cRUFYt3f_/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/abstract-green.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(abstract-green.png)`,
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

![Captura](https://github.com/Icegreeen/backseasy/assets/56550632/fe8c2da5-14e3-417a-9a6c-b0ea57765aee)

Responsive: Mobile and desktop:

![Macbook](https://github.com/Icegreeen/backseasy/assets/56550632/a219b98d-9567-4676-a255-13e2fa57dcb6)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
