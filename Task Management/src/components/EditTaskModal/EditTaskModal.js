import React, { useState, useEffect } from "react";

const EditTaskModal = ({ task, onEditTask, onClose }) => {
  const [editedTask, setEditedTask] = useState({
    name: task.name,
    description: task.description,
    priority: task.priority,
  });

  useEffect(() => {
    setEditedTask({
      name: task.name || "",
      description: task.description || "",
      priority: task.priority || "low",
    });
  }, [task]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (typeof onEditTask === "function") {
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
      <div className="modal-container bg-white p-5 rounded">
        <hr></hr>
        <h2>Edit Task</h2>
        <hr></hr>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label>
              <input
                class="form-control form-control-lg"
                type="text"
                name="name"

                value={editedTask.name}
                onChange={handleInputChange}
                placeholder=" Task Name:"
              />
            </label>
          </div>
          <div className="form-floating m-auto">
            <textarea
              name="description"

              class="form-control"
              id="floatingTextarea"
              value={editedTask.description}
              onChange={handleInputChange}
            ></textarea>
            <label for="floatingTextarea">Discriptions</label>
          </div>

          <div className="row m-auto p-2">
            <div className="col-auto m-auto">
              <label
                style={{
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Priority :
              </label>
            </div>
            <div className="col">
              <select
                name="priority"

                class="form-select"
                placeholder="Priority"
                value={editedTask.priority}
                onChange={handleInputChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div>
            <button className="btn btn-outline-primary p-2 m-2" type="submit">Save Changes</button>
          </div>
          <hr></hr>
          <div>
            <button className="btn btn-outline-dark p-2 m-2 mb-3" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
