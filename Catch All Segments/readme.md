###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Introduction to Catch All Segments
- First of all need to understand the scenario 6
  - `localhost:3000/docs/feature1/concept1`
  ```sh
  Feature 1
    Concept 1
    Concept 2
    Concept 3
    Concept 4       Docs for F1 C1
    Concept 5
  Feature 2
  Feature 3
  Feature 4
  Feature 5
  ```
- Now the url is routing a lot of likes
  ```sh
  localhost:3000/docs/feature1/concept1
  localhost:3000/docs/feature1/concept2
  localhost:3000/docs/feature2/concept1
  localhost:3000/docs/feature2/concept2

  20 Features * 20 Concepts = 400

  20 Features * 1[conceptId] = 20

  1[featureId] * 1 [conceptId] = 1

  localhost:3000/docs/feature1/concept1/example1
  ```
## Setting Up Catch All Segments & Implementation
- In the Next.js App Router, you can use Catch all Segments to handle dynamic routes with an unknown or variable number of path segments using a single file.
- Scenario 6: Imagine building a documentation site. You might have routes like `/docs/feature1/concept1` or `/docs/feature1/concept2/example1.` Creating a deeply nested folder structure for hundreds of features and concepts is inefficient.
- Catch all segments allow you to capture all URL segments after a specific path and handle them in one place.
- To create a catch all segment, wrap a folder name in square brackets and prefix it with three dots (the spread operator): `[...folderName].` A common convention is `[...slug].`

- Create a folder 'Catch All Segments' Now open the VS code Editor and open terminal from keyboard  `(CTRL + ~ )` button also select there `Command Prompt`
  -Now give the command in the terminal menu when you want to create the project folder:
  ```sh
  npx create-next-app@latest catch-all-segments
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  Catch All Segments/
  ├── catch-all-segments/
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
cd catch-all-segments
```
- Now type here
```sh
npm run dev
```
- Showing here the messeages below like this
```sh
catch-all-segments@0.1.0 dev
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

## Handling URL Segments in Code
- Now run for `http://localhost:3000` copy it & paste it on any of the web browser. or press `ctrl` and click on the link then redirect it on the default web browser.
- Create a `docs` folder inside your app directory.
- Inside `docs`, create a folder named `[...slug].`
- Inside `[...slug]`, create a `page.tsx` file.
  ```sh
  export default function Docs() {
    return <h1>Docs home page</h1>;
  }
  ```
- Because `slug` is a catch all, Next.js will pass an array of strings containing every path segment into your component's `params`.
```sh
export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  // Render UI based on the number of path segments
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs Homepage</h1>;
}
```
- Notes:
  - Navigating to `http://localhost:3000/docs/routing` shows: "Viewing docs for feature routing".
  - Navigating to `http://localhost:3000/docs/routing/catch-all-segments` shows: "Viewing docs for feature routing and concept catch-all-segments".
## Optional Catch All Segments
- If you want to routing `http://localhost:3000/docs` then showing the 404 page error so go to the
- Inside `docs`, create a folder named `[[...slug]]` just give a extra carly braces []
## When to Use Catch All Segments
- The Problem: With standard catch all segments `([...slug])`, navigating directly to the root path `(http://localhost:3000/docs)` will result in a 404 error because the catch all requires at least one segment to match.

- The Solution: You can make the catch all segment optional by wrapping it in an extra pair of square brackets: `[[...slug]].`
- By renaming the folder from `[...slug]` to `[[...slug]],` the route `/docs` will now successfully render the `page.tsx` file inside that folder, triggering the default return statement `(<h1>Docs Homepage</h1>)`.
- Best Practice Tip:`page.tsx` vs `[[...slug]]/page.tsx`
How do you know when to use a simple `page.tsx` directly in the `docs` folder versus utilizing the Optional Catch all?

| Approach | When to use it |
| :--- | :--- |
| `app/docs/page.tsx` | Use this if the main `/docs` page UI is completely different from the nested documentation pages. |
| `app/docs/[[...slug]]/page.tsx` | Use this if your root `/docs` page shares the same fundamental UI logic, layout, and component structure as the dynamic URL segments (as seen in our scenario). |

## The Visualizations of the Folders
  ```sh
  app/
  ├── docs/
  │   └── [[...slug]]/
  │       └── page.tsx
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

