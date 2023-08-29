# Task Focus

## Project Description

In this project the users can organize the tasks that they need to do.

For this some requirements were followed and completed:

- List tasks with names and deadlines
- Users can add new tasks with names and deadlines to the list
- Users can set tasks as completed
- Users can delete tasks off of the list
- Users can edit tasks
- Users can filter tasks, choosing between showing all tasks, completed tasks, or incomplete tasks.
- The tasks are locally stored through the use of the custom hook useLocalStorage
- Unit test were done to ensure the apps viability on the files List.tsx and calculateDaysBetweenDates.ts

Regarding the UI of the project, its important to highlight some details:

- The buttons to add and edit tasks are disabled if, either the name or the deadline of the task are not filled. In these buttons there's a tooltip that explains that to the user.
- The user can hover a date of a task to see how many days they have to complete the task or if it's past it's deadline. This is also displayed by a tooltip.
- The button on the left of the task is a toogle, that can switch between the task being complete or not.
- The buttons on the rigth are, in order, to edit the task and delete it.

## Installation

Clone the repository:

git clone https://github.com/miguelmateusmf/exercicioWebHS.git

Navigate to the project directory: `cd yourproject`

Install dependencies: `npm install`

## Usage

Start the application:

`npm run dev`

or

`npm run build` then `npm run sttart`

Open a web browser and go to http://localhost:3000

## Technologies Used

- React
- TypeScript
- HTML
- Next.js
- CSS
- Tailwind CSS
- Jest
- React testing libraries
