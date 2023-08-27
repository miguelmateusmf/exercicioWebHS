import { Dispatch } from "react";
import { calculateDaysBetweenDates } from "../utils/calculateDaysBetweenDates";
import Modal from "./Modal";
import { Task } from "./ToDoList";

interface PropsList {
  taskList: Task[];
  setTaskList: Dispatch<Task[]>;
}

export function List({ taskList, setTaskList }: PropsList) {
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
    setTaskList(updatedTasks);
  }

  return taskList.map((task: Task) => (
    <li key={task.id}>
      <div className={`${task.completed === true ? "line-through" : ""}`}>
        {task.name} {task.date} {task.id} ...
        {calculateDaysBetweenDates(task.date)}
      </div>
      <button onClick={(e) => removeTask(task.id)}>delete</button>...
      <button onClick={(e) => toogleCompleted(task.id)}>toogle</button>...
      <Modal
        id={task.id}
        name={task.name}
        date={task.date}
        editTask={editTask}
      />
    </li>
  ));
}
