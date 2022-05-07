import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListadoContactos from './ListadoContactos';
import RegistroContacto from './RegistroContacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListadoContactos />} exact />
        <Route path='/registro' element={<RegistroContacto />} exact />
        <Route path='/registro/:id' element={<RegistroContacto />} exact />
      </Routes>
    </Router>
  );
}

export default App;
