import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator title', () => {
    render(<App />);
    const linkElement = screen.getByText(/calculator/i);
    expect(linkElement).toBeInTheDocument();
});