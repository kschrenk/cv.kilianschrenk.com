import { PDFViewer, Document, Page, Text, View} from '@react-pdf/renderer';
import CategoryObj from '../../models/CategoryObj';
import styles from './styles';

import CustomDate from '../../models/CustomDate';
import Category from './Category';

type pdfViewerProps = {
    categories: CategoryObj[];
}

function PdfViewer({categories}: pdfViewerProps) {
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
                    {categories.map((category, index) => <Category key={`pdf-${index}`} content={category.content} title={category.title} index={index} />)}
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default PdfViewer;