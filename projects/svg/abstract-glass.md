---
title: "Glass"
type: "svg"
date: "2024-04-26"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/227fa61d-82ef-4303-9f58-2578d6abe0d2"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1k-oGA7TmpHNl6Vg476MldRrpVJnzOldh/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/abstract-glass.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(abstract-glass.png)`,
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

![Captura](https://github.com/Icegreeen/backseasy/assets/56550632/654df229-48ca-40bc-8a2b-3ada3fbe399b)

Responsive: Mobile and desktop:

![Macbook](https://github.com/Icegreeen/backseasy/assets/56550632/9cbb229e-d5a5-4df4-b357-4d73fd248563)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).