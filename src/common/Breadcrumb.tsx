import Link from './Link';

export default function Breadcrumb() {
    return  (
        <>
            <Link href={'https//kilianschrenk.com'}>kilianschrenk.com</Link>
            <span className={'text-light'}> ・ </span>
            <Link href={'https//cv.kilianschrenk.com'}>cv</Link>
        </>
    );
}