import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
    test('renders the correct header', () => {
        render(<App />);
        expect(screen.getByRole('heading', {name: /cv kilian schrenk/i})).toBeInTheDocument();
    })

    test('it renders all categories', () => {
        render(<App />);
        const categories = screen.getAllByRole('heading', {level: 2});
        expect(categories).toHaveLength(4);

        const categoryList = categories.map(item => item.textContent)        
        expect(categoryList).toEqual(['Berufserfahrung', 'Praktika', 'Bildung', 'Zertifikate']);
    })

    test('renders a btn to toggle view', async () => {
        render(<App />);
        const pdfBtn = screen.getByRole('button', {name: /show as pdf/i});
        expect(pdfBtn).toBeInTheDocument();
    })
})