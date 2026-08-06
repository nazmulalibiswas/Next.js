###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Routing
- Next.js has a file system based routing system
  - URLs you can access in your browser are determined by how you organize your files and folders in your code
- Create a folder 'Routing' Now open the VS code Editor and open terminal from keyboard (CTRL + ~ ) button also select there `Command Prompt`
  - Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest routing
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:

  ```text
  Routing/
  ├── routing/
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
cd routing
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
routing@0.1.0 dev
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

- Routing Conventions
  - 1. All routes must live inside the app folder
  - 2. Route files must be named either `page.js` or `page.tsx`
  - 3. Each folder represents a segment of the URL path. When these conventions are followed the file automatically becomes available as a route.
- File based routing
  - Root Routing (Scenario 1)
    - The URL: `localhost:3000` (This is your base URL or root path /)
    - The Result: Displays the Home Page.
    - The Code (File System):
      - App Router: Renders from `app/page.js` (or `.tsx`).
      - Pages Router: Renders from `pages/index.js` (or `.tsx`).
    - Key Concept: Visiting the base URL without any extra paths (like `/about`)automatically loads the application's main entry point.
  - In the previous versions there are not available in the `app` folder live in the directory the that process was first needed to creating `src/app` folder that the directory but updated versions has direct folder and there are directly consist `page.tsx` file in this directory
    - In the file of `page.tsx` our simple operation of first routing in the home page is:
    ```sh
    export default function Home() {
    return <h1>Welcome home!</h1>;
    }
    ```
    - Notes: The output will be showing on the homepage directly.
  - File based routing
    - Root Routing (Scenario 2) like
    - The URL: `localhost:3000/about`or `localhost:3000/profile`
    - Go to the app folder into the folder create a folder `about` and into it create `page.tsx` file also create the routing function
    ```sh
    export default function About() {
      return <h1>About me!</h1>;
    }
    ```
    - Go to the app folder into the folder create a folder `profile` and into it create `page.tsx` file also create the routing function
    ```sh
    export default function profile() {
      return <h1>Profile page!</h1>;
    }
    ```
    - Notes: Go to the browser and test the routing will be work properly or not so check it about `http://localhost:3000/about` and `http://localhost:3000/profile`

  - Here is the visualization of scenario 1 & scenario 2 :
  ```sh
  app/
  ├── about/
  │   └── page.tsx
  ├── profile/
  │   └── page.tsx
  ├── favicon.ico
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
  ```
- In that case someone visit `http://localhost:3000/dashboard` then its showing 404 page 
```sh
404 | This page could not be found
```

- Final Touch :)
  - You do not need to install or configure any external third party routing libraries (like React Router). Everything is completely built in!
  - Next.js handles all the complex routing configurations behind the scenes through its file system based approach. By simply creating `folders` and `page.tsx` files, your routes are instantly ready to use. This makes building and scaling applications incredibly fast, intuitive, and hassle free for developers.

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

