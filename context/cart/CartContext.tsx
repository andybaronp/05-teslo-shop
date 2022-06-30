import { createContext } from 'react'
import { ICartProduct } from '../../interfaces'

interface Contexprops {
  cart: ICartProduct[]
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  //Methods
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeProductIncart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as Contexprops)
