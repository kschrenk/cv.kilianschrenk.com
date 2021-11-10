import CategoryContentObj from "./CategoryContentObj";

export default interface CategoryObj {
    title: string;
    content: CategoryContentObj[];
    category: 'experience' | 'education' | 'internship' |'certificate';
}

