# Elliot Cipher · Signal Portfolio

Hacker-inspired personal portfolio for showcasing secure product work, projects, and contact channels. Built as a modular
React/Vite app so you can extend every section without touching layout code.

## Features

- **Hacker-styled landing page** with terminal panel, mission stats, and focus areas that surface your value quickly.
- **Modular projects grid** powered by `src/data/projects.js` so adding a new project only requires updating structured data and
  dropping in artwork.
- **Résumé snapshot** including downloadable PDF, recognition log, and skills stack grouped for quick scanning.
- **Contact console** highlighting preferred channels and availability, ready for your handles and inbox.
- **Lightweight animation system** using IntersectionObserver reveals and CSS-driven ambience for a smooth experience.

## Tech stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

```bash
npm install
npm run dev
```

Update the profile copy, project data, and contact links to match your own story. Replace `public/resume.pdf` with your actual
CV for the download button.

## Extending projects

Projects live in [`src/data/projects.js`](src/data/projects.js). Add new entries with titles, descriptions, tech stacks, and
image paths (stored in `public/projects/`). The `ProjectCard` component will render them automatically with animations,
ensuring the gallery stays future-proof.
