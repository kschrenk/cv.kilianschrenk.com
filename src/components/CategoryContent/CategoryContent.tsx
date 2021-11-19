import CategoryContentObj from '../../models/CategoryContentObj';

type CCP = {
    content: CategoryContentObj[];
}

function CategoryContent ({ content } : CCP) {    
    return (
        <div>
            {content.map((item, index) => {
                return (
                    <div key={`cc-${index}`} className={'border br1 mb10'}>
                        <div className={'bg-light flex justify-content-end pr4 py1 text-light'}>
                            <span className={'font-small'}>{item.dateString}</span>
                        </div>
                        <div className={'pl5 mx3'}>
                            <p className={'mb1'}><strong>{item.jobTitle}</strong></p>
                            <p className={'my0 text-light'}>{item.company}{item.location && `, ${item.location}`}</p>
                            <ul>{item.description && item.description.map(item => {
                                return (
                                    <li key={item}>
                                        {item}
                                    </li>
                                );
                            })}</ul>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    );
}

export default CategoryContent;