import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './components/ItemListContainer.css'
import ItemCount from './components/ItemCount';

function App() {
  return (
  
    <div className="App">
    <NavBar />
    <ItemListContainer greeting='HOLA, aun no tenemos listas las pizzas :( '/> 
    
    </div>
  );
}

export default App;
