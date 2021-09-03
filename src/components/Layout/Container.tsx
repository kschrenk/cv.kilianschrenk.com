import classes from './Container.module.css';

interface ChildrenProps {
    children: JSX.Element;
    pdfView?: boolean; 
}

function Container ({ children, pdfView = false }: ChildrenProps) {
    return <div className={`${pdfView ? classes.mw100 : classes.mw80} ${pdfView && classes.vh100}`}>{children}</div>
}

export default Container;