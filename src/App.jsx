
import Guitar from './components/Guitar'
import Header from './components/Header'
import { useCart } from './hooks/useCart'


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

  // así se accede al hook useCart, dentro del {  } deben ponerse las variables
  // tal cual se retorn en el archivo hook
  const { data, cart, addToCart, removeToCart, increaseQuantity, decrementQuantity, 
    clearCart, isEmpty, cartTotal } = useCart();

  return (

    <>
    
    <Header 
      cart={cart}
      removeToCart={removeToCart}
      increaseQuantity={increaseQuantity}
      decrementQuantity={decrementQuantity}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar 
              key={guitar.id}
              guitar={guitar}
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
