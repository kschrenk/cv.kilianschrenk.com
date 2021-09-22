import { cvObj } from "./App";
import CategoryObj from './models/CategoryObj'

it('has not changed', () => {
    const cvTestObj: CategoryObj[] = [
        {
            title: 'Berufserfahrung',
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
            content: [
            {
                jobTitle: 'Fullstack Web Developer Nanodegree Programm',
                company: 'Udacity.com',
                bullets: true,
            },
            {
                jobTitle: 'Master of Arts in Kommunikationswissenschaften',
                company: 'Universität Bamberg',
                bullets: false,
                description: [
                'Mit dem Schwerpunkt auf Online- Massenkommunikation (Gesamtnote: 1,7)'
                ]
            },
            ]
        },
    ]
    expect(cvTestObj).toEqual(cvObj);
})