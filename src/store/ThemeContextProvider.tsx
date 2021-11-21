import { createContext, useContext, useState, useEffect } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
}

const ThemeContext = createContext<string | undefined>(undefined);

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if(context === undefined) {
        throw new Error('useThemeContext must be within a ThemeContextProvider.')
    }

    return context;
}

export default function ThemeContextProvider({children}: ContextProviderProps) {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (preferedColorScheme.matches) {
            setTheme('dark');
            console.log('👽 Dark mode is enabled');
        }
        addThemeEventListener();
    }, []);

    const addThemeEventListener = () => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener( 'change', e => {
           if(e.matches) {
            setTheme('dark');
            console.log('switched to dark');
           } else {
               setTheme('light');
               console.log('switched to light');
           }
        }
    )};

    const value = theme;
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}