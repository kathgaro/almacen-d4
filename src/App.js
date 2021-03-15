import './App.css';
import itemList from './componentes/itemList';
import { NavBar } from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <itemList />
    <h2>Tienda En Linea</h2>
    </div>
  );
}

export default App;
