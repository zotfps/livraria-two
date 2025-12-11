import './style.css'

function Icons({children, alt}){
    return(
        <img src={children} className="Icons" alt={alt}></img>
    )
}

export default Icons