import CategoryContentObj from '../../models/CategoryContentObj';
import {getCompanyLogo} from '../../utils/companyLogos';
import Link from '../../common/Link';
import Image from '../../common/Image';

type CCP = {
    content: CategoryContentObj[];
}

function CategoryContent ({ content } : CCP) {    
    return (
        <div>
            {content.map((item, index) => {
                return (
                    <div key={`cc-${index}`} className={'border br1 mb10 pb3'}>
                        <div className={'bg-light flex justify-content-end pr4 py1 text-light'}>
                            <span className={'font-small'}>{`${item.dateString}`}</span>
                        </div>
                        <div className={'mt6 mb5 px5 flex justify-content-space-between align-items-top'}>
                            <div className={'pr4'}>
                                <p className={'mb1 mt0'}><strong>{item.jobTitle}</strong></p>
                                <p className={'my0 text-light'}>
                                    <Link href={item.link ?? ''}>{item.company}</Link>
                                    {item.location && `, ${item.location}`}
                                </p>
                            </div>
                            <div style={{ maxWidth: '100px', height: '40px'}}>
                                {item.imageName && 
                                    <Link href={item.link ?? ''}>
                                        <Image src={getCompanyLogo(item.imageName)} filter='gray' />
                                    </Link>
                                }   
                            </div>
                        </div>
                        <div className={'pl5 mx90 md-mx80'}>
                            <ul>{item.description && item.description.map(item => {
                                return (
                                    <li key={item} className={'mb1'}>
                                        {item}
                                    </li>
                                );
                            })}</ul>
                        </div>
                        <div className={'flex px5 justify-content-end'}>
                            {item.portfolioLink && 
                                <Link 
                                    href={item.portfolioLink} 
                                    target="_self" 
                                    customStyles={{textTransform: 'uppercase', fontSize: '0.8rem'}}
                                >Zum Portfolio ???</Link>
                            }
                        </div>
                    </div>
                    );
                })
            }
        </div>
    );
}

export default CategoryContent;