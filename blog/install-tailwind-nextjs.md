---
title: "How to install tailwind in your project. (Next.JS)"
type: "Getting tailwind"
author: "Flavio Áquila"
date: "2024-03-01"
image: "https://github.com/Icegreeen/blog-graphQL/assets/56550632/e786aad0-2787-4ea8-84f9-b64a92c0575b"
---

### How to Install Tailwind CSS in Next.js: A Step-by-Step Guide.

Tailwind CSS is a popular web development tool that allows you to create elegant and responsive interfaces with ease. When combined with Next.js, a React framework for building web applications, you can quickly create modern, efficient projects. In this tutorial, we will cover how to install and configure Tailwind CSS in a Next.js project.

### Step 1: Create a new Next.js project

If you don't already have a Next.js project, start by creating a new one. Open your terminal and run the following commands:

```
npx create-next-app my-project
cd my-project
```

### Step 2: Install Tailwind CSS

To install Tailwind CSS, you will need to add the necessary dependencies to your project. Run the following command in the terminal inside your Next.js project folder:

```
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

### Step 3: Configure Tailwind CSS

After installing the dependencies, you need to configure Tailwind CSS. Create a configuration file for Tailwind by running the following command:

```
npx tailwindcss init -p

```

Isso criará um arquivo chamado `tailwind.config.js` na raiz do seu projeto.

### Step 4: Configure PostCSS

Next.js uses PostCSS to process styles, so you need to configure it to include Tailwind CSS. Create or edit the postcss.config.js file in the root of your project and add the following code:

```
module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
}

```

### Step 5: Import Tailwind CSS into your project

Now that Tailwind CSS is installed and configured, you can import it into your styles. Open the `styles/globals.css` file that was automatically created by Next.js and add the following code to import the Tailwind CSS:

```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

```

### Step 6: Use Tailwind CSS in your components

Agora que tudo está configurado, você pode começar a usar as classes do Tailwind CSS nos seus componentes React. Por exemplo, você pode adicionar classes diretamente nos elementos JSX dentro dos seus componentes:

```
import React from 'react'

const MyComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hi, how are you ?</h1>
      <p className="mt-2">This is example how to use TailwindCSS with NextJS.</p>
    </div>
  )
}

export default MyComponent

```

### Step 7: Run your Next.js project

Finally, you can launch your Next.js server and preview your project with Tailwind CSS applied. In the terminal, run the following command in your project folder:

```
npm run dev
```

This will start the Next.js development server. Open your browser and go to http://localhost:3000 to see your project in action.

Congratulations! Now you've successfully configured Tailwind CSS in a Next.js project and can start creating amazing interfaces quickly and efficiently. Continue exploring the Tailwind CSS documentation to discover more useful classes and features.


### Note

If this content has served you in any way, consider following me on [Github.](https://github.com/Icegreeen) or supporting me to continue working at BacktoEasy.

Any questions, criticisms or improvements, please suggest them through my [Linkdin.](https://www.linkedin.com/in/flavioaquila/).