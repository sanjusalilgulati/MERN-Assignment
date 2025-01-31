# MERN Assignment - Frontend

## Overview
This repository contains the frontend solution for the MERN stack interview assignment. The main feature of this app is a **Dynamic To-Do List** where users can:
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks by All, Completed, and Pending
- Persist tasks in local storage to retain data after a page refresh

---

## Features
1. **Add New Tasks**: Users can add new tasks to the to-do list via a text input field.
2. **Mark as Completed/Incomplete**: Click on a task to toggle its completion status.
3. **Delete Tasks**: Users can delete tasks from the list.
4. **Filter Tasks**: Filter tasks by "All", "Completed", or "Pending" statuses.
5. **Persistence**: Tasks are stored in the browser's local storage, so they are retained even after a page refresh.
6. **API Integration**: Tasks are fetched from an external API (`https://dummyjson.com/todos`) and combined with local storage data.

Install Dependencies
cd frontend
npm install


Run React APP

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


