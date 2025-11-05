---
title: "Black wave"
type: "svg"
date: "2024-05-09"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/023e749e-e61c-4906-be0b-60a814ace309"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1ST5I6meGUjPvK9YixwWHmXaF4CBB8gH5/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/abstract-black-wave.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(abstract-black-wave.png)`,
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

![Captura](https://github.com/Icegreeen/backseasy/assets/56550632/a5cdcd41-7125-4de2-aa1c-05b4ac77febf)

Responsive: Mobile and desktop:

![Macbook](https://github.com/Icegreeen/backseasy/assets/56550632/dc43465e-db4c-4afe-ba61-0a66199eba46)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.