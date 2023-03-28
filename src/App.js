import './App.css';
import Header from './Components/Header';
import Container from './Components/Container'
import SecondPage from './Components/SecondPage'
import Painel from './Components/Painel'
import Footer from './Components/Footer'





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
        <Routes>
          <Route path="/Header" element={<Container />} />
          <Route path="/Painel" element={<Painel />} />
          <Route path="/Home" element={''} />
          <Route path="/Quer ganhar um sorriso" element={<SecondPage />} />
        </Routes>
        <Footer />
      </Router>
   
    </div>
  );
}

export default App;
