import Link from './Link';

export default function Breadcrumb() {
    return  (
        <>
            <Link href={'https//kilianschrenk.com'} target='_self'>kilianschrenk.com</Link>
            <span className={'text-light'}> ・ </span>
            <Link href={'#'} target='_self'>cv</Link>
        </>
    );
}