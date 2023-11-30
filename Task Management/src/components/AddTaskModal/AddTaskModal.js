import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddTaskModal = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [priority, setPriority] = useState('low');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTask({ name: taskName, description: taskDescription, priority, completed: false });
        setTaskName('');
        setTaskDescription('');
        setPriority('low');
        setSuccessMessage('Task created successfully!');

        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div>
            <h2>Add Task</h2>
            {successMessage && (
                <div
                    style={{
                        color: 'green',
                        border: '1px solid black',
                        padding: '10px',
                        margin: '10px 0',
                        borderRadius: '4px',
                    }}
                >
                    {successMessage}
                </div>
            )}
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
