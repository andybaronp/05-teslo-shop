import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../components/layouts/ShopLayout'
import { ProductList } from '../components/products'
import { useProducts } from '../hooks'
import { FullScreenLoading } from '../components/ui'

const HomePage: NextPage = () => {
  // useProducts --  fetcher
  const { products, isLoading } = useProducts('/products')
  console.log(products)

  return (
    <ShopLayout
      title={'TesloShop | Home'}
      pageDescription={'Encuentra lo mejor'}
    >
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default HomePage
