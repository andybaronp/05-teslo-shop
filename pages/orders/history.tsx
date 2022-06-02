import NextLink from 'next/link'
import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import ShopLayout from '../../components/layouts/ShopLayout'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada o no',
    width: 300,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip label='Pagada' variant='outlined' color='success' />
      ) : (
        <Chip label='No pagada' variant='outlined' color='error' />
      )
    },
  },
  {
    field: 'orden',
    headerName: 'Ir a la orden',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always'>Ver orden</Link>
        </NextLink>
      )
    },
  },
]

const rows = [
  { id: 1, paid: true, fullName: 'Andy Baron' },
  { id: 2, paid: false, fullName: 'Alma Valentina' },
  { id: 3, paid: true, fullName: 'Emmy Baron' },
  { id: 4, paid: false, fullName: 'Delfi Soto' },
  { id: 5, paid: true, fullName: 'Sasy Crosh' },
]

const HistoryPage = () => {
  return (
    <ShopLayout
      title={'Historial de ordenes'}
      pageDescription={'Historial de ordenes de cliente'}
    >
      <Typography variant='h1' component='h1'>
        Historial de ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
