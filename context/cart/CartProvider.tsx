import { FC, useReducer, useEffect } from 'react';
import Cookie from "js-cookie";
import { ICartProduct, IProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'

export interface CartState {
  cart: ICartProduct[]
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

interface Props {
  children?: React.ReactNode | undefined
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

//Get Cookie
  useEffect(() => {

    try {
      
      let cookie =  Cookie.get('cart') !== undefined ?  JSON.parse(Cookie.get('cart')!) : []
      dispatch({type:'[Cart] - LoadCart from cookies | storage ',payload: cookie})
    } catch (error) {
      dispatch({type:'[Cart] - LoadCart from cookies | storage ',payload: []})
      
    }
 
  }, [])
  


  //Set Cookie
  useEffect(() => {
    
  if(state.cart.length > 0) Cookie.set('cart', JSON.stringify(state.cart))
    
    
  }, [state.cart])
  

  useEffect(() => {
    
    const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0)
    const subTotal = state.cart.reduce((prev, current) => (current.quantity * current.price) + prev, 0)
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal*(taxRate + 1)
}
   dispatch({type:'[Cart] - Update order sumery ',payload: orderSummary})

  },[state.cart])

  const addProductToCart = (product: ICartProduct) => {
    
    //dispatch({ type: '[Cart] - LoadCart from cookies | storage ',payload: product})
    
    //const productsIncart = state.cart.filter(item => item._id === product._id && item.size === product.size)
   // dispatch({ type: '[Cart] - LoadCart from cookies | storage ',payload:[...productsIncar, productsIncar]})

       
    //Verifiacar si hay productos
    const productsInCart = state.cart.some(item => item._id === product._id)
    if (!productsInCart) {
      return dispatch({type:'[Cart] - Update products in cart ',payload: [...state.cart,product]})
    }
    //diferente talla
    const productInCartButDiferentSize = state.cart.some(item => item._id === product._id && item.size === product.size)
    if (!productInCartButDiferentSize) {
      return dispatch({type:'[Cart] - Update products in cart ',payload: [...state.cart,product]})
    }

//Acumular
    const updatedProducts = state.cart.map(item => {
      if(item._id !== product._id) return item
      if(item.size !== product.size) return item

      //Actualizar la cantidad
      item.quantity += product.quantity

      return item
    })
    
    dispatch({type:'[Cart] - Update products in cart ', payload: updatedProducts})
}

  const updateCartQuantity = (product: ICartProduct) => {
    
    dispatch({type:'[Cart] - Change cart quantity ' ,payload: product })
  }

  const removeProductIncart = (product: ICartProduct) => {
   
    
    dispatch({type:'[Cart] - Remove product in cart ' ,payload: product })

  }
  return (
    <CartContext.Provider
      value={{
        ...state,

        //Methods
        addProductToCart,
        updateCartQuantity,
        removeProductIncart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
