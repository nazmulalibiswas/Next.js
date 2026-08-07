###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Nested Routes
- In the Next.js App Router, routing is defined by the folder structure. You create nested routes by nesting folders inside one another, where each folder represents a specific segment of the URL path.
- Next.js has a file system based daynamic routing system
  - URLs you can access in your browser are determined by how you organize your files and folders in your code
- Create a folder 'Routing' Now open the VS code Editor and open terminal from keyboard (CTRL + ~ ) button also select there `Command Prompt`
  - Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest nested-routes
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:

  ```text
  Nested Routes/
  ├── nested-routes/
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
cd nested-routes
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
nested-routes@0.1.0 dev
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

- Nested routes (Scenario 3)
  - Nested routes like `http://localhost:3000/blog` is apply `http://localhost:3000/blog/first` into `http://localhost:3000/blog/second`
  - Now create the folder in the app folder directory `blog` folder and keep the file `page.tsx`
  ```sh
  export default function Blog() {
  return <h1>My blog</h1>;
  }
  ```
  - Notes: Now routing the url then showing the `http://localhost:3000/blog`urls in that page are running awesome.
  - Now we are running `http://localhost:3000/blog/first` into `http://localhost:3000/blog/second` so that first the folder need to created into the blog folder keep the file `page.tsx` and another keep the file `page.tsx`
  ```sh
  export default function FirstBlog(){
  return <h1>First Blog Post</h1>;
  }
  ```
  - and another `page.tsx` is
  ```sh
  export default function SecondBlog(){
    return<h1>Second blog post</h1>;
  }
  ```
  - Notes: If we are going to the `http://localhost:3000/blog/first` and `http://localhost:3000/blog/second` we are see the nested routes
  - The visualizations of the folders
  ```sh
  app/
  ├── blog/
  │   ├── first/
  │   │   └── page.tsx
  │   ├── second/
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

