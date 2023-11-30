// components/AddTaskModal.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddTaskModal = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [priority, setPriority] = useState('low');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTask({ name: taskName, description: taskDescription, priority, completed: false });
        setTaskName('');
        setTaskDescription('');
        setPriority('low');
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Task Name:
                    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </label>
                <label>
                    Task Description:
                    <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                </label>
                <label>
                    Priority:
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <button type="submit">Add Task</button>
            </form>
            <Link to="/">Back to Task List</Link>
        </div>
    );
};

export default AddTaskModal;
