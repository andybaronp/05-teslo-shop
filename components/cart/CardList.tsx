import { FC } from 'react'
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
import { initialData } from '../../database/products'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  editable?: boolean
}
export const CardList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid container key={product.slug} spacing={2} sx={{ mb: 1 }}>
          {/*Todo: llevar a la pagina del product */}
          <Grid item xs={3}>
            <NextLink href='/product/slug' passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`products/${product.images[0]}`}
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
                Talla: <strong>M</strong>
              </Typography>
              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant='h5'>3 Items</Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            diplay='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Typography variant='subtitle1'>{`$${product.price}`}</Typography>

            {editable && (
              <Button color='secondary' variant='text'>
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  )
}
