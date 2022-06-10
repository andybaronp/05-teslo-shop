import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const MenPage: NextPage = () => {
  // useProducts --  fetcher
  const { products, isLoading } = useProducts('/products?gender=men')
  return (
    <ShopLayout
      title={'TesloShop | Hombres'}
      pageDescription={'Encuentra los mejores productos para hombres'}
    >
      <Typography variant='h1' component='h1'>
        Hombres
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Todos los productos para hombres
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default MenPage
