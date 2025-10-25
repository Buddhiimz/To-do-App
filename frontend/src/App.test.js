import { render, screen, waitFor, act } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios"); 

// Test: App renders task list fetched from API
test("renders task list", async () => {
  const mockData = [{ _id: 1, title: "Test Task" }];
  axios.get.mockResolvedValue({ data: mockData }); // Mock API response

  // Render the component inside act to handle state updates
  await act(async () => {
    render(<App />);
  });

  // Wait for the task to appear in the DOM
  await waitFor(() => {
    expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
  });
});
