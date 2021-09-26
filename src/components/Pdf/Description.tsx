import {Text, View} from '@react-pdf/renderer';
import BulletPoint from './BulletPoint/BulletPoint';
import {isLast} from '../../utils/functions';
import styles from './styles';

type DescriptionProps = {
    itemDescriptionLength: number;
    index: number;
    bullets: boolean;
    company: string;
    text: string;
}

function Description ({itemDescriptionLength, index, bullets, company, text}: DescriptionProps) {
    const isLastDescriptionItem = isLast(itemDescriptionLength, index);  
    let descriptionStyle = {...styles.flexDirRow}
    if(!isLastDescriptionItem) {
        descriptionStyle = {...descriptionStyle, ...styles.mb1}
    }

    return (
        <View style={descriptionStyle}>
            {bullets && <BulletPoint key={`bp-${index}-${company}`}/>}
            <Text style={{...styles.fontLight, ...styles.typoLight}}>{text}</Text>
        </View>
    );
}

export default Description;