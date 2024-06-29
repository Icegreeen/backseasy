---
title: "Neon"
type: "svg"
date: "2024-06-29"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/7d1df860-2e83-4a18-8b15-52991f9295a2"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1ie7FOOZqfphpN3ahrmTbZ0VhXj0vhldk/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/neon.jpeg

```
export default function Home() {
	return (
	  <section
		style={{
		  backgroundImage: `url(neon.jpeg)`,
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

![Captura de tela de 2024-06-29 02-00-27](https://github.com/Icegreeen/blog-graphQL/assets/56550632/7bbdb4c3-a9ad-4ec9-9ba6-f7ba75bc1e0e)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).