import classes from './Container.module.css';

interface ChildrenProps {
    children: JSX.Element; 
}

function Container ({ children}: ChildrenProps) {
    return <div className={classes.wrapper}>{children}</div>
}

export default Container;