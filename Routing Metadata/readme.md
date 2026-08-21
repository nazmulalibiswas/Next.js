###### Next.js with @nazmulalibiswas - The react framework for the Web!

## Routing Metadata
- In Next.js (specifically within the App Router), the Metadata API allows you to define SEO, social sharing tags (Open Graph/Twitter), and other `<head>` elements directly inside your route files (`layout.js` or `page.js`).

## SEO and Metadata in Next.js
- Search Engine Optimization (SEO) is crucial for web applications. The Metadata API in Next.js allows you to define metadata for each page, ensuring your content looks great when shared or indexed by search engines.
- Two ways to handle metadata in `layout.tsx` or `page.tsx` files. The App Router provides two ways to handle metadata in your `layout.tsx` or `page.tsx` files:
  - Exporting a static `metadata` object.
  - Exporting a dynamic `generateMetadata` function.

## Key Rules for Routing Metadata
  - Scope: Both `layout.tsx` and `page.tsx` can export metadata. Layout metadata applies to all its nested pages, while page metadata is specific only to that page.
  - Top Down Merging: Metadata follows a top down order. When metadata exists in multiple places along a route (like: in a root layout and a nested page), they merge together.
  - Priority: Deeper segments take priority. Page metadata will override layout metadata for matching properties (like the `title`).

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`). Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest nextjs-metadata
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  ROUTING METADATA/
  ├── nextjs-metadata/
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
cd nextjs-metadata
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
nextjs-metadata@0.1.0 dev
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
## Static Metadata Configuration
- Scenario: Defining basic metadata that does not change, such as the title for an "About" page.
- In your root `layout.tsx`, Next.js provides default metadata. It might look something like this:
```sh
export const metadata = {
  title: "Next.js with @nazmulalibiswas - The react framework for the Web!",
  description: "Created by @nazmulalibiswas",
};
```
- Now, create an `app/about/page.tsx` file and export a static metadata object to override the title:
```sh
export const metadata = {
  title: "About by @nazmulalibiswas",
};

export default function About() {
  return <h1>About Page</h1>;
}
```
  - Notes: In the browser, visiting `http://localhost:3000/about` and go to the inspect elemnts that will show the title "About by @nazmulalibiswas" (overriding the layout's title) but will keep the description "Created by @nazmulalibiswas" (merging with the layout's description).

## Dynamic Metadata Configuration
- Scenario: Metadata often depends on dynamic information, like route parameters (like: a specific product ID) or external data.
- To handle this, export an async `generateMetadata` function instead of a static object.
- Rule: You cannot use both a static `metadata` object and a `generateMetadata` function in the same route segment. It must be one or the other.
- Inside a dynamic route like `app/products/[productId]/page.tsx`:
```sh
import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  // Simulating fetching product details from a database/API
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return <h1>Product Details {productId}</h1>;
}
```
  - Notes: In the browser, navigating to `http://localhost:3000/products/16` will display the dynamically generated document title: "Product iPhone 16".

## Handling Metadata in Client Components
  - The Problem: There is a crucial limitation in Next.js: Metadata will not work in pages marked with the `"use client"` directive. If you try to export metadata from a file containing client side hooks (like `useState`), Next.js will throw an error.
  - The Solution: Keep your metadata in Server Components and extract any client side functionality into separate components.
  - Example Setup: Creating a Counter page.
  - 1. Create the client side UI logic in a separate file, `app/counter/Counter.tsx`:
    ```sh
    "use client";

    import { useState } from "react";

    export const Counter = () => {
      const [count, setCount] = useState(0);
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
    ```
  - 2. In your `app/counter/page.tsx` file (which remains a Server Component), define your metadata and import the client component:
    ```sh
    import { Counter } from "./Counter";

    export const metadata = {
      title: "Counter",
    };

    export default function CounterPage() {
      return (
        <div>
          <h1>Counter Page</h1>
          <Counter />
        </div>
      );
    }
    ``` 
    - Notes: By separating the client logic from the server page, the `/counter` route renders flawlessly, complete with interactive state and the correct "Counter" metadata title!
 
# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

