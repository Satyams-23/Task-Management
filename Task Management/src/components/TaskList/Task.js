// components/Task.js
import React, { useState } from 'react';
import EditTaskModal from '../EditTaskModal/EditTaskModal';

const Task = ({ task, onToggle, onDelete, onEditTask }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };
    const handleCheckboxToggle = () => {
        onToggle(task.id);
    };
    const handleEyeIconClick = () => {
        setShowDescriptionModal(true);
    };

    const handleCloseModal = () => {
        setShowDescriptionModal(false);
    };



    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCheckboxToggle}
            />            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name} - {task.priority}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={handleEditClick}>Edit</button>

            {showEditModal && (
                <EditTaskModal
                    task={task}
                    onEditTask={(editedTask) => {
                        onEditTask(task.id, editedTask);
                    }}
                    onClose={handleCloseEditModal}
                />
            )} <span
                role="img"
                aria-label="eye"
                style={{ cursor: 'pointer' }}
                onClick={handleEyeIconClick}
            >
                👁️
            </span>

            {showDescriptionModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Task {task.name} Description</h2>
                        <p>{task.description}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Task;
