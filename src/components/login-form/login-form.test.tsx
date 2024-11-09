import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "@/components/login-form/login-form";
import "@testing-library/jest-dom";

describe("LoginForm", () => {
  const onSubmitMock = vi.fn();

  beforeEach(() => {
    render(<LoginForm onSubmit={onSubmitMock} />);
  });

  it("renders the form fields", () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("calls onSubmit with the correct data", async () => {
    const email = "test@example.com";
    const password = "password123";

    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: email },
    });
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: password },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({ email, password });
    });
  });

  it("shows error messages when fields are empty", async () => {
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password is required/i)
    ).toBeInTheDocument();
  });
});
