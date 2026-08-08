###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Nested Dynamic Routes
- In the Next.js App Router, in real-world applications you will often come across scenarios where you need to handle multiple dynamic segments in your routes (Nested Dynamic Routes).
- You create nested dynamic routes by nesting dynamic folders (folders wrapped in square brackets like `[productId]` and `[reviewId]`) inside one another.
- Create a folder 'Routing' Now open the VS code Editor and open terminal from keyboard  `(CTRL + ~ )` button also select there `Command Prompt`
  -Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest nested-dynamic-routes
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  Nested Dynamic Routes/
  ├── nested-dynamic-routes/
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
cd nested-dynamic-routes
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
nested-dynamic-routes@0.1.0 dev
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
- Now run for `http://localhost:3000` copy it & paste it on any of the web browser. or press `ctrl` and click on the link then redirect it on the default web browser.

- Nested Dynamic routes (Scenario 5)
  - Nested dynamic routes allow handling complex paths like displaying product details at `http://localhost:3000/products/1` as well as a specific review for that product at `http://localhost:3000/products/1/reviews/1`.
  - Now create the folder in the app folder directory `products` folder and keep the file `page.tsx` for the main products list:
  ```sh
  export default function Products() {
  return <h1>Products List</h1>;
  }
  ```
  - Next, create a dynamic folder `[productId]` inside the `products` folder and keep `page.tsx` to display product details:
  ```sh
  export default async function ProductDetails({
    params,
  }: {
    params: Promise<{ productId: string }>;
  }) {
    const { productId } = await params;
    return <h1>Details about product {productId}</h1>;
  }
  ```
  - Notes: Now navigating to `http://localhost:3000/products/1` shows `"Details about product 1"`.
  - To tackle `http://localhost:3000/products/1/reviews/1,` first create a `reviews` folder inside the `[productId]` folder.

- Exercise Note: Inside `app/products/[productId]/reviews/,` you can also create a `page.tsx` file to display a list of reviews for that product:
  ```sh
  export default async function ReviewsList({
    params,
  }: {
    params: Promise<{ productId: string }>;
  }) {
    const { productId } = await params;
    return (
      <div>
        <h1>Reviews for Product {productId}</h1>
        <ul>
          <li>Review 1</li>
          <li>Review 2</li>
          <li>Review 3</li>
        </ul>
      </div>
    );
  }
  ```
  - Now, to get a specific dynamic review ID, create another dynamic folder named `[reviewId]` inside the `reviews` folder, and place `page.tsx` inside it:
  ```sh
  export default async function ProductReview({
    params,
  }: {
    params: Promise<{ productId: string; reviewId: string }>;
  }) {
    const { productId, reviewId } = await params;
    return (
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    );
  }
  ```
  - Notes: If you navigate in the browser to `http://localhost:3000/products/1/reviews/1,` you will see `"Review 1 for product 1"`. If you change the URL to `http://localhost:3000/products/100/reviews/5,` it updates in real time to display `"Review 5 for product 100"`.
  ```sh
  Details about product iphone
  ```
- The visualizations of the folders
  ```sh
  app/
  ├── products/
  │   ├── [productId]/
  │   │   ├── reviews/
  │   │   │   ├── [reviewId]/
  │   │   │   │   └── page.tsx
  │   │   │   └── page.tsx
  │   │   └── page.tsx
  │   └── page.tsx
  ├── favicon.ico
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
  ```

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

