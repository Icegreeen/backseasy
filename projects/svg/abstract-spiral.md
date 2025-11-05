---
title: "Spiral"
type: "svg"
date: "2024-06-29"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/a30af170-9723-45eb-98ca-28eaf11eec54"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Download image here: [Download](https://drive.google.com/file/d/1Wwbmfcijens_H65HrF6Ck0iRtlP8Qk39/view?usp=sharing) ⭐ <br>
Resolution: (5824 × 3264) <br>
Extension: .png

Code:

/public/spiral.png

```
export default function Home() {
	return (
	  <section
		style={{
		  backgroundImage: `url(spiral.png)`,
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

![Captura de tela de 2024-06-29 02-01-33](https://github.com/Icegreeen/blog-graphQL/assets/56550632/6f345e72-355a-43d9-b888-3361478262de)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
