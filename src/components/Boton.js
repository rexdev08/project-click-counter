import React from "react";
import "../styles/Boton.css"


function Boton({text, esBotonDeClick, clickHandler}) {
  return (
    <button 
    className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" }
    onClick={clickHandler}>
      {text}
      </button>
  );
}


export default Boton