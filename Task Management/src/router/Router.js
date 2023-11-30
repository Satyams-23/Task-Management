// router/Router.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../components/TaskList/TaskList';
import AddTaskModal from '../components/AddTaskModal/AddTaskModal';
import EditTaskModal from '../components/EditTaskModal/EditTaskModal';
import { saveTasksToLocalStorage, getTasksFromLocalStorage } from '../utils/localStorage';

const AppRouter = () => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage());

    const handleAddTask = (newTask) => {
        const updatedTasks = [...tasks, { ...newTask, id: Date.now().toString() }];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const handleEditTask = (taskId, updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };
    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };


    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<TaskList tasks={tasks} onEditTask={handleEditTask} onDelete={handleDeleteTask} onToggle={handleToggleTask} />}
                />
                <Route path="/add" element={<AddTaskModal onAddTask={handleAddTask} />} />
                <Route
                    path="/edit/:taskId"
                    element={<EditTaskModal tasks={tasks} onEditTask={handleEditTask} />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
