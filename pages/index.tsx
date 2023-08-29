import React from "react";
import ToDoList from "../components/ToDoList";

export default function Home() {
  const [nome, setNome] = React.useState("utilizador");

  return (
    <main className="">
      <h1 className="text-center font-medium text-2xl p-3 mb-5 bg-white">
        Task Tracker
      </h1>

      <div className="max-w-screen-xl m-auto">
        <ToDoList />
      </div>
    </main>
  );
}
