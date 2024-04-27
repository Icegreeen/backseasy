---
title: "Glossy"
type: "svg"
date: "2024-04-26"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/4908cbb2-6f2a-4723-b2b7-b638e1aa1108"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1W9Lee9ON7XT4M90xDYwo7pXl249hhfBo/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/abstract-glossy.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(abstract-glossy.png)`,
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

![Captura](https://github.com/Icegreeen/backseasy/assets/56550632/5f77ee60-ae1f-43fe-8fdf-bdbbdff64a23)

Responsive: Mobile and desktop:

![Macbook](https://github.com/Icegreeen/backseasy/assets/56550632/a616fae4-665f-454e-9f1e-fd0384fb5e6f)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).