import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Tests the App component", () => {
  test("It does the thing", () => {
    /**
     * Screencast told me to do it this way, but it 
     * gives out an error that points to docs:
     * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
     */
    // const { getByText } = render(<App />);
    render(<App />);
    const h1 = screen.getByText(/Hello testing library/);
    expect(h1).toHaveTextContent("Hello testing library");
  });
});