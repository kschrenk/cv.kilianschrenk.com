import styles from './styles';
import {Text, View} from '@react-pdf/renderer';
import CategoryContentObj from '../../models/CategoryContentObj';
import {calculateArrayLength} from '../../utils/functions';
import CategoryItem from './CategoryItem';

type CategoryProps = {
    title: string;
    content: CategoryContentObj[];
    index: number;
}

function Category({title, content, index}: CategoryProps) {
    const categoryContentLength = calculateArrayLength(content);

    return (
        <View key={`pdf-${index}`} style={styles.mb3}>
            <Text style={{ ...styles.my2, ...styles.fontBold, ...styles.fontLarge }}>{title}</Text>
            <View>
                {content.map((item, index) => {
                    return (
                        <CategoryItem
                            key={`pdf-item-${index}`}
                            index={index} 
                            description={item.description ?? []} 
                            contentLength={categoryContentLength}
                            company={item.company} 
                            location={item.location}
                            jobTitle={item.jobTitle}
                            bullets={item.bullets}
                            type={item.type ?? 'default'}
                        /> 
                    );
                })}
            </View>
        </View>
    );
}

export default Category;
