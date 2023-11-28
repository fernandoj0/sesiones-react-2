function CounterApp( prop ) {
    /*
    Reglas de JSX( JavaScript XML  :
     - Los componentes deben estar dentro de una etiqueta o componente
       contenedor. NO se pueden poner componentes hermanos.
     - No se renderizan los valores undefined o null
     - No se renderizan valores booleanos
     - No se renderiza NaN o Infinity
     - No se renderiza funciones o objetos

   */
    const myCounter = (<div>
        <p>0</p>
        <button className="sum">+</button>
        <button className="rest">-</button>
        <button className="reset">Reset</button>

    </div>);

    return myCounter;
    
}

export default CounterApp; // no lleva parentesis