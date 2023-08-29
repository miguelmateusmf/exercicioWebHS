import React from "react";
import ToDoList from "../components/ToDoList";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Task Focus</title>
      </Head>
      <h1 className="text-center font-medium text-2xl p-3 mb-5 bg-white">
        Task Focus
      </h1>

      <div className="max-w-screen-xl m-auto">
        <ToDoList />
      </div>
    </main>
  );
}
