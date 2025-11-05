---
title: "Ellipse"
type: "objects"
date: "2024-09-03"
image: "https://github.com/user-attachments/assets/8884194b-796e-430c-83b6-b123b6c0f34c"
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='10.1' stroke-opacity='0.49' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg transform='scale(0.775)' style='transform-origin:center'%3E%3Cg transform='rotate(174.6 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%2327002B' href='%23a' transform='rotate(-60 0 0) scale(0.4)'/%3E%3Cuse stroke='%23300030' href='%23a' transform='rotate(-50 0 0) scale(0.5)'/%3E%3Cuse stroke='%233a0034' href='%23a' transform='rotate(-40 0 0) scale(0.6)'/%3E%3Cuse stroke='%23440038' href='%23a' transform='rotate(-30 0 0) scale(0.7)'/%3E%3Cuse stroke='%234e003c' href='%23a' transform='rotate(-20 0 0) scale(0.8)'/%3E%3Cuse stroke='%2359003f' href='%23a' transform='rotate(-10 0 0) scale(0.9)'/%3E%3Cuse stroke='%23640041' href='%23a'/%3E%3Cuse stroke='%236f0043' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%237a0044' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23850045' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23910044' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%239c0044' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23a70042' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23b10040' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23bc003e' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23c6003a' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23d00036' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%23d90032' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%23e2002c' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23ea0026' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%23f2001e' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%23f90013' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%23FF0000' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: '105%',
        backgroundPosition: 'center',
      }}
    >
        
    </div>
  );
};

export default Background;

```

View background:

![Captura de tela 2024-09-04 030423](https://github.com/user-attachments/assets/d394f2f7-f2be-42ea-8a7b-912fc427ccfd)

Responsive: Mobile and desktop:

![Macbook-Air-localhost](https://github.com/user-attachments/assets/66a35cbd-b406-45c3-a187-69fcbeae5f87)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
