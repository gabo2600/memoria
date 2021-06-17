import React from "react"

import '../css/Modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      <h1>Ganaste</h1>
      <h2>Errores totales {props.err}</h2>
      <button onClick={async()=>{await props.reload()}}>Volver a jugar</button>
    </div>
  );
}

export default Modal;
