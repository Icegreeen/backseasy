---
title: "Parabolic"
type: "objects"
date: "2024-09-03"
image: "https://github.com/user-attachments/assets/b40dfde0-2d95-4b4d-a51d-bacb39b1d7ee"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
import React from 'react';

const Background: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect fill='none' stroke-width='11' stroke-opacity='0.68' id='a' x='-400' y='-300' width='800' height='600'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(180 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%230d0416' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23150923' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23180d31' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%231c0f40' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%231f104f' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%2322115f' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%2324116f' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23251180' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23251191' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%232510a3' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%23230fb4' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23200dc7' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%231b09d9' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%231205ec' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%2300F' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      
    </div>
  );
};

export default Background;

```

View background:

![Captura de tela 2024-09-04 021630](https://github.com/user-attachments/assets/1a5c7354-e363-4e29-9452-c7d55cb296f6)

Responsive: Mobile and desktop:

![Macbook-Air-localhost](https://github.com/user-attachments/assets/d05ed7e8-ff00-4955-87ac-b7bef0ef1052)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
