import { Box } from '@mui/system'
import ShopLayout from '../components/layouts/ShopLayout'
import { Typography } from '@mui/material'
const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription='Nada que mostrar aquí'>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
      >
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2} marginRight={1}>
          No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  )
}

export default Custom404
