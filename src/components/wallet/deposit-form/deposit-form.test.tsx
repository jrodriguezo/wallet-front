import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DepositForm from "@/components/wallet/deposit-form/deposit-form";
import "@testing-library/jest-dom";

describe("DepositForm", () => {
  const onSubmitMock = vi.fn();

  beforeEach(() => {
    render(<DepositForm onSubmit={onSubmitMock} error="" />);
  });

  it("renders the form fields", () => {
    expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /deposit/i })
    ).toBeInTheDocument();
  });

  it("calls onSubmit with the correct data", async () => {
    const amount = "100";

    fireEvent.input(screen.getByLabelText(/amount/i), {
      target: { value: amount },
    });

    fireEvent.click(screen.getByRole("button", { name: /deposit/i }));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({ amount });
    });
  });

  it("shows an error message when the amount field is empty", async () => {
    fireEvent.click(screen.getByRole("button", { name: /deposit/i }));

    expect(
      await screen.findByText(/this field is required/i)
    ).toBeInTheDocument();
  });
});
