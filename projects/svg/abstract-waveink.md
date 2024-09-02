---
title: "Waveink"
type: "svg"
date: "2024-06-29"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/ffa6d3b3-acb2-4ebb-a7d7-699ef8cdf670"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1FU8m23EqY4oIXqDH7F6qyxnCqirxNQJ2/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/waveink.png

```
export default function Home() {
	return (
	  <section
		style={{
		  backgroundImage: `url(waveink.png)`,
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

![Captura de tela de 2024-06-29 02-10-51](https://github.com/Icegreeen/blog-graphQL/assets/56550632/ede20e8c-d173-4a2f-8d4c-26ee2bd61522)
#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).