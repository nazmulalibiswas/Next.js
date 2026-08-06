###### Next.js with @nazmulalibiswas - The react framework for the Web!
# Before We Start
- React Server Components(RSC)
  - React server components is a new architecture that was introduced by the `React` team and quickly adopted by Next.js
  - This architecture introduces a new approach to creating React components by diving them into two distinct types:
    1. Server Components
    2. Client Components
    - 1. Server components:
    - By default, Next.js treats all components as server components
    - These components can perform server-side tasks like reading files or fetching data directly from a database
    - The trade-off is that they can't use React hooks or handle user interactions
    - 2. Client components:
    - To create a client component, you'll need to add the 'use client' directive at the top of your component file
    - While client components can't perform server-side tasks like reading files, they can use hooks and handle user interactions
    - Client components are the traditional React components you're already familiar with from previous versions of React
- React Server Components and Routing
  - As we get into routing, you'll see practical examples of both types
  - Work with server components that wait for certain operations to complete before rendering content
  - Use client components to take advantages of hooks from the routing module

# Contributing
Contributions are always welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

# Author
- Md. Nazmul Ali Biswas
- Fullstack Engineer & Tech Enthusiast
- Web: `www.nazmulalibiswas.com`
- Contact Info: `nazmulalibiswas.dev@gmail.com | hireme@nazmulalibiswas.com`

