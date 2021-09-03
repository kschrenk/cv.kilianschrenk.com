import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import CategoryMapper from './components/CategoryMapper';
import CategoryObj from './models/CategoryObj';
import Container from './components/Layout/Container';
import { useState } from 'react';
import PdfViewer from './components/Pdf/PdfViewer';

function App() {
  const [pdfView, setPdfView] = useState(false);

  const cvObj: CategoryObj[] = [
    {
      title: 'Berufserfahrung',
      content: [
        {
          jobTitle: 'Web-Entwickler',
          company: 'sblum GmbH',
          location: 'München',
        },
        {
          jobTitle: 'Web-Entwickler im Online-Marketing',
          company: 'Süddeutsche Zeitung',
          location: 'München',
        },
        {
          jobTitle: 'Werkstudent für den Relaunch der Webseite',
          company: 'Dr. Pfleger GmbH',
          location: 'Bamberg',
        },
        {
          jobTitle: 'Selbständige Tätigkeiten während des Studiums',
          company: 'Freelancer',
          location: 'Bamberg',
        }
      ]
    },
    {
      title: 'Praktika',
      content: [
        {
          jobTitle: 'Praktikant im Eventmarketing',
          company: 'Salewa',
          location: 'München',
        },
        {
          jobTitle: 'Werkstudent im Bereich Sports Marketing und PR',
          company: 'adidas Se',
          location: 'Herzogenaurach',
        },
      ]
    },
    {
      title: 'Bildung',
      content: [
        {
          jobTitle: 'Fullstack Web Developer Nanodegree Programm',
          company: 'Udacity.com',
        },
      ]
    },
  ]

  return (
    <>
      <button type="button" onClick={() => setPdfView(!pdfView)} style={{display: 'block'}}>Toggle Pdf</button>
      {!pdfView 
        ? <Container>
            <div className="App">
              <h1>Lebenslauf</h1>
              <Header></Header>
              <Body>
                <CategoryMapper categoryList={cvObj} />
              </Body>
            </div>
          </Container>
        : <Container pdfView={pdfView}>
            <PdfViewer />
          </Container>
      }
    </>
  );
}

export default App;
