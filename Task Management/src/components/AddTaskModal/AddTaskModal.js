// components/AddTaskModal.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTaskModal = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      name: taskName,
      description: taskDescription,
      priority,
      completed: false,
    });
    setTaskName("");
    setTaskDescription("");
    setPriority("low");
  };

  return (
    <div className="container border m-auto">
      <hr></hr>
      <h2>Add Task</h2>
      <hr></hr>
      <form onSubmit={handleFormSubmit} className="container">
        <div className="mb-3">
          <input
            class="form-control form-control-lg"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder=" Task Name:"
          />
        </div>
        <div className="form-floating m-auto">
          <textarea
            class="form-control"
            id="floatingTextarea"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
          <label for="floatingTextarea">discriptions</label>
        </div>

        <div className="row m-auto p-2">
          <div className="col-auto m-auto">
            <label style={{ fontFamily: "cursive", fontWeight: "bold",fontSize:'1.2rem' }}>
              Priority :
            </label>
          </div>
          <div className="col">
            <select
              class="form-select"
              placeholder="Priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >

              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button className="btn btn-outline-primary p-2 m-2" type="submit">
          Add Task
        </button>
      </form>
      <hr></hr>
      <Link to="/">
        <button className="btn btn-outline-dark p-2 m-2 mb-3">Task List</button>
      </Link>
    </div>
  );
};

export default AddTaskModal;
