import { FC } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../interfaces'
import { ProductCar } from './ProductCar'

interface Props {
  products: IProduct[]
}
export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCar key={product.slug} product={product} />
      ))}
    </Grid>
  )
}
