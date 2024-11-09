import { render, screen } from "@testing-library/react";
import App from "./App"; // Ajusta la ruta según sea necesario
import "@testing-library/jest-dom";

describe("App can be rendered", () => {
  it("renders without crashing", () => {
    render(<App />);

    expect(screen.getByText(/coolest wallet/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
