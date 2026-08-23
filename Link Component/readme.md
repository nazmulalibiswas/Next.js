###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Client Side Navigation with Link Component
- Previously, we explored the file based routing system (nested routes, dynamic routes, and catch all routes) by typing URLs directly in the browser. However, real users navigate websites by clicking on links.
- For client side navigation, Next.js provides the `<Link>` component. It is a React component that extends the standard HTML anchor (`<a>`) element and is the primary way to navigate between routes in Next.js.
- To use it, you must import it from `next/link`.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut `(CTRL + ~)`. Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest link-component
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  LINK COMPONENT/
  ├── link-component/
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
- Now go to the main folder directory urls and type cmd and type in the console code . Now open the terminal and type here
```sh
cd link-component
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
link-component@0.1.0 dev
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
## Implementing Client-Side Navigation
- Open your root `app/page.tsx` file to add links to navigate anywhere in your application.
- Import the `Link` component at the top of the file:
```sh
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
```
  - Notes: Notes: Head to the browser, and you will see clickable links for "Blog" and "Products" that take you right to those pages without a full page reload.

## Navigating Back to Home & Dynamic Links
- It's always good practice to help users get back to the homepage. Open the `page.tsx` file in your `products` folder.
- You can hardcode links for specific dynamic routes (like `/products/1`), or you can generate them dynamically using template literals for data coming from elsewhere (like an API or prop).
```sh
import Link from "next/link";

export default function ProductList() {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>

      <h2><Link href="/products/1">Product 1</Link></h2>
      <h2><Link href="/products/2">Product 2</Link></h2>

      {/* Dynamic Link generation */}
      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
```
  - Notes: Clicking the "Home" link points to the application's root `/`. Clicking "Product 100" creates a dynamic link that leads to the corresponding product page at `/products/100`.

## Understanding the Replace Prop
  - The Problem: Normally, clicking a link adds a new entry to your browser's navigation history. If you hit the back button, it takes you to the page you were just on.
  - The Solution (The `replace` prop): The Link component has a `replace` prop that changes how navigation history works by overriding the current history entry instead of adding a new one.
  - Add the `replace` prop to a link in your `products/page.tsx` file:
  ```sh
  <h2>
  <Link href="/products/3" replace>
    Product 3
  </Link>
  </h2>
  ```
    - `Notes: In the browser, start from the Home page -> click "Products" -> click "Product 3". You are now on the Details page. When you hit the browser's "Back" button, it takes you straight to the Homepage (skipping the Product List) because `replace` overrode the history entry!`

## The Visualizations of the Folders
  ```sh
  app/
  ├── blog/
  │   └── page.tsx           <-- URL: /blog
  ├── products/
  │   ├── [productId]/
  │   │   └── page.tsx       <-- URL: /products/[id] (Dynamic route target)
  │   └── page.tsx           <-- URL: /products (Contains dynamic Links & replace prop)
  ├── favicon.ico
  ├── globals.css
  ├── layout.tsx
  └── page.tsx               <-- URL: / (Contains basic Links to blog and products)
  ```

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

