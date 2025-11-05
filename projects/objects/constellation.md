---
title: "Constellation"
type: "objects"
date: "2024-09-02"
image: "https://github.com/user-attachments/assets/0a1b1fad-317b-4e08-94aa-c1c46c2db851"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
export default function Home() {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#050505',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23222' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23222'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '35%',
        backgroundPosition: 'center center',
      }}
    >
    </div>
  );
}

```

View background:

![Captura de tela 2024-09-02 132012](https://github.com/user-attachments/assets/0a1b1fad-317b-4e08-94aa-c1c46c2db851)
![Captura de tela 2024-09-02 132217](https://github.com/user-attachments/assets/db10476e-0c2c-4ef9-9cbf-d619e0ad20ca)

Responsive: Mobile and desktop:

![Macbook-Air-localhost (1)](https://github.com/user-attachments/assets/224ac8cb-64b3-40ba-92df-26ff6c2991ab)


#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
