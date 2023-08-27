"use client";
import React from "react";
import Modal from "./Modal";

interface Task {
  id: number;
  name: string;
  date: string;
  completed: boolean;
}

export default function Home() {
  const [taskList, setTaskList] = React.useState([
    { id: 1.1, name: "clean kitchen", date: "", completed: false },
    { id: 2.1, name: "buy lightbulbs", date: "", completed: true },
  ]);
  const [taskCom, setTaskCom] = React.useState(true);
  const [tempName, setTempName] = React.useState("");
  const [tempDate, setTempDate] = React.useState("");
  const [listType, setListType] = React.useState("isCompleted");

  const isCompleted = (task: Task) => task.completed === true;
  const isNotCompleted = (task: Task) => task.completed === false;

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
    setTaskList(copy);
  }

  function toogleCompleted(id: number): void {
    const updatedTasks = taskList.map((task) =>
      task.id === id
        ? {
            id: task.id,
            name: task.name,
            date: task.date,
            completed: !task.completed,
          }
        : task
    );
    setTaskList(updatedTasks);
  }

  function editTask(id: number, name: string, date: string): void {
    const updatedTasks = taskList.map((task) =>
      task.id === id
        ? {
            id: task.id,
            name: name,
            date: date,
            completed: false,
          }
        : task
    );
    setTaskList(updatedTasks);
  }

  function List() {}

  function calculateDaysBetweenDates(date: string): number {
    const date3 = new Date();
    const date2 = new Date(
      date3.getFullYear(),
      date3.getMonth(),
      date3.getDate()
    );
    const date1 = new Date(date);
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());

    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    return daysDifference;
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
              {task.name} {task.date} {task.id} ...
              {calculateDaysBetweenDates(task.date)}
            </div>
            <button onClick={(e) => removeTask(index)}>delete</button>...
            <button onClick={(e) => toogleCompleted(task.id)}>toogle</button>...
            <Modal
              id={task.id}
              name={task.name}
              date={task.date}
              editTask={editTask}
            />
          </li>
        ))}
        asdasdasda
        {taskList
          .filter((task) => task.completed === true || false)
          .map((task, index) => (
            <li key={index}>
              <div
                className={`${task.completed === true ? "line-through" : ""}`}
              >
                {task.name} {task.date} {task.id}
              </div>
              <button onClick={(e) => removeTask(index)}>delete</button>...
              <button onClick={(e) => toogleCompleted(task.id)}>toogle</button>
              ...
              <Modal
                id={task.id}
                name={task.name}
                date={task.date}
                editTask={editTask}
              />
            </li>
          ))}
      </ul>
      {tempName}
      {tempDate.toString()}
    </div>
  );
}
