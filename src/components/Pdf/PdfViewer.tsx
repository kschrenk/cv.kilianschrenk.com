import { PDFViewer } from '@react-pdf/renderer';
import Document from './Document';

function PdfViewer() {
    return (
        <PDFViewer width="100%" height="100%">
            <Document />
        </PDFViewer>
    );
};

export default PdfViewer;