import './style.css'

function Options({children}){
    return (
        <ul>
        <li className="Option">{children}</li>
        </ul>
    )
}

export default Options