export default interface CategoryContentObj {
    jobTitle: string;
    company: string;
    location?: string;
    description?: string[];
    bullets: boolean;
    type?: 'codingLanguage';
    dateString: string;
    imageName?: string;
    link?: string;
    portfolioLink?: string;
}