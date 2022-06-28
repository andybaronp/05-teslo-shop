import { FC, useContext } from 'react'
import NextLink from 'next/link'
import {
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
  Box,
  Button,
} from '@mui/material'
import { ItemCounter } from '../ui'
 
import { CartContext } from '../../context'
import { ICartProduct } from '../../interfaces'

 
interface Props {
  editable?: boolean
}
export const CartList: FC<Props> = ({ editable = false }) => {
  const { cart,updateCartQuantity ,removeProductIncart} = useContext(CartContext)
  

  const onNewCartQuantityValue = (product:ICartProduct, newQuantityValue: number) => {
    product.quantity = newQuantityValue

    updateCartQuantity(product)
  }
  return (
    <>
      {cart.map((product) => (
        <Grid container key={product.slug + product.size} spacing={2} sx={{ mb: 1 }}>
          {/*Todo: llevar a la pagina del product */}
          <Grid item xs={3}>
            <NextLink href={`product/${product.slug}`} passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.image}`}
                    component='img'
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display='flex' flexDirection='column'>
              <Typography variant='body1'>{product.title}</Typography>
              <Typography variant='body1'>
                Talla: <strong>{product.size}</strong>
              </Typography>
              {
                editable ? (
                  <ItemCounter
                    currentValue={product.quantity}
                    maxValue={10}
                    updateQuantity={(value) => onNewCartQuantityValue(product,value)} />
              ) : (
                    <Typography variant='h5'>{product.quantity}  { product.quantity > 1 ? 'poductos': 'producto'}</Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Typography variant='subtitle1'>{`$${product.price}`}</Typography>

            {editable && (
              <Button color='secondary' variant='text'
              onClick={()=>removeProductIncart(product)}
              >
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  )
}
