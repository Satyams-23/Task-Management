// components/TaskList.js
import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
import { saveTasksToLocalStorage } from "../../utils/localStorage"; // Import the saveTasksToLocalStorage function

const TaskList = ({ tasks, onToggle, onDelete, onEditTask }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="">
      <hr></hr>
      <h1 className="" style={{ fontFamily: "cursive", fontWeight: "bold" }}>
        Task List
      </h1>
      <hr></hr>
      <Link to="/add">
        <button className="btn btn-outline-primary m-2">Add Task</button>
      </Link>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEditTask={onEditTask}
        />
      ))}
      {completedTasks.length > 0 && (
        <div>
          <h3>Completed Tasks</h3>
          {completedTasks.map((task) => (
            <div key={task.id}>
              {task.name} - {task.priority}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
