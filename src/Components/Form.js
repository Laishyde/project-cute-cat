
import './Form.css';
import swal from 'sweetalert';
import catFat from '../assets/catfat.png'
import Cli from '../assets/click.png'
import Cateat from '../assets/comer.png'
import Hanb from '../assets/hanb.png'






const App = () => {
     swal("vamos começar qual gatinho você gosta mais", {
        buttons: {
             cancel: "Branco gordinho!",
               catch: {
                 text: "preto bravo!",
                 value: "catch",
             },
             defeat: "listrado",
         },
     })
         .then((value) => {
            switch (value) {

               case "defeat":
                     swal("esses são umas coisinhas lindas");
                     break;

                case "catch":
                     swal("ual!", "sim eles são fofos", "success");
                     break;

                default:
                     swal("sim muito lindo!");
            }
        });



    const changeImage = event => {
        const displayImage = event.target;
        console.log(displayImage);

        if (displayImage.src.match(Cli)) {
            if (displayImage.id === 'image1') {
                displayImage.src = catFat;
            } else if (displayImage.id === 'image2') {
                displayImage.src = Cateat;
            } else if (displayImage.id === 'image3') {
                displayImage.src = Hanb;
            }
        } else {
            displayImage.src = Cli;
        }
    };

    const images = document.querySelectorAll('#my-images img');
    images.forEach(image => {
        image.addEventListener('click', changeImage);
    });
      
        
 
  
 





    return (

         
        <div className='container'>
            <div className='pp'>
                <h1>Olá você já escolheu seu gatinho preferido agora da uma olhadinha no gatinho surpresa</h1>
            </div>
           
        <div className='tests'>
            <div  className='options'>
                 
                  
                <img id="image1" src={Cli} alt="" onClick={changeImage} />
             
            </div>
            <div className='options'>
                <img id="image2" src={Cli} alt="" onClick={changeImage} />
             
            </div>
            <div className='options'>
                <img id="image3" src={Cli} alt="" onClick={changeImage} />
              
            </div>
        </div>
       
       
        </div>
    );
};





export default App;