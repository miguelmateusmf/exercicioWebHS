import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { List } from "./List";
import { calculateDaysBetweenDates } from "../utils/calculateDaysBetweenDates";

// Mock the calculateDaysBetweenDates function
jest.mock("../utils/calculateDaysBetweenDates", () => ({
  calculateDaysBetweenDates: jest.fn(() => 5), // Mocking a sample value for days difference
}));

describe("List Component", () => {
  const mockTaskList = [
    { id: 1, name: "Task 1", date: "2023-08-24", completed: false },
    { id: 2, name: "Task 2", date: "2023-08-25", completed: true },
    // Add more sample tasks as needed
  ];

  it.only("should render the list of tasks correctly", () => {
    const { getByText } = render(
      <List taskList={mockTaskList} setTaskList={() => {}} />
    );

    mockTaskList.forEach((task) => {
      expect(getByText(task.name)).toBeInTheDocument();
      expect(getByText(task.date)).toBeInTheDocument();
      expect(getByText(task.id.toString())).toBeInTheDocument();
      expect(
        getByText(task.completed ? "toogle" : "delete")
      ).toBeInTheDocument();
      expect(getByText("5")).toBeInTheDocument(); // Check the mocked days difference
    });
  });

  // Add more test cases as needed
});
