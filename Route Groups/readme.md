###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Route Groups
- In Next.js, Route Groups allow you to logically organize your routes and project files without impacting the URL structure.
- It is also worth noting that route groups are actually the only way to share a layout between specific routes without affecting the URL path.
- By wrapping a folder name in parentheses like (`folderName`) you tell Next.js to treat the folder as an organizational tool only, completely excluding it from the routing URL path.
- Lets implement authentication routes
` - Register
  - Login
  - Forgot Password

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`) Select `Command Prompt`.
  - Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest route-groups
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  ROUTE GROUPS/
  ├── route-groups/
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
- Now go to the main folder directory in the terminal:
```sh
cd route-groups
```
- Start the development server:
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
route-groups@0.1.0 dev
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
## Implementing Authentication Routes (The Problem)
- Scenario: We want to build standard authentication routes for `register`, `login`, and `forgot-password`.
- First, inside your `app` folder, create three separate folders: `register`, `login`, and `forgot-password`.
- In each folder, define a `page.tsx` file with a simple React component.
  - Inside `app/register/page.tsx`:
  ```sh
  export default function Register() {
    return <h1>Register</h1>;
  }
  ```
  - (Copy this file into the `login` and `forgot-password` folders, changing the component name and heading accordingly).
  - Notes: In the browser, visiting `http://localhost:3000/register` shows "Register", `/login` shows "Login", and `/forgot-password` shows "Forgot password". This works perfectly, but our auth routes are scattered throughout the  `app` folder, which creates a messy Developer Experience (DX) in a team environment.

## Organizing Routes (The Solution)
- The Initial Attempt: If you try to improve organization by moving these folders into a new `auth` folder, Next.js automatically maps those nested folders to URL paths. Your URLs will break, changing to `/auth/login` instead of  `/login`, which results in a 404 on the original paths.
- Using Route Groups: To organize the folders without changing the URL, simply wrap the wrapper folder name in parentheses: (`auth`).
- Move the `register`, `login`, and `forgot-password` folders inside this (`auth`) directory (remember to update imports if your editor prompts you).
  - Troubleshooting Tip: If you have trouble renaming the folder to include parentheses, stop the dev server with `CTRL + C`, rename the folder to (`auth`), and restart the server with `npm run dev`.
- Notes: Check your browser again. `http://localhost:3000/login` works perfectly! The (`auth`) folder neatly organizes our code in the code editor but is completely ignored in the URL path.
- Pro Tip: If you need even more organization, you can nest route groups within each other.
  
## The Visualizations of the Folders
  ```sh
  app/
  ├── (auth)/                  <-- Route Group (Ignored in URL path)
  │   ├── forgot-password/
  │   │   └── page.tsx         <-- URL: /forgot-password
  │   ├── login/
  │   │   └── page.tsx         <-- URL: /login
  │   └── register/
  │       └── page.tsx         <-- URL: /register
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

