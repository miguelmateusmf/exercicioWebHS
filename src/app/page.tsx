"use client";
import React from "react";

export default function Home() {
  const [nome, setNome] = React.useState("utilizador");
  const [taskList, setTaskList] = React.useState([
    { id: "1", name: "clean kitchen" },
    { id: "2", name: "buy lightbulbs" },
  ]);

  return (
    <main>
      <h1 className="text-center">Task Tracker</h1>
      <h2>
        Olá{" "}
        <input
          placeholder={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        , tens x tarefas por concluir.
      </h2>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </main>
  );
}
