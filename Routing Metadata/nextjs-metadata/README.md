# Routing Metadata Demo

This Next.js project demonstrates how metadata works in the App Router.

## What this app shows

- static metadata in a page
- default metadata in a root layout
- dynamic metadata with `generateMetadata`
- nested route metadata behavior
- correct separation of server and client components for metadata

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Example routes

- `/about` — static page metadata
- `/counter` — metadata on a server component with client UI logic separated into a child component
- `/products/16` — dynamic metadata using a route parameter

## Key rule

Metadata should be exported from a server component. If a file starts with `"use client"`, it cannot export metadata.

## Build verification

```bash
npm run build
```

This project builds successfully and the demo routes are generated as expected.
