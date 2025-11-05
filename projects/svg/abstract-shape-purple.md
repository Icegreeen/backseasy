---
title: "Shape purple"
type: "svg"
date: "2024-05-09"
image: "https://github.com/Icegreeen/backseasy/assets/56550632/14d59415-97b3-42aa-8c42-188cd0c8a37b"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1T5-Lj0stCREJBRadoaSdTUwwlXnkNqn8/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/abstract-shape-purple.png

```
export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(abstract-shape-purple.png)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat' 
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {your page / component}
    </section>
  );
}


```

View background:

![Captura](https://github.com/Icegreeen/backseasy/assets/56550632/a4cc4caf-74c2-4cce-bb66-b9cbdcf9083c)

Responsive: Mobile and desktop:

![Macbook](https://github.com/Icegreeen/backseasy/assets/56550632/733b3c75-dc1d-4601-820f-b5cf4808e7cf)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
