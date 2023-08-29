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
  const [listType, setListType] = React.useState("all");

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

  function PickList() {
    if (listType === "all") {
      return (
        <List
          taskList={taskList}
          displayList={taskList}
          setTaskList={setTaskList}
        />
      );
    } else if (listType === "complete") {
      return (
        <List
          taskList={taskList}
          displayList={taskList.filter((task: Task) => task.completed === true)}
          setTaskList={setTaskList}
        />
      );
    } else {
      return (
        <List
          taskList={taskList}
          displayList={taskList.filter(
            (task: Task) => task.completed === false
          )}
          setTaskList={setTaskList}
        />
      );
    }
  }

  return (
    <div className="">
      <div className="flex justify-between gap-0.5 mb-3">
        <input
          className="p-4 rounded shadow focus:outline-none w-1/2"
          type="text"
          value={tempName}
          placeholder="Add Task"
          onChange={(e) => setTempName(e.target.value)}
        ></input>
        <input
          className="p-4 rounded shadow focus:outline-none w-1/2"
          type="date"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
        ></input>
      </div>
      <button
        className={`mb-3 border border-webhs-blue font-semibold p-4 rounded shadow focus:outline-none w-full  ${
          tempDate === "" || tempName === ""
            ? "border-gray-500 bg-white text-grey"
            : "border-webhs-blue bg-white text-webhs-blue hover:bg-webhs-blue hover:text-white transition hover:duration-300 duration-300 "
        }`}
        onClick={handleSubmit}
        disabled={tempDate === "" || tempName === "" ? true : false}
        title="Make sure to choose a name and date to submit the task!"
      >
        Add Task
      </button>

      <h1 className="flex justify-center m-5">
        Choose which Tasks to display bellow!
      </h1>

      <div className="flex gap-1 justify-center mb-3">
        <button
          className={`border border-webhs-blue p-2 rounded shadow ${
            listType === "all"
              ? " bg-webhs-blue text-white"
              : " bg-white text-webhs-blue"
          }`}
          onClick={(e) => setListType("all")}
        >
          All
        </button>
        <button
          className={`border border-webhs-blue p-2 rounded shadow  ${
            listType === "complete"
              ? " bg-webhs-blue text-white"
              : " bg-white text-webhs-blue"
          }`}
          onClick={(e) => setListType("complete")}
        >
          Complete
        </button>
        <button
          className={`border border-webhs-blue p-2 rounded shadow  ${
            listType === "incomplete"
              ? " bg-webhs-blue text-white"
              : " bg-white text-webhs-blue"
          }`}
          onClick={(e) => setListType("incomplete")}
        >
          Incomplete
        </button>
      </div>
      <div className="flex justify-between p-4 bg-gray-300 rounded shadow mb-3">
        <div className="w-1/3">Tasks</div>
        <div>Status</div>
        <div className="w-1/3 flex justify-end">Actions</div>
      </div>
      <ul>
        <PickList />
      </ul>
    </div>
  );
}
