import CategoryObj from "../../models/CategoryObj";
import CategoryContent from '../CategoryContent/CategoryContent';

type CategoryMapperProps = {
    categoryList: CategoryObj[];
}

function CategoryMapper ({ categoryList }: CategoryMapperProps ) {
    return <div>
        {categoryList.map((category, index) => {
            return (
                <div key={`c-${index}`}>
                    <h2 className={index === 0 ? 'mt2' : 'mt5'}>{category.title}</h2>
                    <CategoryContent content={category.content} />
                </div>
            ); 
        })}
    </div>
}

export default CategoryMapper;