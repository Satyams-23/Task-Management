import React, { useState } from "react";
import EditTaskModal from "../EditTaskModal/EditTaskModal";

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
    <div className="container  m-auto">
      <div class="row align-items-center">
        <div className="col input-group mb-3 m-auto p-3 border ">
          <input
            className="form-check-input mt-0 p-3"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
            checked={task.completed}
            onChange={handleCheckboxToggle}
          />
          <div className="col p-2">
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",fontFamily:'cursive',fontSize:'1rem',
              }}
            >
              {task.name} - {task.priority}
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-primary"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-primary"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>

          <div className="col-auto p-2">
            {showEditModal && (
              <EditTaskModal
                task={task}
                onEditTask={(editedTask) => {
                  onEditTask(task.id, editedTask);
                }}
                onClose={handleCloseEditModal}
              />
            )}{" "}
            <span
              role="img"
              aria-label="eye"
              style={{ cursor: "pointer" }}
              onClick={handleEyeIconClick}
            >
              👁️
            </span>
          </div>
          {showDescriptionModal && (
            <div className="modal">
              <div className="modal-container bg-white p-2 rounded">
                <h2>Task {task.name} Description</h2>
                <p>{task.description}</p>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
