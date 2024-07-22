import { useState, useEffect } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db'


// los componentes siempre deben ir con mayúsculas, ejemplo APP
function App() {
  // El Header con mayúscula es indicativo de que se está importando un componente

  /*
  //state
  const [auth, setAuth] = useState(false);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]); 

  //useEffect
  useEffect(() => {
    if(auth){
      console.log('Autenticado');
    }
  }, [auth]);

  setTimeout(() => {
    setAuth(true);
  }, 3000)
  */

  // Esta es una manera de llenar un state, es la manera recomendada para consumir un state de un API o servicio
  /*const [data, setData] = useState([]);

  useEffect(() => {
    setData(db);
  }, []);*/

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  //Para ejemplos del curso lo llenaremos solo con el state
  const [data, setData] = useState(db);

  //state para el carrito de compras
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // cada que cambie "cart" va a estar actualizándose el localstorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(item){

    //findIndex devuelve -1 si no existe en el arreglo.
    //esta función devuelve un callback, se le puede poner cualquier nombre, en este caso guitar
    // si existe el elemento devuelve valores mayores a -1
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if(itemExist >= 0){ // existe en el carrito
      // verifica que no agregue más del máximo permitido
      if(cart[itemExist].quantity >= MAX_ITEMS) return;

      // creamos una copia del state "...cart"
      const updateCart = [...cart];
      //aumentamos en donde encuentre el elemento, afectando a la copia del state
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    }else{
      // agregamos una nueva propiedad al objeto guitarra inicializandolo en 1
      item.quantity = 1;
      setCart([...cart, item])
    }
    
  }

  function removeToCart(id){

    // filtramos elementos que sean diferentes al seleccionado para que esos se mantengan

    //prevCart el state anterior
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id){
    // .map a diferencia de foreach, va a crear un arreglo nuevo, ambos sirven para iterar un arreglo pero MAP crea una copia en la variable creada
    const updateCart = cart.map(item => {
      if(item.id === id && item.quantity < MAX_ITEMS ){
        return {
          //...item --> quiere que voy a retornar el arreglo tal cual es
          ...item,
          quantity : item.quantity + 1
        }
      }
      return item;
    })
    setCart(updateCart);
  }

  function decrementQuantity(id){
    console.log(id);
    const updateCart = cart.map(item =>{
      if(item.id === id && item.quantity > MIN_ITEMS){
        return {
          //...item --> quiere que voy a retornar el arreglo tal cual es
          ...item,
          quantity : item.quantity - 1
        }
      }
      return item;
    })
    setCart(updateCart);
  }

  function clearCart(e){
    setCart([]);
  }

  return (

    <>
    
    <Header 
      cart={cart}
      removeToCart={removeToCart}
      increaseQuantity={increaseQuantity}
      decrementQuantity={decrementQuantity}
      clearCart={clearCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar 
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
