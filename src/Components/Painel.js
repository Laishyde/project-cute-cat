import './Painel.css'
import Form from './Form'
import { Link } from 'react-router-dom';



const Painel = (props) => {
  return (
    <div>
    
      <Form/>
        <h2>mais gatinhos pra você</h2>
        <div className='wall'>
          
              <div className='space one'></div>
              <div className='space two'></div>
              <div className='space three'></div>
              <div className='space four'></div>
              <div className='space five'></div>
              <div className='space six'></div>
        </div>
     
      
    </div>
  )
}

export default Painel