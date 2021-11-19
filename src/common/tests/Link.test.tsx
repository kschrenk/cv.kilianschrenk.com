import { render, screen } from '@testing-library/react';
import Link from '../Link';

describe('<Link />', () => {
    test('it renders the correct href', () => {
        render(<Link href="https://test.de">Link test</Link>);
        const link = screen.getByRole('link');
        expect(link).toHaveTextContent('Link test');
        expect(link).toHaveAttribute('href', 'https://test.de')
        expect(link).toHaveAttribute('target', '_blank')
    })

    test('it renders a shallow element when link is null', () => {
        render(<Link href={null}>Link test</Link>);
        expect(screen.getByText('Link test')).toBeInTheDocument();
    })
})