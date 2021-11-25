type LinkProps = {
    children: JSX.Element | string;
    href: string;
    target?: keyof typeof Target;
    customStyles?: { [key: string]: string };
}

enum Target {
    _blank,
    _self
}

export default function Link({ children, href, target='_blank', customStyles }:LinkProps) {        
    if(href === '') return <>{children}</>;

    return (
        <a 
            href={href} 
            target={target}
            style={customStyles ? customStyles : undefined}
        >{children}</a>
    );
}