import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import CategoryObj from '../../models/CategoryObj';

interface pdfViewerProps {
    categoryList: CategoryObj[];
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 45,
        paddingBottom: 65,
        paddingLeft: 45,
        paddingRight: 35,
    },
    section: {
        fontSize: 12,
        marginBottom: 12,
    }
  });

function PdfViewer({categoryList}: pdfViewerProps) {
    return (
        <PDFViewer width="100%" height="100%">
            <Document>
                <Page style={styles.page}>
                    <Text style={styles.section}>Header</Text>
                    {categoryList.map((category, index) => {
                        return(
                            <View key={`pdf-${index}`} style={styles.section}>
                                <Text>{category.title}</Text>
                                {category.content.map((item, index) => {
                                    return (
                                        <View style={styles.section} key={`pdf-item-${index}`}>
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