import {Text, View} from '@react-pdf/renderer';
import {calculateArrayLength, isLast} from '../../utils/functions';
import styles from './styles';
import Description from './Description';
import CategoryContentObject from '../../models/CategoryContentObj'
import {useState, useEffect} from 'react';

type CategoryItemProps = {
    item: CategoryContentObject;
    contentLength: number;
    index: number;
}

function CategoryItem({item, contentLength, index}: CategoryItemProps) {
    const [description, setDescription] = useState<string[]>([]);

    useEffect(() => {
        item.description !== undefined && setDescription(item.description)
    }, [item.description])

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
                    <Text>{item.company}</Text><Text>{item.location && `, ${item.location}`}</Text>
                </View>
                <View>
                    <Text>{item.dateString}</Text>
                </View>
            </View>
            <View style={{...styles.col6}}>
                <Text style={{...styles.fontMedium, ...styles.mb2}}>{item.jobTitle}</Text>
                {description.length !== 0 && description.map((listItem, index) => {
                    return (
                        <Description
                            key={`d-${index}-${item.company}`} 
                            itemDescriptionLength={itemDescriptionLength}
                            index={index}
                            bullets={item.bullets}
                            company={item.company}
                            text={listItem}      
                        />
                    );
                })}
            </View>
        </View>
    );
}

export default CategoryItem;