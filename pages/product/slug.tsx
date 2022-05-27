import { Button, Grid, Typography, Box, Chip } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import { initialData } from '../../database/products'
import { ProductSlidesShow } from '../../components/products/ProductSlidesShow'
import { ItenCounter } from '../../components/ui'

const product = initialData.products[0]
const slugPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlidesShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* {T+itulos} */}
            <Typography variant='h1' component='h1'>
              {product.title}
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              $ {product.price}
            </Typography>
            {/* {Cantidad} */}
            <Box sx={{ mt: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItenCounter />
            </Box>
            {/* {Agregar al carrito} */}
            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>
            {/* <Chip label='No hay disponibles' color='error' variant='outlined' /> */}
            {/* {Description} */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default slugPage
