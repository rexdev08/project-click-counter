import './App.css';
import freeCodeCampLogo from "./assets/freecodecamp-logo.png"
import Boton from "./components/Boton.js"
import Contador from "./components/Contador.js"
import { useState } from "react"

function App() {


const [ numClicks, setNumClicks] = useState(0);

  //funciones

const manejarClick = () => {

  setNumClicks( numClicks + 1 );
};

const reiniciarContador = () => {
  setNumClicks(0);
};

  return (
    <div className="App">

      <div className='freecodecamp-logo-container'>
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo freecodecamp" />
      </div>

      <div className="main">
        <Contador numClicks={numClicks} />
        <Boton 
        text="click"
         esBotonDeClick={true}
         clickHandler={manejarClick} />
        <Boton
         text="Reiniciar" 
         esBotonDeClick={false}
         clickHandler={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
