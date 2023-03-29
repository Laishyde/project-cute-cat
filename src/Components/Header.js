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
                <nav>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Quer ganhar um sorriso">Quer ganhar um sorriso</Link></li>

                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default Header