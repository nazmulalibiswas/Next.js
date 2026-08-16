###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Nested Layouts
- Previously, we explored the Root Layout, which is shared across the entire application. However, Next.js also allows you to Nest Layouts.
- You can create specialized layouts for specific sections of your application by adding a `layout.tsx` file inside any nested folder.
- When you nest layouts, the child layout is rendered inside the parent layout's `children` prop.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`). Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest nested-layouts
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  NESTED LAYOUTS/
  ├── nested-layouts/
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
cd nested-layouts
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
nested-layouts@0.1.0 dev
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
## Implementing a Nested Product Details Layout
- Scenario: Let's say you want a special layout just for your product details pages (like: to show a "Featured Products" carousel), but you don't want this showing up on the main `/products` list page.
- Navigate to your product ID folder (`app/products/[productId]`) and create a new file named `layout.tsx`.
- Define and default export a React component that accepts a `children` prop:
  - Inside `app/products/[productId]/layout.tsx`:
  ```sh
  export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        {children}
        <h2>Featured products</h2>
      </>
    );
  }
  ```
  - Also Inside the `app/products/[productId]/layout.tsx`:
  ```sh
  export default async function ProductDetails({
  params,
  }: {
    params: Promise<{ productId: string}>;
  }) {
    const productId = (await params).productId;
    return <h1>Details about product {productId} </h1>;
  }
  ```
  - Notes: Just like the root layout, we are exporting a component with a `children` prop. In this case, `children` represents the actual `page.tsx` content for the specific product ID. We also added an `<h2>` heading for "Featured products".

## Understanding Layout Rendering Order
- Back in the browser, if you visit the root route (`http://localhost:3000`), you will only see the Root Layout (header, footer, and home page content).
- If you visit `http://localhost:3000/products`, you will see the Root Layout and the product list.
- The Magic: When you navigate to a specific product like `http://localhost:3000/products/1`, here is exactly what Next.js does:
  - 1. It renders the Root Layout (which provides the global Header and Footer).
  - 2. Inside the Root Layout's `children`, it renders the Product Details Layout (which adds the "Featured products" section).
  - 3. Inside the Product Details Layout's `children`, it renders the actual Page Content from `page.tsx` (which shows "Details about product 1").

## The Visualizations of the Folders
  - Here is how Next.js processes the nested file structure when a user visits `/products/1`:
  ```sh
  app/
  ├── layout.tsx                     <-- 1. ROOT LAYOUT (Header/Footer)
  ├── products/
  │   ├── [productId]/
  │   │   ├── layout.tsx             <-- 2. NESTED LAYOUT (Featured Products)
  │   │   └── page.tsx               <-- 3. PAGE CONTENT 
  ├── favicon.ico
  ├── globals.css
  └── page.tsx
    ```
  - UI Rendering Hierarchy for `/products/1`:
  ```sh
  <RootLayout>
    <Header />
    
    <ProductDetailsLayout>
      <ProductDetailsPage /> {/* The active page.tsx */}
      <h2>Featured products</h2>
    </ProductDetailsLayout>
    
    <Footer />
  </RootLayout>
  ```
  - Notes: If you navigate from `/products/1` to `/products/2`, only the `page.tsx` content gets replaced with the updated JSX. The layouts do not re-render, making navigation incredibly fast and efficient.

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

