---
title: "Glass List"
type: "new"
date: "2025-11-05"
image: "https://github.com/user-attachments/assets/9aa51de3-eceb-4957-be8f-6d129768fb51"
---
#### How to implement:

Code:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glass list</title>
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
        <iframe src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" frameborder="0" width="100%" height="100%" id="aura-spline"></iframe>
    </div>
</body>
</html>
```

View background:

<img width="2216" height="1050" alt="Image" src="https://github.com/user-attachments/assets/9aa51de3-eceb-4957-be8f-6d129768fb51" />

#### Note

If this background has served you in any way, consider following me on github or supporting me to continue working at BacksEasy.
