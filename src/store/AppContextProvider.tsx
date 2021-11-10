import { createContext, useState } from "react"

type AppContextType = {
    categories: string[];
    removeCategory: (category: string) => void;
    addCategory: (category: string) => void;
    isActive: (category: string) => boolean;
}

export const AppContext = createContext<AppContextType>({
    categories: ['experience', 'internship', 'education', 'certificate'],
    isActive: () => true,
    addCategory: () => {},
    removeCategory: () => {},
});

const AppContextProvider: React.FC = ({children}) => {
    const [categories, setCategories] = useState(['experience', 'internship', 'education', 'certificate']);

    const removeCategory = (category: string) => {
        const formattedCategories = [...categories];

        setCategories(formattedCategories.filter(item => item !== category));
    }

    const addCategory = (category: string) => {
        setCategories([...categories, category])
    }

    const isActive = (category: string) => {
        return categories.includes(category);
    }

    const contextValue: AppContextType = {
        categories,
        removeCategory, 
        addCategory,
        isActive 
    }
    
    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
} 

export default AppContextProvider;