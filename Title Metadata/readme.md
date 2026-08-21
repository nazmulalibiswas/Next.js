###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Title Metadata
- In Next.js, how you configure the `<title>` and other metadata depends entirely on which router you are using. The modern App Router (`app/` directory) uses a powerful, built in Metadata API, while the legacy Pages Router (`pages/` directory) relies on a specific React component.

## Metadata Title Field (Advanced SEO)
- The main job of the `title` field in the metadata API is to define your document title (the text that appears in the browser tab).
- In Next.js, you can set the title using either a string or an object.
- The simplest way is using a string (like: `title: "Next.js by @nazmulalibiswas"`), which we explored previously. However, defining the title as an object gives you much more advanced control, especially when nesting layouts and pages.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`). Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest nextjs-title-metadata
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  TITLE METADATA/
  ├── nextjs-title-metadata/
  │   ├── .next/
  │   ├── app/
  │   ├── node_modules/
  │   ├── public/
  │   ├── .gitignore
  │   ├── AGENTS.md
  │   ├── CLAUDE.md
  │   ├── eslint.config.mjs
  │   ├── next-env.d.ts
  │   ├── next.config.ts
  │   ├── package-lock.json
  │   ├── package.json
  │   ├── postcss.config.mjs
  │   ├── README.md
  │   └── tsconfig.json
  └── readme.md
  ```
  - Notes: You can try to understanding from previous documentations project directory. So there is no need to create any of new directory.
- Now go to the main folder directory urls and type cmd and type in the console code . Now open the terminal and type here
```sh
cd nextjs-title-metadata
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
nextjs-title-metadata@0.1.0 dev
> next dev

▲ Next.js 16.3.0 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.0.103:3000
✓ Ready in 976ms
✓ Running next.config.ts took 195ms
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
```
## Advanced Title Control with Objects
- When you use the object approach for the `title` property in your Root Layout `(app/layout.tsx)`, you get three powerful options: `default`, `template`, and `absolute`.
    - (Note: First, ensure you import the `Metadata` type from Next.js for better TypeScript support).
    ```sh
    import { Metadata } from "next";
    ```

- 1. The `default` Title Property
  - The `title.default` property acts as a fallback for any child routes that do not specify their own title.
  - Inside your `app/layout.tsx` file:
  ```sh
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: {
      default: "import { Metadata } from "next";",
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  ```
  - Notes: If you have a child page (like `app/blog/page.tsx`) that does not export its own metadata, navigating to `/blog` will automatically show the default title: "Next.js Tutorial - @nazmulalibiswas".

- 2. The `template` Title Property
  - The `title.template` option is incredibly useful for multi-page applications where you want to add consistent prefixes or suffixes to your page titles.
  - The `%s` acts as a placeholder. Whatever string title a child page defines will replace the `%s`.
  - Update your `app/layout.tsx`:
  ```sh
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: {
      default: "Next.js by @namzulalibiswas",
      template: "%s | namzulalibiswas",
    },
  };
  ```
  - Now, define a simple string title in your child route (`app/blog/page.tsx`):
  ```sh
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Blog",
  };

  export default function Blog() {
    return <h1>Blog Page</h1>;
  }
  ```
  - Notes: The output in the browser tab for the `/blog` route will be: "Blog | nazmulalibiswas". The child page title ("Blog") successfully replaced the `%s` in the layout template.

  - 3. The `absolute` Title Property
    - Sometimes you want a specific page to break free from the template pattern set by its parent segments.
    - Using `title.absolute` will completely override and ignore the parent segment's template.
    - Update your child route (`app/blog/page.tsx`) to use the absolute object:
    ```sh
    import { Metadata } from "next";

    export const metadata: Metadata = {
      title: {
        absolute: "Blog",
      },
    };

    export default function Blog() {
      return <h1>Blog Page</h1>;
    }
    ```
    - Notes: Even though the Root Layout has the `%s | namzulalibiswas` template, navigating to `/blog` will now only display "Blog" in the browser tab. It breaks away from the template pattern nicely and cleanly.

## The Visualizations of the Folders
  ```sh
  app/
  ├── blog/
  │   └── page.tsx           <-- URL: /blog (Uses absolute title to break template)
  ├── favicon.ico
  ├── globals.css
  ├── layout.tsx             <-- Root Layout (Defines default & template title)
  └── page.tsx
  ```
  
# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

