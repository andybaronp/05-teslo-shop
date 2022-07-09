import { useState } from 'react';
import NextLink from 'next/link'
import { ErrorOutline } from '@mui/icons-material';
import { Box, TextField, Typography, Grid, Button, Link, Chip } from '@mui/material'
import { AuthLayout } from '../../components/layouts'
import { useForm } from 'react-hook-form';
import { validations } from '../../utils';
import { tesloApi } from '../../api';

const RegisterPage = () => {

  type FormData = {
    name: string,
    email: string,
    password: string,
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showError, setShowError] = useState(false)

  const onRegister = async ({ name, email, password }: FormData) => {
    try {
      setShowError(false)
      const { data } = await tesloApi.post('/user/register', { email, password, name });
      console.log(data)
    } catch (error) {
      console.log('Error en credenciales ')
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
    //TODO: Redirect to login

  }

  return (
    <AuthLayout title='Ingresar'>
      <form onSubmit={handleSubmit(onRegister)} noValidate>

        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>
                Crear cuenta
              </Typography>
              <Chip
                label='Usuario o contraseña invalidos '
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: showError ? 'flex' : 'none' }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Nombre Completo'
                fullWidth variant='filled'
                {...register('name', {
                  required: 'Este campo es requerido',
                  minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' }
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Correo'
                fullWidth variant='filled'
                type='email'
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
                color='secondary'
                className='circular-btn'
                size='large'
                fullWidth
                type='submit'
              >
                Crear cuenta
              </Button>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='end'>
              <NextLink passHref href='/auth/login'>
                <Link underline='always'>¿Ya tienes cuenta?</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
