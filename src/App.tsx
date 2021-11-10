import classes from './App.module.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import CategoryMapper from './components/CategoryMapper/CategoryMapper';
import CategoryObj from './models/CategoryObj';
import Container from './components/Layout/Container';
import { useState } from 'react';
import PdfViewer from './components/Pdf/PdfViewer';
import AppContextProvider from './store/AppContextProvider';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';

export const cvObj: CategoryObj[] = [
    {
        title: 'Berufserfahrung',
        category: 'experience',
        content: [
        {
            jobTitle: 'Web-Entwickler',
            company: 'sblum GmbH',
            location: 'München',
            bullets: true,
        },
        {
            jobTitle: 'Web-Entwickler im Online-Marketing',
            company: 'Süddeutsche Zeitung',
            location: 'München',
            bullets: true,
            description: [
            'Entwicklung von Landingpages (CTRs bis zu 35%) mit HTML, CSS, Javascript und Grunt in Wordpress',
            'Deployment u.a. auf WPEngine mit Git Remote',
            'Content-Management (Tracking, Audits, Redirects)',
            'Cookie-Management und Eventtracking mit dem Tag Manager sowie Dasbhoard-Generierung in Google Analytics',
            'Konzeption von Wireframes mit Sketch',
            ],
        },
        {
            jobTitle: 'Werkstudent für den Relaunch der Webseite',
            company: 'Dr. Pfleger GmbH',
            location: 'Bamberg',
            bullets: true,
            description: [
            'Etablierung interner, digitaler Workflows zur fortlaufenden Content-Pflege',
            'Einarbeitung der Mitarbeiter in Typo3 „Neos“',
            'Erstellung von Bug-Reports',
            ]
        },
        {
            jobTitle: 'Selbständige Tätigkeiten während des Studiums',
            company: 'Freelancer',
            location: 'Bamberg',
            bullets: true,
            description: [
            'Content-Produktion (Video, Bild und Text) für den Social- Media-Kanal der Boulderlounge in Chemnitz', 
            'Webseiten-Erstellung in Wordpress u.a. für das Chinesische Filmfestival in Bamberg',
            ]
        }
        ]
    },
    {
        title: 'Praktika',
        category: 'internship',
        content: [
            {
                jobTitle: 'Praktikant im Eventmarketing',
                company: 'Salewa',
                location: 'München',
                bullets: true,
                description: [
                'Projektleitung der SALEWA Markenkampagne „Get vertical“',
                'Organisation der Get-Vertical-Events in Frankreich, Italien, Schweiz und Österreich',
                ]
            },
            {
                jobTitle: 'Werkstudent im Bereich Sports Marketing und PR',
                company: 'adidas Se',
                location: 'Herzogenaurach',
                bullets: true,
                description: [
                'Pressekontakt und Erstellung von Pressematerialien',
                'Organisation des lokalen PR-Events bei adidas Rockstars in Stuttgart'
                ]
            },
        ]
    },
    {
        title: 'Bildung',
        category: 'education',
        content: [
            {
                jobTitle: 'Fullstack Web Developer Nanodegree Programm',
                company: 'Udacity.com',
                bullets: true,
                description: [
                    'Programmierung von CRUD-Applikationen mit Python Flask und SQL-Alchemy',
                    'Entwicklung von REST-APIs und Authentifizierung',
                    'Server Deployment auf AWS und Heroku'
                ]
            },
            {
                jobTitle: 'Master of Arts in Kommunikationswissenschaften',
                company: 'Universität Bamberg',
                bullets: false,
                description: [
                'Mit dem Schwerpunkt auf Online- Massenkommunikation (Gesamtnote: 1,7)'
                ]
            },
            {
                jobTitle: 'Austauschprogramm in Mexiko Stadt',
                company: 'Universidad Iberoamericana',
                bullets: false,
                description: [
                'Auslandsstudium für zwei Semester im Bereich politischer Kommunikation und PR.'
                ]
            },
            {
                jobTitle: 'Bachelor of Arts in Kommunikationswissenschaft',
                company: 'Universität Bamberg',
                bullets: false,
                description: [
                'Mit den Nebenfächern BWL und Soziologie.'
                ]
            },
        ]
    },
    {
        title: 'Zertifikate',
        category: 'certificate',
        content: [
            {
                jobTitle: 'Technical-SEO-Seminar',
                company: '121Watt, München',
                bullets: true,
                description: [
                    'Domain-Hosting, IPs & Sitespeed',
                    'XML Sitemaps',
                    'Rich Snippets, Redirects, Server Basics'
                ]
            },
            {
                jobTitle: 'Analytics & Tag Manager Fundamentals',
                company: 'Google Academy',
                bullets: true,
                description: [
                    'Google Analytics Interface, Basic Reports, Campaign and Conversion Tracking',
                    'Setting up a Tag Manger, Data Layer, Variables and Events, Tags for Marketing and Remarketing'
                ]
            },
            {
                jobTitle: 'Webdesign',
                company: 'Techn. Hochschule, Regensburg',
                bullets: true,
                description: [
                    'HTML5, CSS-Styling und Javascript-Programme',
                    'Adobe Photoshop und Webdesign',
                    'Websites erstellen'
                ]
            },
        ]
    }
]

function App() {
    const [pdfView, setPdfView] = useState(false);

    return (
        <>
            <AppContextProvider>
                <nav className={classes.Nav}>
                    <button type="button" onClick={() => setPdfView(!pdfView)} className={classes.PdfToggle}>Toggle Pdf</button>
                    <CategoryFilter />
                </nav>
                {!pdfView 
                    ? <Container>
                        <div className={classes.App}>
                        <h1>Lebenslauf</h1>
                        <Header></Header>
                        <Body>
                            <CategoryMapper categoryList={cvObj} />
                        </Body>
                        </div>
                    </Container>
                    : <Container pdfView={pdfView}>
                        <PdfViewer categories={cvObj}/>
                    </Container>
                }
            </AppContextProvider >
        </>
    );
}

export default App;
