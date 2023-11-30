# Task Management Application

## Overview

This is a Task Management Application built using React. It allows users to add, edit, delete tasks, and mark tasks as completed. The application utilizes React Router for navigation, React state for managing component functionalities, and LocalStorage to persist tasks even after a page refresh.

## Project Structure

The project structure follows a typical React application structure:

- **src/components:** Contains React components (TaskList, AddTaskModal, EditTaskModal, Task).
- **src/router:** Contains the main Router component with React Router configuration.
- **src/utils/localStorage.js:** Utility functions for saving and retrieving tasks from LocalStorage.
- **src/App.js:** Main entry point of the application.
- **public:** Static assets and HTML template.

## Design Choices

### Styling

The application uses a simple and clean CSS style. The layout is responsive, and basic styling is applied to enhance the user interface. You can find the styles in the respective component files.

### State Management

React state is used within each component to manage their respective functionalities. React context or state lifting is employed to share state between components where necessary.

### Routing

React Router is implemented for navigation between the task list, add task, and edit task pages. 

### LocalStorage

Tasks are saved in the browser's LocalStorage, ensuring that tasks persist even after a page refresh.

### Testing

Unit tests for critical components (TaskList, AddTaskModal, EditTaskModal) are written using Jest, a popular testing library for React.

## Additional Features

- Sorting tasks based on priority or completion status.
- Pagination for the task list.
- Adding due dates to tasks.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Satyam-23/Task-Management.git
   cd task-management

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Running Tests

To run tests, use the following command:

```bash
npm test
```

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback is valuable!




This README.md provides a basic structure, and you can expand on it based on your specific project details and requirements.
