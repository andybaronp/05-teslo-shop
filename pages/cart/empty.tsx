import NextLink from 'next/link'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'

const EmptyPage = () => {
  return (
    <ShopLayout
      title='Carrito vacío'
      pageDescription='No hay artículos en el carrito'
    >
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box>
          <Typography>Su carrito está vacío</Typography>
          <NextLink href='/' passHref>
            <Link typography='h4' color='secundary'>
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage
