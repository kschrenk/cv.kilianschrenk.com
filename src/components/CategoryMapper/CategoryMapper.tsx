import CategoryObj from "../../models/CategoryObj";
import CategoryContent from '../CategoryContent/CategoryContent';
import classes from './CategoryMapper.module.css';
import {useContext} from 'react';
import {AppContext} from '../../store/AppContextProvider';

type CategoryMapperProps = {
    categoryList: CategoryObj[];
}

function CategoryMapper ({ categoryList }: CategoryMapperProps ) {
    const appCTX = useContext(AppContext);

    return <div>
        {categoryList.filter((item => appCTX.isActive(item.category))).map((category, index) => {
            return (
                <div key={`c-${index}`} className={ classes.category }>
                    <h2>{category.title}</h2>
                    <CategoryContent content={category.content} />
                </div>
            ); 
        })}
    </div>
}

export default CategoryMapper;