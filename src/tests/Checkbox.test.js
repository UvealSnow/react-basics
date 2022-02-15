import { screen, render, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe("Test the Checkbox component", () => {
  test("Selecting checkbox", () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});