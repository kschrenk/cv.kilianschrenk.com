import CategoryObj from "../../models/CategoryObj";
import CategoryContent from '../CategoryContent/CategoryContent';

type CategoryMapperProps = {
    categoryList: CategoryObj[];
}

function CategoryMapper ({ categoryList }: CategoryMapperProps ) {
    return (
        <>
            {categoryList.map((category, index) => {
                return (
                    <div key={`c-${index}`} className={'mb15'}>
                        <h2 className={index === 0 ? 'mt2' : 'mt5'}>{category.title}</h2>
                        <CategoryContent content={category.content} />
                    </div>
                ); 
            })}
        </>
    );
}

export default CategoryMapper;