###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Project Structure
- First of all need to understand the project structure and what make it everything applicable also how everything works
  ```sh
  project-structure/
  ├── .next/                  # Hidden folder for optimized, ready-to-run code
  ├── app/                    # The main workspace where you build your website
  │   ├── favicon.ico         # The tiny profile picture icon for your browser tab
  │   ├── globals.css         # Global design rules and paint for the whole site
  │   ├── layout.tsx          # The permanent structure/frame of your site
  │   └── page.tsx            # The actual content for your Home Page
  ├── node_modules/           # Storage room for all downloaded external tools
  ├── public/                 # Public folder for static assets like images and fonts
  ├── .gitignore              # Tells Git which files/folders to safely ignore
  ├── AGENTS.md               # Custom instructions for AI coding agents
  ├── CLAUDE.md               # Specific coding guidelines for the Claude AI
  ├── eslint.config.mjs       # Rules for the ESLint code-checking tool
  ├── next-env.d.ts           # Helps TypeScript understand Next.js features
  ├── next.config.ts          # The main control panel and settings for Next.js
  ├── package-lock.json       # Locks down exact versions of your installed tools
  ├── package.json            # The "ID card" and instruction manual for your app
  ├── postcss.config.mjs      # Configuration for processing your CSS/Tailwind
  ├── README.md               # The welcoming front page and setup manual
  └── tsconfig.json           # The rulebook for your TypeScript code
  ```
  - In the root folder into there are four folder and eleven files. lets simplify one by one:
  - In the file of `package.json` The "ID card" and instruction manual of your project that lists the app's name, command scripts, and the exact packages it needs to work.
  ```sh
  {
    "name": "project-structure",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "eslint"
    },
    "dependencies": {
      "next": "16.3.0",
      "react": "19.2.8",
      "react-dom": "19.2.8"
    },
    "devDependencies": {
      "@tailwindcss/postcss": "^4",
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      "eslint": "^9",
      "eslint-config-next": "16.3.0",
      "tailwindcss": "^4",
      "typescript": "^5"
    }
  }
  ```
  - 1. The Project Identity
    - `name:` The name of your app. This is usually what you typed when you created the project.
    - `version:` Tracks the current version of your app. 0.1.0 is the standard starting point for a brand new project.
    - `private:` A safety feature. Setting this to true prevents you from accidentally publishing your personal project to the public internet (the npm registry).

  - 2. The Command Shortcuts (Scripts)
    - `dev:` Starts a local development server. This is the command you'll use the most! It lets you view your website on your computer and automatically updates the page when you save a file.
    - `build:` Packs up and optimizes your code when you are ready to put your website live on the internet. It makes everything as fast and small as possible.
    - `start:` Runs the optimized version of your app created by the build command. You usually only use this when testing how the live site will behave.
    - `lint:` Scans your code for formatting mistakes, typos, or bad practices and points them out to you.

  - 3. The Core Engine (Dependencies)
    - `next:` The Next.js framework itself. It provides all the powerful features like routing and server-side rendering.
    - `react:` The core library used to build your user interface (buttons, text, images). Next.js is built on top of React.
    - `react-dom:` The "bridge" that allows React to talk to a web browser and actually display your components on a screen.

  - 4. The Developer's Toolbox (DevDependencies)
    - `tailwindcss & @tailwindcss/postcss:` Tools for styling your website. Tailwind lets you design beautiful pages quickly using utility classes instead of writing custom CSS files.
    - `typescript:` A stricter version of JavaScript that catches errors before you run your code.
    - `@types/...:` These act like a dictionary for TypeScript. They teach your code editor how Node, React, and React-DOM work so it can autocomplete your code and warn you if you use them incorrectly.
    - `eslint & eslint-config-next:` The actual "grammar police" tools that power the npm run lint command mentioned earlier. They ensure your code follows standard Next.js best practices.
  - Notes: Why it's an "ID Card": Just like a real ID card tells people who you are, the `package.json` file tells the computer and other developers the identity of your project. It holds the project's official name, its current version (like an age), and whether it is public or private.

  - In the file of `.gitignore:` Tells Git which files and folders (like node_modules or passwords) to ignore so they aren't accidentally saved to your public repository.
  
  - In the file of `AGENTS.md:` A custom documentation file used to provide instructions, context, or rules for AI coding agents interacting with your project.

  -  In the file of `CLAUDE.md:` A specific instruction file that gives Claude (an AI assistant) customized coding guidelines and project context to follow while helping you.

  -  In the file of `eslint.config.mjs:` Contains the rules for ESLint, the "grammar police" tool that automatically checks your code for mistakes and formatting errors.
  ```sh
  import { defineConfig, globalIgnores } from "eslint/config";
  import nextVitals from "eslint-config-next/core-web-vitals";
  import nextTs from "eslint-config-next/typescript";

  const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
      // Default ignores of eslint-config-next:
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ]),
  ]);

  export default eslintConfig;
  ```

  -  In the file of  `next-env.d.ts:` An automatically generated file that helps TypeScript properly understand Next.js specific features and types.
  ```sh
  /// <reference types="next" />
  /// <reference types="next/image-types/global" />
  import "./.next/types/routes.d.ts";
  import "./.next/types/root-params.d.ts";

  // NOTE: This file should not be edited
  // see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
  ```

  -  In the file of `next.config.ts:` The main control panel for your Next.js app where you can adjust settings for how your website is built and run.
  ```sh
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
  };

  export default nextConfig;
  ```

  -  In the file of `package-lock.json:` An automatically generated file that locks down the exact versions of all your tools so the app works identically on anyone else's computer.

  -  In the file of  `postcss.config.mjs:` The configuration file for PostCSS, a tool that helps process and optimize your CSS, often used to make Tailwind CSS work smoothly.
  ```sh
  const config = {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  };

  export default config;
  ```

