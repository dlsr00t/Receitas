//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Receitas from "./Receitas"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/receita" element={<Receitas></Receitas>}></Route>
      </Routes>
    </BrowserRouter>

  );
  
}

export default App;
