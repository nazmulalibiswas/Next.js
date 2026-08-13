###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Introduction to Custom 404 Pages
- By default, when you visit a route that doesn't exist in your `app` folder (like: `http://localhost:3000/building`) Next.js displays a basic 404 page.
- While this default page is fine for development, you will typically want to customize it for production so it matches your sites branding and design.
- To create a custom global 404 page, simply create a file named exactly `not-found.tsx` (or `.js`) in the root of your `app` directory. Next.js relies on this specific naming convention.

## Setting Up & Implementation
- Create a folder 'NOT FOUND PAGE' Now open the VS code Editor and open terminal from keyboard  `(CTRL + ~ )` button also select there `Command Prompt`
  - Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest not-found-page
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  NOT FOUND PAGE/
  ├── not-found-page/
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
cd not-found-page
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
not-found-page@0.1.0 dev
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
## Implementing the Custom 404 Page
- Create a new file in the`app` folder inside your app directory.
- Inside `app`, create a file `not-found.tsx`
  ```sh
  export default function NotFound() {
    return (
      <div>
        <h2>Page not found</h2>
        <p>Could not find requested resource</p>
      </div>
    );
  }
  ```
  - Notes: Once saved, refreshing a non existent URL will now show this custom component instead of the default Next.js 404 page.

## Triggering 404 Programmatically & Specific 404 Pages for Sections

- Programmatic Not Found & Scoped Not Found Pages - While Next.js automatically triggers the `not-found.tsx` file for unmatched routes, you can also trigger it programmatically using the `notFound()`function. Furthermore, you can create specific Not Found pages for different sections of your app.
- Programmatically Triggering `notFound()` - Scenario of imagine a product review system limited to a maximum of 1,000 reviews. You want to show a 404 page if a user requests a review ID greater than 1,000.
- Inside your `[reviewId]/page.tsx` file, import and call the `notFound` function.
  ```sh
  import { notFound } from "next/navigation";

  export default async function ProductReview({
    params,
  }: {
    params: Promise<{ productId: string; reviewId: string }>;
  }) {
    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
      notFound();
    }

    return (
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    );
  }
  ```
  - Copy the main directory `not-found.tsx` and also Now changes to the `not-found.tsx` aboout
  ```sh
  export default function NotFound() {
    return (
      <div>
        <h2>Review not found</h2>
      </div>
    );
  }
  ```
  - Notes: When `http://localhost:3000/products/1/reviews/1001` visiting this routing now showing here
  ```sh
  Review not found
  ```
## Handling Route Parameters in 404 and Fixing Client Component Errors
  - The Problem: The `notFound` component does not accept standard route `params` as props.
  - The Solution: If you need to display dynamic route parameters (like the `productId` and `reviewId`) in your 404 message, you must extract them from the URL using the `usePathname` hook.
  - Because hooks only work in Client Components (Next.js App Router components are Server Components by default), you must add the `"use client"` directive at the top of the file.

  - Update the specific `not-found.tsx` inside the `[reviewId]` folder:
  ```sh
  "use client";

  import { usePathname } from "next/navigation";

  export default function NotFound() {
    const pathname = usePathname();
    
    // Extract route parameters by splitting the URL path
    // Example path: /products/1/reviews/1001
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
      <div>
        <h2>
          Review {reviewId} not found for product {productId}
        </h2>
      </div>
    );
  }
  ```
## The Visualizations of the Folders
  ```sh
  app/
  ├── not-found.tsx           <-- Global 404 Page
  ├── products/
  │   ├── [productId]/
  │   │   ├── reviews/
  │   │   │   ├── [reviewId]/
  │   │   │   │   ├── not-found.tsx  <-- Scoped 404 Page
  │   │   │   │   └── page.tsx       <-- Programmatic notFound() trigger
  │   │   │   └── page.tsx
  │   │   └── page.tsx
  │   └── page.tsx
  ├── favicon.ico
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
  ```
  - Notes: (In this visualization, any URL containing `/docs` including just `/docs` itself will be routed to the `page.tsx` inside the `[[...slug]]` folder).

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

