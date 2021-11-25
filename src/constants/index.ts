import CategoryObj from '../models/CategoryObj';

export const cvObj: CategoryObj[] = [
    {
        title: 'Berufserfahrung',
        category: 'experience',
        content: [
        {
            jobTitle: 'Webentwickler',
            company: 'sblum GmbH',
            location: 'München',
            bullets: true,
            dateString: '09.2020 - heute',
            imageName: 'sblum',
            link: 'https://sblum.de',
            description: [
                'Objektorientierte sowie funktionale Programmierung von Webanwendungen mit PHP und JavaScript auf Basis des Symfony Frameworks',
                'Entwicklung von responsiven User-Interfaces sowie Single-Page-Anwendungen mit React, Symfony Encore, Symfony UX und Sass',
                'Unit- und Functional-Tests mit PHPUnit, Jest und React-Testing-Library',
                'Test-Automatisierung mit Github Actions',
            ],
        },
        {
            jobTitle: 'Webentwickler im Online-Marketing',
            company: 'Süddeutsche Zeitung',
            location: 'München',
            bullets: true,
            dateString: '01.2019 - 09.2020',
            imageName: 'sz',
            link: 'https://www.sueddeutsche.de/',
            portfolioLink: 'https://kilianschrenk.com/landing-pages/',
            description: [
                'Entwicklung von Landingpages (CTRs bis zu 35%) mit HTML, CSS, JavaScript und Grunt in WordPress',
                'Content-Management (Tracking, Audits, Redirects)',
                'Pixel-Management und Eventtracking mit dem Google Tag Manager sowie Dasbhoard-Generierung in Google Analytics',
                'Konzeption von Wireframes mit Sketch, Adobe XD und Figma',
            ],
        },
        {
            jobTitle: 'Werkstudent',
            company: 'Dr. Pfleger GmbH',
            location: 'Bamberg',
            bullets: true,
            dateString: '02.2018 - 04.2018',
            imageName: 'drpfleger',
            link: 'https://dr-pfleger.de/',
            description: [
                'Unterstützung beim Relaunch der Corporate Website',
                'Etablierung interner, digitaler Workflows zur fortlaufenden Content-Pflege',
                'Einarbeitung der Mitarbeiter in Typo3 „Neos“',
                'Erstellung von Bug-Reports für die technische Entwicklung',
            ]
        },
        {
            jobTitle: 'Selbständige Tätigkeiten während des Studiums',
            company: 'Freelancer',
            location: 'Bamberg',
            bullets: true,
            dateString: '01.2017 - 02.2018',
            imageName: 'boulderlounge',
            link: 'https://www.boulderlounge-chemnitz.de/',
            portfolioLink: 'https://raumausstatter-schrenk.de/',
            description: [
                'Content-Produktion (Video, Bild und Text) für den Facebook- und Instagramaccount der Boulderlounge Chemnitz', 
                'Webseiten-Erstellung in WordPress u.a. für das Chinesische Filmfestival in Bamberg oder die Raumausstattung Schrenk in Fürth',
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
                imageName: 'salewa',
                link: 'https://www.oberalp.com/de',
                portfolioLink: 'https://www.youtube.com/watch?v=AcPwTqXF_MU',
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
                imageName: 'adidas',
                link: 'https://adidas.de/',
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
                imageName: 'udacity',
                link: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044',
                portfolioLink: 'https://kilianschrenk.com/full-stack/',
                description: [
                    'Programmierung von CRUD-Applikationen mit Python, JavaScript, Flask und SQLAlchemy',
                    'Entwicklung von REST-APIs und Authentifizierung mit 0Auth',
                    'Deployment von Flask-Anwendungen auf AWS sowie Aufbau einer CodePipeline'
                ]
            },
            {
                jobTitle: 'Master of Arts in Kommunikationswissenschaften',
                company: 'Universität Bamberg',
                bullets: false,
                dateString: '01.2015 - 09.2018',
                imageName: 'unibamberg',
                link: 'https://www.uni-bamberg.de/kowi/',
                description: [
                    'Mit Schwerpunkt auf digitaler Massenkommunikation (Gesamtnote: 1,7)', 
                    'Exportmodul: Informatik und Programmierung für die Kulturwissenschaften'
                ]
            },
            {
                jobTitle: 'Austauschprogramm in Mexiko Stadt',
                company: 'Universidad Iberoamericana',
                bullets: false,
                dateString: '08.2013 - 05.2014',
                location: 'Mexico City',
                link: 'https://ibero.mx/',
                description: [
                    'Auslandsstudium für zwei Semester im Bereich politischer Kommunikation und PR.'
                ]
            },
            {
                jobTitle: 'Bachelor of Arts in Kommunikationswissenschaft',
                company: 'Universität Bamberg',
                bullets: false,
                dateString: '05.2011 - 07.2015',
                imageName: 'unibamberg',
                link: 'https://www.uni-bamberg.de/kowi/',
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
                imageName: '121watt',
                location: 'München',
                link: 'https://www.121watt.de/seminare/technical-seo-seminar/',
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
                imageName: 'google',
                link: 'https://analytics.google.com/analytics/academy/certificate/pNFR1EAZSbe-atsKCB52eA',
                description: [
                    'Google Analytics Interface, Basic Reports, Campaign and Conversion Tracking',
                    'Setting up a Tag Manger, Data Layer, Variables and Events, Tags for Marketing and Remarketing'
                ]
            },
            {
                jobTitle: 'Webdesign',
                company: 'Techn. Hochschule',
                bullets: true,
                dateString: 'WiSe 2017/ 2018',
                location: 'Regensburg',
                imageName: 'regensburg',
                link: 'https://kurse.vhb.org/VHBPORTAL/kursprogramm/kursprogramm.jsp?kDetail=true',
                description: [
                    'HTML5, CSS-Styling und Javascript-Programme',
                    'Adobe Photoshop und Webdesign',
                    'Websites erstellen'
                ]
            },
        ]
    }
]