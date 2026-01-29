# Keeper App

Keeper App is a lightweight note-taking application inspired by Google Keep. It lets you quickly add notes, see them as cards, and clear the inputs once a note is saved.

## Features
- **Add notes quickly**: Enter a title and content, then save to create a new note card.
- **Auto-clear inputs**: After saving, the form clears so you can immediately add the next note.
- **Card-based layout**: Notes are displayed as individual cards for easy scanning.
- **Edit inline**: Toggle a note into edit mode, update its title or content, and save to persist changes.
- **Delete with one click**: Remove any note card instantly.
- **Timestamp tracking**: Each note stores when it was created and shows the last updated time.

## Tech Stack
- React 18
- Create React App tooling (react-scripts)
- JavaScript, HTML, CSS

## Run the app from source
Prerequisites: Node.js 16+ and npm.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app runs at http://localhost:3000 with hot reload.

## Build for production
```bash
npm run build
```
The optimized build outputs to the `build` directory.

## Test
```bash
npm test
```
Runs the test runner in watch mode.
