type LinkProps = {
    children: JSX.Element | string;
    href: string;
    target?: string;
}

export default function Link({ children, href, target='_blank' }:LinkProps) {
    if(href === '') return <>{children}</>;

    return <a href={href} target={target}>{children}</a>
}