"use client";
import React from "react";

export default function Home() {
  const [taskList, setTaskList] = React.useState([
    { name: "clean kitchen", date: "" },
    { name: "buy lightbulbs", date: "" },
  ]);
  const [tempTask, setTempTask] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={tempTask}
        placeholder="Add TODO"
        onChange={(e) => setTempTask(e.target.value)}
      ></input>
      <input type="date"></input>
      <button>Add Task</button>

      <ul>
        {taskList.map((task) => (
          <li key={task.name}>
            {task.name} {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
