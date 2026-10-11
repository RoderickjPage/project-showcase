# Personal Project Showcase App

A single-page React app for a creative agency to show off past projects. Visitors can browse the project list, search it, and add new projects without reloading the page.

## Features
- Landing page with a list of projects (thumbnail tile, title, description)
- "Add Project" form with validation (title and description are required)
- Live search that filters by title or description as you type
- Friendly empty-state messages
- Responsive layout (single column on phones, centered card on larger screens)

## Run locally
1. Install [Node.js](https://nodejs.org/) (v18 or newer)
2. `git clone <your-repo-url>`
3. `cd project-showcase`
4. `npm install`
5. `npm run dev`
6. Open http://localhost:5173

## Run the tests
`npm test` (press `q` to quit the watcher)

## Component tree
- App (state: `projects`, `search`)
  - Header (`title`)
  - ProjectForm (`onAddProject`; keeps its own form state)
  - SearchBar (`search`, `onSearchChange`)
  - ProjectList (`projects`, `hasSearch`)
    - ProjectCard (`title`, `description`)

## Project structure
- `src/App.jsx`: root component and shared state
- `src/components/`: Header, ProjectForm, SearchBar, ProjectList, ProjectCard
- `src/data/projects.js`: starter projects
- `src/App.css`: styles
- `src/__tests__/App.test.jsx`: tests for rendering, adding, validation, and search

## Known limitations
- Projects are kept in memory, so they reset when the page is refreshed.
- Projects use a letter tile instead of an uploaded image.

## Screenshot
Add a screenshot of the running app here (save it as `screenshot.png` and link it).
