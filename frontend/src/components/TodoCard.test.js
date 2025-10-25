import { render, screen, fireEvent } from "@testing-library/react";
import TodoCard from "./TodoCard";

describe("TodoCard Component", () => {
  // Sample task object for testing
  const task = { title: "Test Task", description: "Task description" };
  const mockOnDone = jest.fn(); 

  // Test: Render task title and description correctly
  test("renders task title and description", () => {
    render(<TodoCard task={task} onDone={mockOnDone} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument(); // Title exists
    expect(screen.getByText("Task description")).toBeInTheDocument(); // Description exists
  });

  // Test: Trigger onDone callback when 'Done' button is clicked
  test("calls onDone when 'Done' button is clicked", () => {
    render(<TodoCard task={task} onDone={mockOnDone} />);
    const button = screen.getByText("Done");
    fireEvent.click(button); // Simulate click
    expect(mockOnDone).toHaveBeenCalledTimes(1); // Ensure callback executed
  });
});
