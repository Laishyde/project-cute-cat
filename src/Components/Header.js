import './Header.css';
import Cat from '../assets/cat.png'
import { Link } from 'react-router-dom';






const Header = () => {
  return (
    <div className='nav'>
    <div className="top">  
      <div>
        <img className='gato' src={Cat} alt="" />
      </div>
      <nav>
        <ul>
          <li><Link to="/Header">Home</Link></li>
          <li><Link to="/Quer ganhar um sorriso">Quer ganhar um sorriso</Link></li>
        
        </ul>
      </nav>
   
     
   
   
    </div>
    </div>
  )
}

export default Header