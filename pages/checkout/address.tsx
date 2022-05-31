import {
  FormControl,
  Grid,
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Button } from '@mui/material'

const AddressPage = () => {
  return (
    <ShopLayout
      title='Dirección'
      pageDescription='Confirmar dirección de destino'
    >
      <Typography variant='h1' component='h1' sx={{ mb: 2 }}>
        Dirección
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label='Nombre' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Apellido' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Dirección 2 (Opcional)'
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Código Postal' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant='filled' label='pais' value={1}>
              <MenuItem value={1}>Colombia</MenuItem>
              <MenuItem value={2}>Venezuela</MenuItem>
              <MenuItem value={3}>Perú</MenuItem>
              <MenuItem value={4}>Chile</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant='filled' fullWidth />
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='center' sx={{ mt: 2 }}>
        <Button className='circular-btn' color='secondary'>
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage
