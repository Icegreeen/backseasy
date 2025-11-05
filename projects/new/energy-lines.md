---
title: "Energy Lines"
type: "new"
date: "2025-10-31"
image: "https://github.com/user-attachments/assets/016c3b1a-3d3e-414e-a8ef-3ad08764fd02"
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
            margin: 0;
            padding: 0;
        }
        
        body {
            position: relative;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        [data-us-project] {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
            will-change: transform;
            transform: translateZ(0);
            pointer-events: none !important;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            contain: layout style paint;
            isolation: isolate;
        }
        
        [data-us-project] * {
            pointer-events: none !important;
        }
    </style>
</head>
<body>
    <div data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div>

    <script type="text/javascript">
        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    </script>
</body>
</html>
```

View background:

<img width="2214" height="1194" alt="Image" src="https://github.com/user-attachments/assets/016c3b1a-3d3e-414e-a8ef-3ad08764fd02" />

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
