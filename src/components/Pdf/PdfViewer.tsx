import { PDFViewer, Document, Page, Text, View} from '@react-pdf/renderer';
import CategoryObj from '../../models/CategoryObj';
import styles from './styles';

interface pdfViewerProps {
    categoryList: CategoryObj[];
}

function PdfViewer({categoryList}: pdfViewerProps) {
    return (
        <PDFViewer width="100%" height="100%">
            <Document>
                <Page style={styles.page}>
                    <Text style={styles.section}>Lebenslauf</Text>
                    <View style={ {...styles.row, ...styles.bgPrimary, ...styles.py2} }>
                        <View style={styles.col4}>
                            <Text>Image</Text>
                        </View>
                        <View>
                            <View style={{...styles.mb1}}>
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
                                {category.content.map((item, index) => {
                                    return (
                                        <View style={{...styles.section, ...styles.borderLeft}} key={`pdf-item-${index}`}>
                                            <Text>{item.jobTitle}</Text>
                                            <Text>{item.company}</Text>
                                            <Text>{item.location}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        );
                    })}
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default PdfViewer;