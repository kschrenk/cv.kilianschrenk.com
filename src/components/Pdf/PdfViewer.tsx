import { PDFViewer, Document, Page, Text, View} from '@react-pdf/renderer';
import CategoryObj from '../../models/CategoryObj';
import styles from './styles';
import BulletPoint from './BulletPoint/BulletPoint';

interface pdfViewerProps {
    categoryList: CategoryObj[];
}

function PdfViewer({categoryList}: pdfViewerProps) {
    return (
        <PDFViewer width="100%" height="100%">
            <Document>
                <Page style={styles.page}>
                    <Text style={styles.section}>Lebenslauf</Text>
                    <View style={ {...styles.row, ...styles.bgPrimary, ...styles.py2, ...styles.borderTop, ...styles.flexDirRow} }>
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
                        return(
                            <View key={`pdf-${index}`} style={styles.section}>
                                <Text style={{ ...styles.my2, ...styles.fontBold }}>{category.title}</Text>
                                <View style={{...styles.borderLeft}}>
                                    {category.content.map((item, index) => {
                                        return (
                                            <View style={{...styles.section, ...styles.row, ...styles.flexDirRow, ...styles.fontSmall}} key={`pdf-item-${index}`}>
                                                <View style={{...styles.col4}}>
                                                    <View style={{...styles.row, ...styles.flexDirRow}}>
                                                        <Text>{item.company}</Text><Text>{item.location && `, ${item.location}`}</Text>
                                                    </View>
                                                </View>
                                                <View style={{...styles.col6}}>
                                                    <Text style={{...styles.fontMedium, ...styles.mb2}}>{item.jobTitle}</Text>
                                                    {item.description && item.description.map((listItem, index) => {
                                                        return (
                                                            <View style={{...styles.flexDirRow, ...styles.mb1}} key={`d-${index}-${item.company}`}>
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

export default PdfViewer;