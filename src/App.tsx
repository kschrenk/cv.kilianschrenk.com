import CategoryMapper from './components/CategoryMapper/CategoryMapper';
import Container from './components/Layout/Container';
import { useState } from 'react';
import PdfViewer from './components/Pdf/PdfViewer';
import {cvObj} from './constants/index';
import ThemeContextProvider from './store/ThemeContextProvider';

function App() {
    const [pdfView, setPdfView] = useState(false);

    return (
        <ThemeContextProvider>
            <header>
                <div className={'container'}>
                    <h1>CV Kilian Schrenk</h1>
                </div>
            </header>
            <div className={'container flex justify-content-end'}>
                <button className={'btn mt5'} type="button" onClick={() => setPdfView(!pdfView)}>SHOW AS PDF</button>
            </div>
            {!pdfView 
                ? <div className={'container'}><CategoryMapper categoryList={cvObj} /></div>
                : <Container pdfView={pdfView}>
                    <PdfViewer categories={cvObj}/>
                </Container>
            }
        </ThemeContextProvider>
    );
}

export default App;
