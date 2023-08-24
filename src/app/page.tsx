"use client";
import React from "react";
import ToDoList from "./components/ToDoList";

export default function Home() {
  const [nome, setNome] = React.useState("utilizador");

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
      <ToDoList />
    </main>
  );
}
