// components/EditTaskModal.js
import React, { useState, useEffect } from 'react';

const EditTaskModal = ({ task, onEditTask, onClose }) => {
    const [editedTask, setEditedTask] = useState({
        name: '',
        description: '',
        priority: 'low',
    });

    useEffect(() => {
        setEditedTask({
            name: task.name || '',
            description: task.description || '',
            priority: task.priority || 'low',
        });
    }, [task]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (typeof onEditTask === 'function') {
            onEditTask({
                ...task,
                ...editedTask,
            });
        }

        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };


    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Task</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Task Name:
                        <input
                            type="text"
                            name="name"
                            value={editedTask.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Task Description:
                        <textarea
                            name="description"
                            value={editedTask.description}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Priority:
                        <select
                            name="priority"
                            value={editedTask.priority}
                            onChange={handleInputChange}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;
