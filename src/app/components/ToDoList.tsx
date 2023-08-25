"use client";
import React from "react";

export default function Home() {
  const [taskList, setTaskList] = React.useState([
    { id: 1.1, name: "clean kitchen", date: "", completed: false },
    { id: 2.1, name: "buy lightbulbs", date: "", completed: true },
  ]);
  const [tempName, setTempName] = React.useState("");
  const [tempDate, setTempDate] = React.useState("");

  function handleSubmit(): void {
    let copy = [...taskList];
    copy.push({
      id: Math.random(),
      name: tempName,
      date: tempDate,
      completed: false,
    });
    setTaskList(copy);
    setTempName("");
    setTempDate("");
  }

  function removeTask(index: number): void {
    let copy = [...taskList];
    copy.splice(index, 1);
    //copy = copy.indexOf(0);
    setTaskList(copy);
  }

  function toogleCompleted(id: number): void {
    const updatedTasks = taskList.map((task) =>
      task.id === id
        ? {
            id: task.id,
            name: task.name,
            date: task.date,
            completed: task.completed === false ? true : false,
          }
        : task
    );
    setTaskList(updatedTasks);
  }

  return (
    <div>
      <input
        type="text"
        value={tempName}
        placeholder="Add TODO"
        onChange={(e) => setTempName(e.target.value)}
      ></input>
      <input
        type="date"
        value={tempDate}
        onChange={(e) => setTempDate(e.target.value)}
      ></input>
      <button
        className={"border"}
        onClick={handleSubmit}
        disabled={tempDate === "" || tempName === "" ? true : false}
      >
        Add Task
      </button>

      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <div className={`${task.completed === true ? "line-through" : ""}`}>
              {task.name} {task.date} {task.id}
            </div>
            <button onClick={(e) => removeTask(index)}>delete</button>...
            <button onClick={(e) => toogleCompleted(task.id)}>toogle</button>
          </li>
        ))}
      </ul>
      {tempName}
      {tempDate.toString()}
    </div>
  );
}
