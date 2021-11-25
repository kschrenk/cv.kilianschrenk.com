import {render, screen} from '@testing-library/react';
import Image from '../Image';
import {ThemeContext} from '../../store/ThemeContextProvider';
import React from 'react';

describe('<Image />', () => {
    test('it renders no filter by default', () => {
        const ThemeContextProviderMock = ({children}) => {
            return <ThemeContext.Provider value={'light'}>{children}</ThemeContext.Provider>
        }
        //@ts-ignore
        render(<Image src="/static/media/image.jpg" />, { wrapper: ThemeContextProviderMock });
        const image = screen.getByRole('img', { name: 'company logo'});
        expect(image.classList.length).toBe(0);
    })      

    test('it renders the gray filter correctly', () => {
        const ThemeContextProviderMock = ({children}) => {
            return <ThemeContext.Provider value={'light'}>{children}</ThemeContext.Provider>
        }
        //@ts-ignore
        render(<Image src="/static/media/image.jpg" filter={'gray'}/>, { wrapper: ThemeContextProviderMock });
        const image = screen.getByRole('img', { name: 'company logo'});
        expect(image).toHaveClass('filter-gray');
        expect(image).toHaveClass('opacity-low');
    }) 

    test('it renders the gray filter correctly when dark mode is enabled', () => {
        const ThemeContextProviderMock = ({children}) => {
            return <ThemeContext.Provider value={'dark'}>{children}</ThemeContext.Provider>
        }
        //@ts-ignore
        render(<Image src="/static/media/image.jpg" filter={'gray'}/>, { wrapper: ThemeContextProviderMock });
        const image = screen.getByRole('img', { name: 'company logo'});
        expect(image).toHaveClass('filter-white');
        expect(image).toHaveClass('opacity-low');
    })
    
    test('it renders the correct style', () => {
        const ThemeContextProviderMock = ({children}) => {
            return <ThemeContext.Provider value={'dark'}>{children}</ThemeContext.Provider>
        }
        //@ts-ignore
        render(<Image src="/static/media/image.jpg" filter={'gray'}/>, { wrapper: ThemeContextProviderMock });
        const image = screen.getByRole('img', { name: 'company logo'});
        expect(image).toHaveStyle({width: '100%', height: 'auto', maxHeight: '100%'})
    }) 
})