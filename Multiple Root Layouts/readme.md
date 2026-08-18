###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Multiple Root Layouts
- We learned that adding a header and footer to the main `app/layout.tsx` file applies them to every single page in the application. There is no way to bypass this default behavior if the layout sits directly in the `app` folder.
- The Challenge: What if you want completely different outer layouts for different parts of your application? (like: A header/footer for the marketing pages, but a minimal, clean layout for the authentication pages).
- The Solution: You can create Multiple Root Layouts by completely removing the single `layout.tsx` from the `app` directory and utilizing Route Groups. Route groups allow you to apply layouts selectively to specific parts of your application without altering the URL.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`). Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest multiple-root-layouts
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  MULTIPLE ROOT LAYOUTS/
  ├── multiple-root-layouts/
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
cd multiple-root-layouts
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
multiple-root-layouts@0.1.0 dev
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
## Implementing Multiple Root Layouts
- Scenario: We have `revenue` and `customers` pages (marketing) that need a header and footer. We have `login` and `register` pages (auth) that should only have a footer.
- 1. Organizing with Route Groups
  - First, create two route groups inside your `app` directory to organize the folders:
    - Create (`marketing`) and move your `revenue` and `customers` folders inside it.
    - Create (`auth`) and move your `login` and `register` folders inside it.
    
- 2. Moving the Root Layout
  - Take the default `layout.tsx` file from the root `app` folder and move it into the (`marketing`) route group.
    - Crucial Step: The `layout.tsx` file must not exist directly in the `app` folder anymore.
  - Rename the component inside to `MarketingLayout` to reflect its purpose. Let's assume it renders both `<header>` and `<footer>` tags.

- 3. Creating the Second Root Layout
  - Copy the layout file you just moved, paste it inside the `(auth)` route group, and rename the component to `AuthLayout`.
  - Modify this layout to fit the auth requirements (e.g., remove the `<header>` so it only renders the `<footer>`).
- 4. Handling the Root Page `(/)`
  - If you check the browser now, you will get an error: "page.tsx doesn't have a root layout". This refers to the main `app/page.tsx` file for `http://localhost:3000`.
  - The Fix: Simply move the main `page.tsx` file from the `app` folder into the (`marketing`) route group alongside the marketing layout. Now it has a layout to work with!

## The Result
- In the browser, your URLs remain exactly the same (like: `/login`, `/revenue`), but the UI is now completely decoupled:
  - Visiting `http://localhost:3000/revenue` displays both the Header and Footer.
  - Visiting `http://localhost:3000/login` displays only the Footer.
  - Route groups provide incredible flexibility to create distinct user interfaces for different application segments while keeping the code highly organized.

## The Visualizations of the Folders
  ```sh
  app/
  ├── (auth)/                  <-- Route Group 1
  │   ├── layout.tsx           <-- Root Layout for Auth (Footer only)
  │   ├── login/
  │   │   └── page.tsx         <-- URL: /login
  │   └── register/
  │       └── page.tsx         <-- URL: /register
  ├── (marketing)/             <-- Route Group 2
  │   ├── layout.tsx           <-- Root Layout for Marketing (Header + Footer)
  │   ├── customers/
  │   │   └── page.tsx         <-- URL: /customers
  │   ├── revenue/
  │   │   └── page.tsx         <-- URL: /revenue
  │   └── page.tsx             <-- URL: / (Moved inside a route group!)
  ├── favicon.ico
  └── globals.css
  ```
  - (Notice there is no longer a `layout.tsx` or `page.tsx` sitting directly in the root `app/` folder).

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

