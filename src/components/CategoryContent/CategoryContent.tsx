import CategoryContentObj from '../../models/CategoryContentObj';
import classes from './CategoryContent.module.css';

interface CCP {
    content: CategoryContentObj[];
}

function CategoryContent ({ content } : CCP) {    
    return <div>{content.map((item, index) => {
            return <div key={`cc-${index}`} className={classes.categoryItem}>
                <h3>{item.jobTitle}</h3>
                <div>{item.company}{item.location && `, ${item.location}`}</div>
            </div>
        })}</div>
}

export default CategoryContent;