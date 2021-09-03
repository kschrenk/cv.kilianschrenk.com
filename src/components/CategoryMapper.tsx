import CategoryObj from "../models/CategoryObj";
import CategoryContent from './CategoryContent';
import classes from './CategoryMapper.module.css';

interface CategoryMapperProps {
    categoryList: CategoryObj[];
}

function CategoryMapper ({ categoryList }: CategoryMapperProps ) {
    return <div>
        <p>CategoryMapper</p>
        {categoryList.map(category => {
            return <div className={ classes.category }>
                <h2>{category.title}</h2>
                <CategoryContent content={category.content} />
            </div>;
        })}
    </div>
}

export default CategoryMapper;