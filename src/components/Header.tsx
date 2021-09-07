import classes from './Header.module.css';

function Header (props: any) {
    return <div className={classes.Header}>
        <fieldset>
            <legend>Header</legend>
            <p>Inhalt für den Header</p>
            <div>{props.children}</div>
        </fieldset>
    </div>
}

export default Header;