import { createContext } from 'react'
import { ICartProduct } from '../../interfaces'

interface Contexprops {
  cart: ICartProduct[]
}

export const CartContext = createContext({} as Contexprops)
