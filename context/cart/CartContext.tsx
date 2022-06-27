import { createContext } from 'react'
import { ICartProduct } from '../../interfaces'

interface Contexprops {
  cart: ICartProduct[]

  //Methods
  addProductToCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as Contexprops)
