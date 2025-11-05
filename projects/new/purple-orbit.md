---
title: "Purple Orbits"
type: "new"
date: "2025-11-05"
image: "https://github.com/user-attachments/assets/fa59771d-e264-4a6f-8f96-b338c7875b22"
---
#### How to implement:

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
            background-color: black;
        }
        
        .aura-background-component {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -10;
            height: 100%;
        }
        
        .aura-background-component [data-us-project] {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -10;
        }
        
        /* Background gradient */
        .gradient-overlay {
            position: fixed;
            inset: 0;
            z-index: -10;
        }
        
        .gradient-overlay div {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(to bottom, rgba(139, 92, 246, 0.2), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
        }
    </style>
</head>
<body>
    <!-- Background Unicorn Studio -->
    <div class="aura-background-component">
        <div data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>
    </div>
    
    <!-- Background gradient -->
    <div class="gradient-overlay">
        <div></div>
    </div>

    <script type="text/javascript">
        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    </script>
</body>
</html>

```

View background:

<img width="1717" height="902" alt="Image" src="https://github.com/user-attachments/assets/fa59771d-e264-4a6f-8f96-b338c7875b22" />

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
