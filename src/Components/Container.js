import './Container.css';
import { Link } from 'react-router-dom';







const Container = () => {
 


  return (
    <div className="content">
    
       
      <h1>Bem Vindos ao mundo dos</h1> <span>Gatinhos</span>
      <Link to="/Painel ">
      <button className='button '>Vem conhecer</button>
      </Link>
    
    
    </div>
  )
}

export default Container