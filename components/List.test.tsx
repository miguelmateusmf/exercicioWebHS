import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { List } from "./List";

jest.mock("../images/greyCheck.png", () => ({
  src: "https://grey",
  alt: "grey",
  width: 24,
  height: 24,
}));
jest.mock("../images/blueCheck.png", () => ({
  src: "https://blue",
  alt: "blue",
  width: 24,
  height: 24,
}));
jest.mock("../images/delete.png", () => ({
  src: "https://delete",
  alt: "delete",
  width: 24,
  height: 24,
}));
jest.mock("../images/edit.png", () => ({
  src: "https://edit",
  alt: "edit",
  width: 24,
  height: 24,
}));

describe("List component", () => {
  const mockTaskList = [
    {
      id: 1,
      name: "Task 1",
      date: "2023-08-31",
      completed: false,
    },
  ];

  it("renders tasks correctly", () => {
    render(
      <List
        taskList={mockTaskList}
        displayList={mockTaskList}
        setTaskList={() => {}}
      />
    );

    const taskElements = screen.getAllByTestId("task-item");
    expect(taskElements).toHaveLength(mockTaskList.length);
  });

  it("toggles task completion", () => {
    const setTaskListMock = jest.fn();
    render(
      <List
        taskList={mockTaskList}
        displayList={mockTaskList}
        setTaskList={setTaskListMock}
      />
    );

    const toggleButtons = screen.getByLabelText("toogle completion");
    fireEvent.click(toggleButtons);

    expect(setTaskListMock).toHaveBeenCalledTimes(1);
  });

  it("removes task", () => {
    const setTaskListMock = jest.fn();
    render(
      <List
        taskList={mockTaskList}
        displayList={mockTaskList}
        setTaskList={setTaskListMock}
      />
    );

    const removeButtons = screen.getByLabelText("Remove task");
    fireEvent.click(removeButtons);

    expect(setTaskListMock).toHaveBeenCalledTimes(1);
  });
});
