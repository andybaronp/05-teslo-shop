import NextLink from 'next/link'
import { Box, TextField, Typography, Grid, Button, Link } from '@mui/material'
import { AuthLayout } from '../../components/layouts'

const LoginPase = () => {
  return (
    <AuthLayout title='Ingresar'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>
              {' '}
              Iniciar Sesión
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label='Correo' fullWidth variant='filled' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Contraseña'
              fullWidth
              variant='filled'
              type='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color='secondary'
              className='circular-btn'
              size='large'
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='end'>
            <NextLink passHref href='/auth/register'>
              <Link underline='always'>¿No tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPase
