
// el nombre de la función debe coincidir con el nombre del archivo js 

import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db'

export const useCart = () => {
    

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

      // state derivado
    //const isEmpty = () => cart.length === 0;
    // con useMemo
    // recibe 2 parámetros, el primero la función y el segundo el arreglo de dependencias lo que hace que no se ejecute ese código
    // hasta que no cambie algo, en este caso hasta que no cambie "cart" ya sea que se quiten o se agreguen elementos.
    // a diferencia de la anterior ya no se usa el () indicando que es una función, pasa de isEmpty() a isEmpty
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);


    // se debe retornar un arreglo con los mismos nombres de las variables o constantes
    // que se usan en la lógica de este hook
    return {
        data,
        cart,
        addToCart,
        removeToCart,
        increaseQuantity,
        decrementQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}