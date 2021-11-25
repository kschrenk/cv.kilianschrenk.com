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

    test('it renders a fragment when link is an empty string', () => {
        render(<Link href={''}>Link test</Link>);
        expect(screen.getByText('Link test')).toBeInTheDocument();
        expect(screen.queryByRole('link')).toBeNull();
    })

    test('it renders custom styles', () => {
        render(<Link href='testlink.de' customStyles={{fontWeight: 'bold'}}>Testlink</Link>);
        const link = screen.getByRole('link');
        expect(link).toHaveStyle({fontWeight: 'bold'});
    })

    test('it renders a _blank target by default', () => {
        const {container} = render(<Link href={'https://test.de'}>Zum Test</Link>)
        expect(container).toMatchInlineSnapshot(`
        <div>
          <a
            href="https://test.de"
            target="_blank"
          >
            Zum Test
          </a>
        </div>
        `);
    })

    test('it renders target _self', () => {
        const {container} = render(<Link href={'https://test.de'} target="_self">Zum Test</Link>)
        expect(container).toMatchInlineSnapshot(`
        <div>
          <a
            href="https://test.de"
            target="_self"
          >
            Zum Test
          </a>
        </div>
        `);
    })
})