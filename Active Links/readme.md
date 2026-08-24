###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Active Link Styling
- Previously, we learned about the `Link` component for navigating between routes. Now, let's tackle styling active links.
- Highlighting the current page you're on in a navigation menu is essential. It is not just about aesthetics; it helps users understand exactly where they are in your application.
- Next.js provides the `usePathname` hook to help us figure out which link is currently active based on the URL path.

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut (`CTRL + ~`). Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest active-link-styling
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  ACTIVE LINKS/
  ├── active-link-styling/
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
cd active-link-styling
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
active-link-styling@0.1.0 dev
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
## Setting Up the Navigation Links
- Let's prepare some code in an `(auth)` route group. We will create a `layout.tsx` file with a `navLinks` array containing three items: `Register`, `Login`, and `Forgot Password`, each with a corresponding `href` property.
```sh
import Link from "next/link";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
```
- The layout component will map over these links and render them using Next.js's `<Link>` component.

## Implementing the `usePathname` Hook & Fixing Client Errors
- To determine which link is active, import the `usePathname` hook at the top:
```sh
import { usePathname } from "next/navigation";
```
- Here is the code now:
```sh
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
```
- Invoke it inside the component: `const pathname = usePathname()`;

- The Problem: When you save the file, you encounter an error. Server components are default in Next.js, and hooks only work in Client Components.
- The Solution: Add the "`use client`" directive at the top of the file to fix this error.
```sh
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
```
- So, Into the `const pathname = usePathname();` add this for highlights the current navigation link and its active parent routes using for
```sh
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
```
## Adding Conditional Styling
- The `pathname` constant gives us the current URL path (like: `/register` or `/login`). These match up with the `href` values in our `navLinks` array.

- Inside the map method, add an `isActive` condition.

- Apply a conditional `className`: If `isActive` is true, make the font bold. If false, make the text blue. (Using Tailwind CSS classes).

- Now creating into `(auth)` directory `style.css` code is
```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- or using modern way like this:
```sh
@import "tailwindcss";
```
- Inside `app/(auth)/layout.tsx`: Here need to added `import "./styles.css";` this for showing the page 
```sh
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
```
  - Notes:
    - If the styles aren't visible in the browser, it is likely because global CSS is missing. Create a `styles.css` file in the `(auth)` folder and add your Tailwind CSS base components and utilities, then import it into `layout.tsx`.
    - Now, head back to the browser. If you click "Forgot Password", the current route text is bold, and the other links are blue. Click "Login" and the styling dynamically changes based on the active route!


## The Visualizations of the Folders
  ```sh
  app/
  ├── (auth)/
  │   ├── layout.tsx         <-- Client component applying active link styling
  │   ├── styles.css         <-- Local CSS for Tailwind classes
  │   ├── forgot-password/
  │   │   └── page.tsx
  │   ├── login/
  │   │   └── page.tsx
  │   └── register/
  │       └── page.tsx
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

