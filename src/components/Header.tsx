function Header (props: any) {
    return <div>
        <p>Header</p>
        <div>{props.children}</div>
    </div>
}

export default Header;