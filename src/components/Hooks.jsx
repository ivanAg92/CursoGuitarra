
/*

¿Qué son los React Hooks o Hooks?

Permiten utilizar las diferentes funciones de React en los componentes, React tiene una serie de Hooks
pero también se pueden crear nuevos.

Categorías de Hooks

    useState *
    useEffect *
    useContext *

    useReducer
    useCallback
    useMemo
    useRef
    useImperativeHandle
    useLayoutEffect
    useInsertionEffect
    useTransition
    useDeferredValue
    useId
    useSyncExternalStore

    ************************************************************************************************************************
    ¿Qué es el State o Estado en React?
    El estado es una variable con información relevante en nuestra aplicación de react, algunas veces el estado 
    pertenece a un componente en específico o algunas veces deseas compartirlo a lo largo de diferentes componentes.
    Piensa en el state como el resultado de alguna interacción en el sitio o aplicación web: el listado de clientes, 
    la imagen a mostrar en una galería, si un usuario está autenticado o no.

    El state es creado por el hook de useState()

    Ejemplos.

    import { useState } from 'react'

    const [customer, setCustomer] = useState({});
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);

    Anatomía de un state

    const [customer, setCustomer] = useState({});
    customer es la variable que va a tener toda la información, es el state
    setCustomer es la función que modifica el state, es la que siempre se va a usar cuando quieras realizar cambios en el state
    ({}), se conoce como el valor inicial

    ------------------------------------------------------------------------------------------------------
    React reacciona con base en el state

    Cada que tu state cambia, la aplicación de React va a RENDERIZAR y actualizarse con esos cambios, no es 
    necesario hacer nada más y la interfaz siempre estará sincronizada con el state.
    Para modificar el state, se utiliza la función que extraemos cuando declaramos el state en nuestro componente.

    -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
    REGLAS DE LOS HOOKS
    Los Hooks se colocan en la parte superior de los componentes en React

    No se deben colocar dentro de condicionales, tampoco después de un return ni en funciones

    -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
   El Hook useEffect

   Después de useState es el más utilizado.

   useEffect siempre es un callback, que dependiendo de como se declare va a realizar diferentes acciones

   Es el sustituto de lo que antes era componentDidMount() y componentDidUpdate() que ya no se usan 

   Anatomía de un Effect

   import { useEffect } from 'react'

   useEffect(() => {
       console.log('El componente está listo');
   }, [])

   [] --> El arreglo vacío quiere decir que se ejecutará cuando el componente esté listo

   Usos de useEffect
   Al ejecutarse automáticamente cuando el componente está listo, es un buen lugar para colocar código para
   consultar una API o LocalStorage

   Debido a que le poddemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede 
   actualizar el componente cuando ese cambio suceda

   Dependiendo del valor que pasemos en el array de dependencias ( corchetes vacíos al final del useEffect[]) (o no pasemos nada)
   el hook de useEffect hará algo diferente 

*/