-  In the file of `README.md:` The welcoming front page of your project where you write down what the app is and how a new developer can set it up.

-  In the file of `tsconfig.json:` The rulebook for TypeScript that tells it how strict to be with your code and how to translate it into standard JavaScript.

- Now let's deep dive the all of major project folders and its child files

- 1. `.next:` A hidden folder where Next.js automatically saves the optimized, ready to run versions of your code after you build or run your project.

- 2. `app:` The main workspace of your project where you will write your actual code, create new pages, and build the user interface.
  - The app directory is:
  ```sh
  ├── app/                    # The main workspace where you build your website
  │   ├── favicon.ico         # The tiny profile picture icon for your browser tab
  │   ├── globals.css         # Global design rules and paint for the whole site
  │   ├── layout.tsx          # The permanent structure/frame of your site
  │   └── page.tsx            # The actual content for your Home Page
  ```
  - `favicon.ico` (The Website's Profile Picture): This is the tiny little icon that appears on the top of your web browser's tab, right next to the title of your website. It helps users quickly find your tab when they have a lot of them open.

  - `globals.css` (The Global Paint and Wallpaper):
  This file holds the design rules (CSS) that apply to your entire website. If you want the background of every single page to be blue, or if you are setting up Tailwind CSS to style your whole project, you put those instructions here.

  - `layout.tsx` (The Picture Frame): Think of this as the permanent structure of your website, like the walls and foundation of a house. The layout.tsx file wraps around your pages. If you want a Navigation Bar at the very top of your screen, or a Footer at the very bottom that stays there no matter what page the user clicks on, you put it in here. It also holds essential, invisible web code like the `<html>` and `<body>` tags.

  - `page.tsx` (The Homepage Canvas): This file contains the actual content of the webpage. Because this specific page.tsx is sitting directly inside the main app folder, it acts as your website's Home Page. If you want to change the text, buttons, or images that visitors see the moment they go to yourwebsite.com, this is the file you edit!

- 3. `node_modules:` The storage room where all the external code, tools, and libraries you installed (your dependencies) are kept.

- 4. `public:` The public folder where you store static files like images, fonts, or icons that you want visitors to access directly.

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

