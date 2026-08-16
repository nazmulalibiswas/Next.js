###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Layouts in Next.js
- Pages are route specific UI components
- A layout is UI that is shared between multiple pages in your app
  - HEADER
  - CONTENT
  - FOOTER
- While pages are UI components specific to a single route, a Layout is UI that is shared between multiple pages in your application.
- Think of a layout like a consistent outer shell such as a persistent header and footer that surrounds and contains your individual page content.
- To create a layout, you simply default export a React component from a `layout.tsx` (or `layout.js`) file. This component must accept a  `children` prop, which Next.js will automatically populate with your active page content.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`). Select `Command Prompt`.
  - Give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest nextjs-layouts
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation, the codebase will match this Next.js project directory structure:
  ```sh
  NEXTJS LAYOUTS/
  ├── nextjs-layouts/
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
- Now go to the main folder directory in the terminal:
```sh
cd nextjs-layouts
```
- Start the development server:
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
nextjs-layouts@0.1.0 dev
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
## Understanding the Root Layout
- Next.js provides a default layout for you. In your `app` folder, you will find `layout.tsx`.
- This specific `layout.tsx` file in the root `app` directory is called the Root Layout, and it is not optional. Every Next.js App Router application must have one.
  - Fun Fact: Next.js is so strict about this requirement that if you delete the Root Layout and refresh your browser, Next.js will automatically regenerate the file for you!
- Every layout component needs a `children` prop. When `layout.tsx` renders, the `page.tsx` file active for the current URL is passed into that `children` prop.

## Adding a Header and Footer
- Let's make the default root layout more useful by adding a global header and footer. Open `app/layout.tsx` and update it:
  ```sh
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <header
            style={{
              backgroundColor: "lightblue",
              padding: "1rem",
            }}
          >
            <p>Header</p>
          </header>

          {/* This is where your individual pages will render */}
          {children} 

          <footer
            style={{
              backgroundColor: "ghostwhite",
              padding: "1rem",
            }}
          >
            <p>Footer</p>
          </footer>
        </body>
      </html>
    );
  }
  ```
  - Also update the `page.tsx`
    ```sh
    export default function Home() {
      return (
        <h1>Welcome home!</h1>
      );
    }
    ```
  - Also check for content create a `products` in the app directory and create a file about `page.tsx` and paste into the code:
    ```sh
    export default function ProductList() {
      return (
        <>
          <h1>Product list</h1>
          <h2>Product 1</h2>
          <h2>Product 2</h2>
          <h2>Product 3</h2>
        </>
      );
    }
    ```
  - Notes:
    - Check your browser at `http://localhost:3000`. You will see the blue Header at the top, the Footer at the bottom, and your home page content sandwiched in between.
    - The Power of Layouts: The cool part is that these elements stay in place no matter which route you visit! Try navigating to `/about` or `/products` the header and footer remain constant while only the inner `children` content changes.
## The Visualizations of the Folders
  ```sh
  app/
  ├── products/
  │   └── page.tsx
  ├── favicon.ico
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
  ```
  - When a user visits different routes, the Root Layout acts as a persistent wrapper.
  - URL: `http://localhost:3000/`
    - Root Layout (`app/layout.tsx`) renders `Header -> children -> Footer`
    - `children` is populated by `app/page.tsx`.
  - URL: `http://localhost:3000/products`
    - Root Layout (`app/layout.tsx`) renders `Header -> children -> Footer`
    - `children` is populated by `app/products/page.tsx`.

## Challenge
  - Try creating your own custom `Header` and `Footer` components in a separate `components` folder and importing them into your `RootLayout` instead of using inline HTML/CSS! Let me know how it goes in the comments.

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

