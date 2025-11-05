---
title: "Chrome Ribbon"
type: "new"
date: "2025-10-31"
image: "https://github.com/user-attachments/assets/dc796883-90e4-45e7-8734-4655abd9e241"
---
#### How to implement:

With tailwind installed in your project [tutorial](https://backseasy.com/blog/install-tailwind-nextjs), implement these tailwind classes in your parent div where it will reflect the background.

Code:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html, body {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        
        body {
            position: relative;
        }
        
        .spline-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
        }
        
        .spline-container iframe {
            border: none;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <div class="spline-container">
        <iframe src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO" frameborder="0" width="100%" height="100%" id="aura-spline"></iframe>
    </div>
</body>
</html>

```

View background:

<img width="2399" height="1195" alt="Image" src="https://github.com/user-attachments/assets/dc796883-90e4-45e7-8734-4655abd9e241" />

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
