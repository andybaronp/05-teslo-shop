import { Grid, Typography } from '@mui/material'

export const OrderSumary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>$153</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>$35</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 1 }}>
        <Typography variant='subtitle1'>Total</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 1 }}>
        <Typography variant='subtitle1'>$173</Typography>
      </Grid>
    </Grid>
  )
}
