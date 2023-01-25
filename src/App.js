
import './App.css';
import NavBar from './components/NavBar'
import Bright from './components/Bright'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar background={"transparent"}/>
    <ItemListContainer greeting="Lista de Productos"/>
    <Bright title="NewBright"/>
    </>
   )
}

export default App;
