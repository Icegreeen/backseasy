---
title: "Glassmorphism"
type: "objects"
date: "2024-09-02"
image: "https://github.com/user-attachments/assets/cabaa7d7-1a78-42fb-8370-958c82dc81ae"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
import React from 'react';

const GlassBackground = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="relative flex justify-center items-center h-[600px] w-[1000px] z-10 backdrop-blur-sm bg-white/10 p-10 rounded-2xl shadow-lg border border-white/30">
      
      </div>
    </div>
  );
};

export default GlassBackground;

```

View background:

![Captura de tela 2024-09-02 123625](https://github.com/user-attachments/assets/cabaa7d7-1a78-42fb-8370-958c82dc81ae)
![Captura de tela 2024-09-02 123655](https://github.com/user-attachments/assets/ddf97f20-c01b-4e0f-8f2a-54caf7e6ea12)

Responsive: Mobile and desktop:

![Macbook-Air-localhost](https://github.com/user-attachments/assets/2331e91d-b7c2-4a1b-a058-2d38ebd2ffc9)

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
