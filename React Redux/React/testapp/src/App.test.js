import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App component", () => {
  test('renders Testing text', () => {
    render(<App />);
    const data = screen.getByText("Testing");
    expect(data).toBeInTheDocument();
  });

  test('initial count value is zero', () => {
    render(<App />);
    const data = Number(screen.getByTestId("count").innerHTML);
    expect(data).toEqual(0);
  });

  test('count value increases after click', async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Increase"});
    await userEvent.click(button)
    const data = Number(screen.getByTestId("count").innerHTML);
    expect(data).toEqual(1);
  });

  test('length of li tag is more than one', async () => {
    render(<App />);
    const data = await screen.findAllByRole("listitem");
    expect(data).toHaveLength(20);
  });
})


