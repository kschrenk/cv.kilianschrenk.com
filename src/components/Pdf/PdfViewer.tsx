import { PDFViewer, Document, Page, Text, View} from '@react-pdf/renderer';
import CategoryObj from '../../models/CategoryObj';
import styles from './styles';
import BulletPoint from './BulletPoint/BulletPoint';
import CategoryContentObj from '../../models/CategoryContentObj';
import CustomDate from '../../models/CustomDate';

type pdfViewerProps = {
    categoryList: CategoryObj[];
}

function PdfViewer({categoryList}: pdfViewerProps) {
    const now = new CustomDate(new Date());

    return (
        <PDFViewer width="100%" height="100%">
            <Document title={`CV_KilianSchrenk_${now.toString()}`} language={'de'}>
                <Page style={styles.page}>
                    <Text style={styles.section}>Lebenslauf</Text>
                    <View style={ {...styles.row, ...styles.bgPrimary, ...styles.py2, ...styles.borderTop, ...styles.flexDirRow, ...styles.mb2} }>
                        <View style={styles.col4}>
                            <Text>Image</Text>
                        </View>
                        <View>
                            <View style={{...styles.mb2}}>
                                <Text style={{...styles.fontBold }}>Kilian Schrenk</Text>
                                <Text style={{...styles.fontNormal}}>Web-Entwickler</Text>
                            </View>
                            <View style={{...styles.fontLight, ...styles.fontSmall}}>
                                <Text>kilianschrenk.com</Text>
                                <Text>kilian.schrenk@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    {categoryList.map((category, index) => {
                        const categoryContentLength = calculateArrayLength(category.content);
                        return (
                            <View key={`pdf-${index}`} style={styles.mb3}>
                                <Text style={{ ...styles.my2, ...styles.fontBold, ...styles.fontLarge }}>{category.title}</Text>
                                <View>
                                    {category.content.map((item, index) => {
                                        const itemDescriptionLength = item.description ? calculateArrayLength(item.description) : 0;                                        
                                        const isLastContentItem: boolean = isLast(categoryContentLength, index);
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
                                                </View>
                                                <View style={{...styles.col6}}>
                                                    <Text style={{...styles.fontMedium, ...styles.mb2}}>{item.jobTitle}</Text>
                                                    {item.description && item.description.map((listItem, index) => {
                                                        const isLastDescriptionItem = isLast(itemDescriptionLength, index);  
                                                        let descriptionStyle = {...styles.flexDirRow}
                                                        if(!isLastDescriptionItem) {
                                                            descriptionStyle = {...descriptionStyle, ...styles.mb1}
                                                        }

                                                        return (
                                                            <View style={descriptionStyle} key={`d-${index}-${item.company}`}>
                                                                {item.bullets && <BulletPoint key={`bp-${index}-${item.company}`}/>}
                                                                <Text style={{...styles.fontLight, ...styles.typoLight}}>{listItem}</Text>
                                                            </View>
                                                        );
                                                    })}
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                        );
                    })}
                </Page>
            </Document>
        </PDFViewer>
    );
};

export function calculateArrayLength(array: string[] | CategoryContentObj[]): number {
    return array.length
}

export function isLast(length: number, index: number): boolean {
    return (length - 1) === index;
}

export default PdfViewer;