import './App.css';
import Logo from './components/Logo'
import Options from './components/Options'
import Icons from './components/Icons'
import sacola from './img/sacola.svg'
import perfil from './img/perfil.svg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo></Logo>
      <Options>Categorias</Options>
      <Options>Favoritos</Options>
      <Options>Minha Estante</Options>
      <Icons alt="ícone do perfil">{perfil}</Icons>
      <Icons alt="ícone da sacola">{sacola}</Icons>
      </header>
    </div>

  );
}

export default App;
