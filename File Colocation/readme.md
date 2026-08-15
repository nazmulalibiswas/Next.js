###### Next.js with @nazmulalibiswas - The react framework for the Web!
## File Collocation
- In Next.js, while there are strict routing conventions to follow (like using a file system based router where each folder represents a route segment), the framework is highly flexible regarding how you structure your project files and folders.
- The Core Rule of File Collocation: A route segment only becomes publicly accessible when you add a `page.js` or `page.tsx` file to it.
- Because of this rule, you can safely collocate (store together) project files like UI components, tests, stylesheets, or utility functions directly inside your route segments in the `app` directory without worrying about them accidentally becoming public routes themselves.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (CTRL + ~). Select Command Prompt.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest file-collocation
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  FILE COLLOCATION/
  ├── file-collocation/
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
cd file-collocation
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
file-collocation@0.1.0 dev
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
## Demonstrating File Collocation (Dashboard Scenario)
- Let's see how file collocation works in practice by creating a dashboard route.
- 1. Creating a Component File (No Route Access)
  - Create a new folder called `dashboard` inside your `app` directory.
  - Inside `dashboard,` create a file called `line-chart.tsx` and define a simple React component:
    ```sh
    export default function LineChart() {
      return <h1>Line Chart</h1>;
    }
    ```
    - Notes: If you try navigating to `http://localhost:3000/dashboard` in your browser right now, you will get a 404 Page Not Found error. Why? Because we haven't added a `page.tsx` file yet. The `line-chart.tsx` file remains completely private and inaccessible via a URL.

- 2. The Default Export Requirement
  - To make the route accessible, let's create a `page.tsx` file inside the `dashboard` folder.
  - Even when a route is made public with  `page.tsx,` the browser will only render what is returned by a default exported React component.
  - Let's see what happens if you create a component without making it a default export:
  ```sh
    // This will cause an error!
  export function BarChart() {
    return <h1>Bar Chart</h1>;
  }
  ```
  - Notes: If you check the browser, the 404 page is gone, but you will see an error stating: "The default export is not a React Component in /dashboard/page".

- 3. Fixing the Route
  - Fix the error by adding a proper default export to the `page.tsx` file:
  ```sh
  export default function Dashboard() {
    return <h1>Dashboard</h1>;
  }
  ```
  - Notes: Refresh the browser at `http://localhost:3000/dashboard` and you will successfully see "Dashboard". Notice that your `LineChart` and `BarChart` components remain safely hidden from the public URL, but are available to be imported and used within your `Dashboard` component.

## Alternative File Structures
- While you can keep your components collocated inside the `app` directory, you don't have to.
- Some developers prefer to keep their files outside the `app` directory entirely. A common pattern is creating a separate `src/components` folder for all UI components (libraries like shadcn/ui use this approach). Both methods are totally fine and supported by Next.js!

## The Visualizations of the Folders
  ```sh
  app/
  ├── dashboard/
  │   ├── line-chart.tsx     <-- Safe to collocate here, not a public route
  │   └── page.tsx           <-- Makes /dashboard publicly accessible
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

