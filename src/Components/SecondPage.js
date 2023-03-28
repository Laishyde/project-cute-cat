import './SecondPage.css'
import Video from '../assets/video.mp4'
import Gif from '../assets/gif.gif'
import Audio from '../assets/dango.mp3'
import ReactAudioPlayer from 'react-audio-player';


function SecondPage(props) {
    return (
        <div className='content'>
         
            <h1 className='info'>Quer ganhar um sorriso?</h1>
            <p>Esta é a página para ganhar um sorriso!</p>
           
            <video  controls >
                <source src={Video} type="video/mp4" />
            </video>
            <p>Faça mais daquilo que te deixa feliz</p>
            <img src={Gif} alt="gif de gatinho" /> 
          
            <ReactAudioPlayer
                src={Audio}
                autoPlay
                controls
            />
            <p>Você que ama os animais desde gatinhos, doguinhos esse site é para você que se sente triste ganhar um sorriso</p>
           
        </div>
    );
}

export default SecondPage;