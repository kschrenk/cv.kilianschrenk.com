import CategoryMapper from './components/CategoryMapper/CategoryMapper';
import Container from './components/Layout/Container';
import { useState, useEffect } from 'react';
import PdfViewer from './components/Pdf/PdfViewer';
import {cvObj} from './constants/index';
import ThemeContextProvider from './store/ThemeContextProvider';
import CategoryObj from './models/CategoryObj';
import Link from './common/Link';
import Breadcrumb from './common/Breadcrumb';

function App() {
    const [pdfView, setPdfView] = useState(false);
    const [curriculum, setCurriculum] = useState<CategoryObj[]>();

    useEffect(() => {
        setCurriculum(cvObj);
    }, [])

    return (
        <>
            <ThemeContextProvider>
                <header>
                    <div className={'container'}>
                        <h1>CV Kilian Schrenk</h1>
                    </div>
                </header>
                <div className={'container pt5 opacity-low'}>
                    <Breadcrumb />
                </div>
                <div className={'container flex justify-content-end'}>
                    <button className={'btn mt5'} type="button" onClick={() => setPdfView(!pdfView)}>{`show as ${pdfView ? 'html' : 'pdf'}`}</button>
                </div>
                {
                    (!pdfView && curriculum) &&
                        <div className={'container'}><CategoryMapper categoryList={curriculum} /></div>
                }
                {
                    (pdfView && curriculum) &&
                        <Container pdfView={pdfView}>
                            <PdfViewer categories={curriculum}/>
                        </Container>
                }
            </ThemeContextProvider>
            <div className={'container flex justify-content-end'}>
                <Link 
                    href={'https://kilianschrenk.com/blog'} 
                    target="_self" 
                    customStyles={{textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem'}}
                >Zurück zum Blog →</Link>
            </div>
            <div className={'container flex justify-content-end'}>
                <Link 
                    href={'https://github.com/kschrenk/cv.kilianschrenk.com'} 
                    customStyles={{textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '2rem'}}
                >See SourceCode on Github →</Link>
            </div>
        </>
    );
}

export default App;
