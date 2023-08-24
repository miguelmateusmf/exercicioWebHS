"use client";
import React from "react";

export default function Home() {
  const [taskList, setTaskList] = React.useState([
    { name: "clean kitchen", date: "" },
    { name: "buy lightbulbs", date: "" },
  ]);
  const [tempName, setTempName] = React.useState("");
  const [tempDate, setTempDate] = React.useState("");

  function handleSubmit(): void {
    let copy = [...taskList];
    copy.push({ name: tempName, date: tempDate });
    setTaskList(copy);
  }

  return (
    <div>
      <input
        type="text"
        value={tempName}
        placeholder="Add TODO"
        onChange={(e) => setTempName(e.target.value)}
      ></input>
      <input type="date" onChange={(e) => setTempDate(e.target.value)}></input>
      <button
        className={"border"}
        onClick={handleSubmit}
        disabled={tempDate === "" || tempName === "" ? true : false}
      >
        Add Task
      </button>

      <ul>
        {taskList.map((task) => (
          <li key={task.name}>
            {task.name} {task.date}
          </li>
        ))}
      </ul>
      {tempName}
      {tempDate.toString()}
    </div>
  );
}
