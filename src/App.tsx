import CategoryMapper from './components/CategoryMapper/CategoryMapper';
import Container from './components/Layout/Container';
import { useState, useEffect } from 'react';
import PdfViewer from './components/Pdf/PdfViewer';
import {cvObj} from './constants/index';
import ThemeContextProvider from './store/ThemeContextProvider';
import CategoryObj from './models/CategoryObj';

function App() {
    const [pdfView, setPdfView] = useState(false);
    const [curriculum, setCurriculum] = useState<CategoryObj[]>();

    useEffect(() => {
        setCurriculum(cvObj);
    }, [])

    return (
        <ThemeContextProvider>
            <header>
                <div className={'container'}>
                    <h1>CV Kilian Schrenk</h1>
                </div>
            </header>
            <div className={'container flex justify-content-end'}>
                <button className={'btn mt5'} type="button" onClick={() => setPdfView(!pdfView)}>{`show as ${pdfView ? 'html' : 'pdf'}`}</button>
            </div>
            {(!pdfView && curriculum) &&
                 <div className={'container'}><CategoryMapper categoryList={curriculum} /></div>
            }
            {(pdfView && curriculum) &&
                <Container pdfView={pdfView}>
                    <PdfViewer categories={curriculum}/>
                </Container>
            }
        </ThemeContextProvider>
    );
}

export default App;
