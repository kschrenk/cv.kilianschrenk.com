import CategoryContentObj from '../../models/CategoryContentObj';
import classes from './CategoryContent.module.css';

type CCP = {
    content: CategoryContentObj[];
}

function CategoryContent ({ content } : CCP) {    
    return <div>{content.map((item, index) => {
            return <div key={`cc-${index}`} className={classes.contentWrapper}>
                <span className={classes.badge}>{item.dateString}</span>
                <p><strong>{item.jobTitle}</strong></p>
                <p>{item.company}{item.location && `, ${item.location}`}</p>
                <ul>{item.description && item.description.map(item => {
                    return (
                        <li className={classes.descriptionItem}>
                            {item}
                        </li>
                    );
                })}</ul>
            </div>
        })}</div>
}

export default CategoryContent;