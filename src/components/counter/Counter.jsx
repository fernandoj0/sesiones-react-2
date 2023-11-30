import { useState } from "react";
import { Button } from "../button/Button";

const CounterApp = ( ) => {

    /*
    Reglas de JSX( JavaScript XML  :
     - Los componentes deben estar dentro de una etiqueta o componente
       contenedor. NO se pueden poner componentes hermanos.
     - No se renderizan los valores undefined o null
     - No se renderizan valores booleanos
     - No se renderiza NaN o Infinity
     - No se renderiza funciones o objetos

   */

    // HookState
    const [counter, setCounter] = useState(0);


    const handleIncrement = ()=>{
      setCounter( counter + 1 ); // 0 + 1 = 1
    }

    const handleDecrement = ()=>{
      setCounter( counter - 1 ); // 0 + 1 = 1
    }

    const myCounter = (
    <div className="counter-container">
      <h2>
        {counter}
      </h2>
        <p>0</p>
        <Button onClick={handleIncrement} className="sum">+</Button>
        <Button onClick={handleDecrement} className="rest">-</Button>
        <button onClick={() => setCounter(0)} className="reset">Reset</button>
    </div>);

    return myCounter;
    
}

export default CounterApp; // no lleva parentesis