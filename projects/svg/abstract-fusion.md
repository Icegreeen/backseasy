---
title: "Fusion"
type: "svg"
date: "2024-06-29"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/73a51b52-0ada-42a1-8d91-8e93c0230c0b"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1LI6gE6C5PfJ4KaHm7cB77wWy3FQkdKUx/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/fusion.jpeg

```
export default function Home() {
	return (
	  <section
		style={{
		  backgroundImage: `url(fusion.jpeg)`,
		  backgroundSize: 'cover', 
		  backgroundPosition: 'center',
		  backgroundRepeat: 'no-repeat' 
		}}
		className="flex min-h-screen flex-col items-center justify-between p-24"
	  >
		
        {page / component}
	  </section>
	);
  }

```

View background:

![Captura de tela de 2024-06-29 01-59-25](https://github.com/Icegreeen/blog-graphQL/assets/56550632/da62c742-8a14-43ed-8352-67fd215e7c47)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
