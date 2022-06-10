import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const WomenPage: NextPage = () => {
  // useProducts --  fetcher
  const { products, isLoading } = useProducts('/products?gender=women')
  return (
    <ShopLayout
      title={'TesloShop | Mujeres'}
      pageDescription={'Encuentra los mejores para mujeres'}
    >
      <Typography variant='h1' component='h1'>
        Mujeres
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos para mujeres
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default WomenPage
