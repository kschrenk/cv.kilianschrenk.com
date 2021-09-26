import {Text, View} from '@react-pdf/renderer';
import {calculateArrayLength, isLast} from '../../utils/functions';
import styles from './styles';
import Description from './Description';

type CategoryItemProps = {
    description: string[];
    contentLength: number;
    index: number;
    company: string;
    location?: string;
    jobTitle: string;
    bullets: boolean;
    type: string;
}

function CategoryItem({description, contentLength, index, company, location, jobTitle, bullets, type}: CategoryItemProps) {
    const itemDescriptionLength = calculateArrayLength(description);                                        
    const isLastContentItem: boolean = isLast(contentLength, index);
    let contentStyle = {...styles.row, ...styles.flexDirRow, ...styles.fontSmall}
    if(!isLastContentItem) {
        contentStyle = {...contentStyle, ...styles.mb3}
    }
    
    return (
        <View style={contentStyle} key={`pdf-item-${index}`} wrap={false}>
            <View style={{...styles.col4}}>
                <View style={{...styles.row, ...styles.flexDirRow}}>
                    <Text>{company}</Text><Text>{location && `, ${location}`}</Text>
                </View>
            </View>
            <View style={{...styles.col6}}>
                <Text style={{...styles.fontMedium, ...styles.mb2}}>{jobTitle}</Text>
                {description.length !== 0 && description.map((listItem, index) => {
                    return (
                        <Description
                            key={`d-${index}-${company}`} 
                            itemDescriptionLength={itemDescriptionLength}
                            index={index}
                            bullets={bullets}
                            company={company}
                            text={listItem}      
                        />
                    );
                })}
            </View>
        </View>
    );
}

export default CategoryItem;