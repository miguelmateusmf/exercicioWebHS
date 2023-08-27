import React, { Dispatch } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { List } from "./List";

export interface Task {
  id: number;
  name: string;
  date: string;
  completed: boolean;
}

export default function Home() {
  const [taskList, setTaskList] = useLocalStorage("localSt", [
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
        <List taskList={taskList} setTaskList={setTaskList} />
        asdasdasda
        {
          <List
            taskList={taskList.filter((task: Task) => task.completed === true)}
            setTaskList={setTaskList}
          />
        }
      </ul>
      {tempName}
      {tempDate.toString()}
    </div>
  );
}
