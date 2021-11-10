import { AppContext } from '../../store/AppContextProvider';
import React, { useContext } from 'react';

const CategoryFilter: React.FC = () => {
    const appCTX = useContext(AppContext);

    const selectCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if(appCTX.isActive(value)) {
            appCTX.removeCategory(value);
        } else {
            appCTX.addCategory(value)
        }
    }

    return (
        <div>
            <label>
                <input type="checkbox" value={'experience'} checked={appCTX.isActive('experience')} onChange={selectCategoryHandler}></input>
                Berufserfahrung
            </label>
            <label>
                <input type="checkbox" value={'internship'} checked={appCTX.isActive('internship')} onChange={selectCategoryHandler}></input>
                Praktika
            </label>
            <label>
                <input type="checkbox" value={'education'} checked={appCTX.isActive('education')} onChange={selectCategoryHandler}></input>
                Bildung
            </label>
            <label>
                <input type="checkbox" value={'certificate'} checked={appCTX.isActive('certificate')} onChange={selectCategoryHandler}></input>
                Zertifikate
            </label>
        </div>
    )
}

export default CategoryFilter;