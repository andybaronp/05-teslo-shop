import NextLink from 'next/link'
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Link,
  Chip,
} from '@mui/material'
import { Box } from '@mui/system'
import ShopLayout from '../../components/layouts/ShopLayout'
import { CartList, OrderSummary } from '../../components/cart'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
  return (
    <ShopLayout
      title='Resumen de la orden 12323'
      pageDescription='Resumen de la orden'
    >
      <Typography variant='h1' component='h1'>
        Orden: ABC1234
      </Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label='Orden ya fue pagada'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de envio</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>Editar </Link>
                </NextLink>
              </Box>
              <Typography>Armando Méndoza</Typography>
              <Typography>Chapin av 0</Typography>
              <Typography>Stillivio ACV 232</Typography>
              <Typography>Canadá </Typography>
              <Typography>+1 23423421234 </Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref>
                  <Link underline='always'>Editar </Link>
                </NextLink>
              </Box>

              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                {/* TOdo*/}

                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label='Orden ya fue pagada'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage
