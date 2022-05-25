//import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <form>
        <label>
          Ingredientes:
          <input type="text" name="name" id="ingrediente" />
        </label>
        <input 
          onClick={() => {
          let ingredientes = document.getElementById('ingrediente').value
          window.alert(ingredientes)
        }} type="submit" value="Enviar" />
      </form>
    </div>
  );
  
}

export default App;
