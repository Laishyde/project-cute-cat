import './App.css';
import Container from './Components/Container'
import SecondPage from './Components/SecondPage'
import Painel from './Components/Painel'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Test from './Components/Test'







import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
  
   
      <Router>
        <Header />
        <Container />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Painel" element={<Painel />} />
          <Route path="/Quer ganhar um sorriso" element={<SecondPage />} />
          <Route path="/Home" element={<Container />} />
        </Routes>
        <Footer />
      </Router>
   
    </div>
  );
}

export default App;
