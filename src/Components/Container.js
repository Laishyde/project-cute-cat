import './Container.css';
import { Link } from 'react-router-dom';






const Container = () => {
 


  return (
    <div className="content">
    
        <h1>Bem Vindos ao mundo dos <span>Gatinhos</span></h1>
      <Link to="/Painel">
      <button className='button'>Vem conhecer</button>
      </Link>
    
    </div>
  )
}

export default Container