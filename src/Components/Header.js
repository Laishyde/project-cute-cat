import React from 'react'
import Cat from '../assets/cat.png'
import { Link } from 'react-router-dom';
import './Header.css';



function Header() {
    return (
        <div>


            <div className="top">
                <div>
                    <img className='gato' src={Cat} alt="" />
                </div>
                <nav className='nav2'>
                    <ul>
                        <li>  <Link to="/https://github.com/Laishyde/project-cute-cat">Voltar </Link></li>
                        
                        <li><Link to="/Quer ganhar um sorriso">
                            
                            Quer ganhar um sorriso</Link></li>

                    </ul>
                </nav>
            </div>
            <div className='mob'>
                <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label for="menu-icon"></label>
                <nav class="nav">
                    <ul class="pt-5">
                        <li> <Link to="/https://github.com/Laishyde/project-cute-cat">Voltar </Link></li>
                        <li><Link to="/Quer ganhar um sorriso"> Sorrisos</Link></li>
                    
                    </ul>
                </nav>

                <div className="section-center">

                </div>
            </div>


        </div>
    );
}

export default Header