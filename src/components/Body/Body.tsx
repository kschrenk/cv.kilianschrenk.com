interface BodyProps {
    children: JSX.Element; 
}

function Body ({children} : BodyProps) {
    return <>
        <fieldset>
            <legend>Body</legend>
            <div>{children}</div>
        </fieldset>
    </>
}

export default Body;