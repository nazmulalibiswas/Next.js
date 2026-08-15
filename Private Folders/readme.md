###### Next.js with @nazmulalibiswas - The react framework for the Web!
## Private Folders
- While Next.js handles safe file co-location right out of the box, Private Folders give you another powerful way to keep your project super organized.
- A private folder tells Next.js: "This folder is strictly for internal use. Do not include it or its subfolders in the routing system."
- To create a private folder, you simply add an underscore (`_`) at the start of the folder name (for example,`_lib` or `_components`).

## Setting Up & Implementation
- Open your VS Code Editor and open the terminal using the keyboard shortcut `(CTRL + ~)` button Select `Command Prompt`.
  - Give the command in the terminal to create the project folder:
  ```sh
  npx create-next-app@latest private-folders
  ```
  - Select now `yes, use recommended defaults` like ` Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults` if select it then automatically installing all of dependencies.
  - After installation the code base is like this next.js project directory structure:
  ```sh
  PRIVATE FOLDERS/
  ├── private-folders/
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
- Now navigate to the main folder directory in the terminal:
```sh
cd private-folders
```
- Start the development server:
```sh
npm run dev
```
- The terminal will show messages like this:
```sh
private-folders@0.1.0 dev
> next dev

▲ Next.js 16.3.0 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.0.103:3000
✓ Ready in 976ms
```
## Creating and Using Private Folders
- Inside your `app` directory, create a new folder called `_lib`. This is where you might put utility functions like `format-date.ts`.
  - Let's test the routing behavior by creating a `page.tsx` file inside this `_lib` folder.
    ```sh
    export default function PrivateRoute() {
      return <h1>You cannot view this in the browser</h1>;
    }
    ```
    - Notes: You might think this would show up at `http://localhost:3000/_lib,` but it won't! Because of the underscore, Next.js completely ignores this folder for routing.
    - If you try navigating to `/_lib` in the browser, you will get a 404 Page Not Found error (specifically, the custom `not-found.tsx` page we learned to build earlier).

## Benefits of Private Folders
- Private folders are super useful for several reasons:
  - 1. Separation of Concerns: Keeps your UI logic completely separate from your routing logic.
  - 2. Consistent Organization: Provides a standard, predictable way to organize internal files across your project.
  - 3. Editor Grouping: Makes it much easier to group related files together in your code editor (folders starting with underscores often group together alphabetically).
  - 4. Future Proofing: Helps you avoid potential naming conflicts with any future Next.js file naming conventions.
    - Pro Tip: Underscores in URLs: 
      - If you actually want a URL segment to start with an underscore (like: `http://localhost:3000/_myroute`), you can't use an underscore in the folder name. Instead, use the URL encoded version of an underscore, which is `%5F`. Example: Name your folder `%5Fmyroute`, and the browser will successfully load it as `/_myroute`.

## Alternatives to Private Folders
  - Private folders are just one way to organize your Next.js project. If you prefer a different approach, you don't have to use them! You can simply rely on standard file co-location, or you can keep your internal files completely outside of the `app` folder (such as in a `src/` directory).

## The Visualizations of the Folders
  - Visulalization is:
    ```sh
    app/
    ├── _lib/                  <-- Private Folder (Ignored by router)
    │   ├── format-date.ts
    │   └── page.tsx           <-- NOT publicly accessible!
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

