
// Estructura de un componente, el nombre de la función y el del archivo deben ser el mismo

//forma 1 de importar Fragment
//import { Fragment } from 'react'

//Forma 2 de importar Fragmen
//import React from 'react'

//La forma 3 es no pasar absulutamente nada, solo se pasan etiquetas de apertura y cierre

/*
function EjemploFuncionalComponente(){
    return(

    )
}
*/

// JSX es Javascript Syntax Extension

//REGLAS JSX
//Si un elemento HTML tiene una etiqueta de apertura, deberá tener una de cierre
//las etiquetas de solo apertura coom <link> <img> o <input> deberán finalizar con />

//Cada componente debe tener un return, de lo contrario no tiene sentido crear un componente
//En este return, debe haber máximo un solo elemento en el nivel máximo, esto se refiere a que se pueden regresar muchas etiquetas dentro de un div

export default function EjemploFuncionalComponente(){
    // Antes del return se puede escribir todo el código JS que se requiera para renderizar en el HTML
    const total = 100

    //en el return se muestran todos los valores de JS que se desee
    return(
        
        <>
            <p>total a pagar: {total}</p>
            <p>Después</p>
        </>
    )

    //Fragment hace que no se tengan que usar tantos divs innecesarios, pero cumple la característica de JSX
    // de solo retornar un solo elemento, dentro si podemos tener mucho código HTML pero regresamos un solo elemento
    // del nivel máximo que es el Fragment

    /*
    Forma 1 <Fragment></Fragment>, esto con esta importación import { Fragment } from 'react'
    Forma 2 <React.Fragment></React.Fragment>, esto con import React from 'react'
    Forma 3, sin importaciones, solo <></>
    */
}

