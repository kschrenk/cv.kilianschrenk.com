import { PDFViewer, Document, Page, Text, View, Image} from '@react-pdf/renderer';
import CategoryObj from '../../models/CategoryObj';
import styles from './styles';
import { useState } from 'react';
import CustomDate from '../../models/CustomDate';
import Category from './Category';
import kilianschrenk from '../../assets/images/kilianschrenk.jpg'

type pdfViewerProps = {
    categories: CategoryObj[];
}

function PdfViewer({categories}: pdfViewerProps) {
    const [now] = useState(new CustomDate(new Date()))

    return (
        <PDFViewer width="100%" height="100%">
            <Document title={`CV_KilianSchrenk_${now.toString()}`} language={'de'}>
                <Page style={styles.page}>
                    <Text style={styles.section}>Lebenslauf</Text>
                    <View style={ {...styles.row, ...styles.bgPrimary, ...styles.borderTop, ...styles.flexDirRow, ...styles.mb2} }>
                        <View style={styles.col4}>
                            <Image src={kilianschrenk} />
                        </View>
                        <View style={{ ...styles.py2, ...styles.px2 }}>
                            <View style={{...styles.mb2}}>
                                <Text style={{...styles.fontBold, ...styles.mb1 }}>Kilian Schrenk</Text>
                                <Text style={{...styles.fontNormal}}>Webentwickler</Text>
                            </View>
                            <View style={{...styles.fontLight, ...styles.fontSmall}}>
                                <Text style={{...styles.mb1}}>kilianschrenk.com</Text>
                                <Text>kilian.schrenk@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    {categories.map((category, index) => {
                        return (
                            <Category 
                                key={`pdf-${index}`} 
                                content={category.content} 
                                title={category.title} 
                                index={index} />
                        );
                    })}
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default PdfViewer;