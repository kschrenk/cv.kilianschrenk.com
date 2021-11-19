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
            dateString: '09.2020 - heute',
            description: [
                'Web-Anwendungen auf Basis von Symfony und PHP', 
                'User-Interfaces mit React',
            ]
        },
        {
            jobTitle: 'Web-Entwickler im Online-Marketing',
            company: 'Süddeutsche Zeitung',
            location: 'München',
            bullets: true,
            dateString: '01.2019 - 09.2020',
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
            dateString: '04.2018 - 02.2018',
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
            dateString: '01.2017 - 02.2018',
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
                dateString: '03.2016 - 08.2016',
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
                dateString: '09.2015 - 02.2016',
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
                dateString: '01.2020 - 05.2020',
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
                dateString: '01.2015 - 09.2018',
                description: [
                'Mit dem Schwerpunkt auf Online- Massenkommunikation (Gesamtnote: 1,7)'
                ]
            },
            {
                jobTitle: 'Austauschprogramm in Mexiko Stadt',
                company: 'Universidad Iberoamericana',
                bullets: false,
                dateString: '08.2013 - 05.2014',
                description: [
                'Auslandsstudium für zwei Semester im Bereich politischer Kommunikation und PR.'
                ]
            },
            {
                jobTitle: 'Bachelor of Arts in Kommunikationswissenschaft',
                company: 'Universität Bamberg',
                bullets: false,
                dateString: '05.2011 - 07.2015',
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
                dateString: 'September 2019',
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
                dateString: 'August 2019',
                description: [
                    'Google Analytics Interface, Basic Reports, Campaign and Conversion Tracking',
                    'Setting up a Tag Manger, Data Layer, Variables and Events, Tags for Marketing and Remarketing'
                ]
            },
            {
                jobTitle: 'Webdesign',
                company: 'Techn. Hochschule, Regensburg',
                bullets: true,
                dateString: 'WiSe 2017/ 2018',
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
    const [showFilter, setShowFilter] = useState(false);

    return (
        <>
            <AppContextProvider>
                <header>
                    <h1>Lebenslauf</h1>
                    <nav>
                        <button style={{marginRight: '12px'}} type="button" onClick={() => setPdfView(!pdfView)}>Toggle pdf-view</button>
                        {/* <button type="button" onClick={() => setShowFilter(!showFilter)}>{`${showFilter ? 'Hide' : 'Show'} filter`}</button> */}
                    </nav>
                    {showFilter && <CategoryFilter />}
                </header>
                {!pdfView 
                    ? <main>
                            <CategoryMapper categoryList={cvObj} />
                    </main>
                    : <Container pdfView={pdfView}>
                        <PdfViewer categories={cvObj}/>
                    </Container>
                }
            </AppContextProvider >
        </>
    );
}

export default App;
