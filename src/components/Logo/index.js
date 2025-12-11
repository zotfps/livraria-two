import logo from'../../img/logo.svg';
import './style.css'

function Logo(){
    return (
        <div className="logo">
            <img src={logo} 
            alt="logo-livraria-two" 
            className='logo-img'>                
            </img>
            <p><strong>Livraria</strong> Two</p>
        </div>
    )
}

export default Logo