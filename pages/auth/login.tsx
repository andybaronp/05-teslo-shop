import NextLink from 'next/link'
import { Box, TextField, Typography, Grid, Button, Link, Chip } from '@mui/material'
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../../components/layouts'
import { validations } from '../../utils';
import { tesloApi } from '../../api';
import { ErrorOutline } from '@mui/icons-material';
import { useState } from 'react';

type FormData = {
  email: string,
  password: string,
};



const LoginPase = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [showError, setShowError] = useState(false)

  const onSubmit = async ({ email, password }: FormData) => {

    try {
      setShowError(false)
      const { data } = await tesloApi.post('/user/login', { email, password });
      console.log(data)
    } catch (error) {
      console.log('Error en credenciales ')
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }
  return (
    <AuthLayout title='Ingresar'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>

                Iniciar Sesión
              </Typography>
              <Chip
                label='Usuario o contraseña invalidos '
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='email'
                label='Correo'
                fullWidth
                variant='filled'
                {...register('email', {
                  required: 'Este campo es requerido',
                  validate: validations.isEmail
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Contraseña'
                fullWidth
                variant='filled'
                type='password'
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: { value: 6, message: 'Minimo 6 caracteres' }
                })}
                error={!!errors.password}
                helperText={errors.password?.message}

              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
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
      </form>
    </AuthLayout>
  )
}

export default LoginPase
