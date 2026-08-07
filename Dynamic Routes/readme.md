###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Dynamic Routes
- In the Next.js App Router, when you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments.
- Now create dynamic routes by wrapping a folder's name in square brackets: `[folderName]`. For example, `[id]` or `[slug]`.
- Next.js has a file system based dynamic routing system
  -URLs you can access in your browser are determined by how you organize your files and folders, and dynamic segments allow multiple URLs to share the same layout and page components.
- Create a folder 'Routing' Now open the VS code Editor and open terminal from keyboard (CTRL + ~ ) button also select there Command Prompt
  - Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest dynamic-routes
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  Dynamic Routes/
  ├── dynamic-routes/
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
- Now go to the main folder directory urls and type `cmd` and type in the console `code .` Now open the terminal and type here
```sh
cd dynamic-routes
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
dynamic-routes@0.1.0 dev
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

- Dynamic routes (Scenario 4)
  - Dynamic routes allow paths like `http://localhost:3000/products` or `http://localhost:3000/products/id` also `http://localhost:3000/products/1`to be handled by a single file structure.
  - Now create the folder in the `app` folder directory `products` folder and keep the file `page.tsx` for the main products index:
  ```sh
  export default function ProductList(){
  return <>
    <h1>Product List</h1>
    <h1>Product 1</h1>
    <h1>Product 2</h1>
    <h1>Product 3</h1>
  </>
  }
  ```
  - In the folder of `products` create a folder in the directory of these `1` folder and keep the file `page.tsx` for the main products index:
  ```sh
  export default function ProductDetails() {
  return <h1>Details about product</h1>;
  }
  ```
  - Now crete the folder here about `[productID]` folder here create and type the default function 
  ```sh
  export default function ProductDetails(){
  return <h1>Details about product</h1>;
  }
  ```
  - Notes: If now we are visiting the `http://localhost:3000/products/1` here the page is showing and if we showing `/2` also `/3` if `/100` then showing on the same page and working all of as well. Because Next.js the folder name is the `[]` square bracket are making dynamic and flexible.
  - In the real app If we probably fetch the product details from an api based on this product id.

- Fetching and Displaying Product Details:
- Now Lets show which product we are looking now:
  - every page in the app rotuer which is receives route parameters `params`
  ```sh
  export default async function ProductDetails({ params }:{
    params: Promise<{ productId: string }>;
  }){
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
  }
  ```
  - Notes now the output will showing where in the url like visit here the link `http://localhost:3000/products/10` output page showing
  ```sh
  Details about product 10
  ```
  - If we are visiting the url link like the `http://localhost:3000/products/iphone` output page showing
  ```sh
  Details about product iphone
  ```
- Scenario 4 now successfully implemented
- Now the summarize of the session is if we created a folder with square bracket into the `[productid]` and into the `page.tsx` here the params props are showing the dynamic content.
- The visualizations of the folders
  ```sh
  app/
  ├── products/
  │   ├── [prodcutId]/
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

