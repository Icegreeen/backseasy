
export const Background = `
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
`;