import { Dispatch } from "react";
import { calculateDaysBetweenDates } from "../utils/calculateDaysBetweenDates";

import { Task } from "./ToDoList";
import greyCheck from "../images/greyCheck.png";
import blueCheck from "../images/blueCheck.png";
import deleteImg from "../images/delete.png";
import Image from "next/image";
import Modal from "./Modal";
interface PropsList {
  taskList: Task[];
  displayList: Task[];
  setTaskList: Dispatch<Task[]>;
}

interface DaysLeft {
  task: Task;
}

export function List({ taskList, displayList, setTaskList }: PropsList) {
  function removeTask(index: number): void {
    let copy = taskList.filter((task: Task) => task.id !== index);
    setTaskList(copy);
  }

  function toogleCompleted(id: number): void {
    const updatedTasks = taskList.map((task: Task) =>
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
    const updatedTasks = taskList.map((task: Task) =>
      task.id === id
        ? {
            id: task.id,
            name: name,
            date: date,
            completed: false,
          }
        : task
    );
    setTaskList(
      updatedTasks
        .slice()
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    );
  }

  function DaysLeft({ task }: DaysLeft) {
    const currentDate = new Date();
    const taskDate = new Date(task.date);

    const current = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    const isDateInPast = taskDate < current;

    if (isDateInPast === false) {
      return (
        <div
          title={`${
            task.completed === true
              ? ""
              : `Days until the task deadline: ${calculateDaysBetweenDates(
                  task.date
                )}`
          }`}
          className={`${task.completed === true ? " text-green-700" : ""}`}
        >
          {task.completed === true ? "Completed!" : task.date}
        </div>
      );
    } else {
      return (
        <div
          title={`${task.completed === true ? "" : "This task is delayed!"}`}
          className={`${
            task.completed === true ? " text-green-700" : "text-red-700"
          }`}
        >
          {task.completed === false ? task.date : "Completed!"}
        </div>
      );
    }
  }

  return displayList.map((task: Task) => (
    <li
      data-testid="task-item"
      className="flex bg-white p-4 rounded shadow justify-between mb-3"
      key={task.id}
    >
      <div className="flex items-center gap-1.5 ">
        <button
          aria-label="toogle completion"
          className=""
          onClick={(e) => toogleCompleted(task.id)}
        >
          {task.completed === false ? (
            <Image
              src={greyCheck}
              alt="grey check"
              height="24"
              min-height="24"
            />
          ) : (
            <Image
              src={blueCheck}
              alt="blue check"
              height="24"
              min-height="24"
            />
          )}
        </button>
        <div
          title={task.name}
          className={`${
            task.completed === true ? "line-through " : ""
          }truncate ...`}
        >
          {task.name.length <= 30 ? task.name : task.name.substr(0, 30) + "..."}
        </div>
        <DaysLeft task={task} />
      </div>
      <div className="flex gap-1.5 justify-end">
        <Modal
          id={task.id}
          name={task.name}
          date={task.date}
          editTask={editTask}
        />
        <button
          aria-label="Remove task"
          className=""
          onClick={(e) => removeTask(task.id)}
        >
          <Image src={deleteImg} alt="blue check" height="24" />
        </button>
      </div>
    </li>
  ));
}
