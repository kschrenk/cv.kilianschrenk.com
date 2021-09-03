import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import CategoryMapper from './components/CategoryMapper';
import CategoryObj from './models/CategoryObj';
import Container from './components/Layout/Container';

function App() {
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
    <Container>
      <div className="App">
        <h1>Lebenslauf</h1>
        <Header></Header>
        <Body>
          <CategoryMapper categoryList={cvObj} />
        </Body>
      </div>
    </Container>
  );
}

export default App;
