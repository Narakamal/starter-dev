'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

// Dummy Data
const dummyPOs = [
  { id: 'PO-2024-001', supplier: 'PT Bio Farma', date: '2024-07-20' },
  { id: 'PO-2024-002', supplier: 'CV Medika Jaya', date: '2024-07-21' },
]

const dummyPOItems = [
    { id: 'BRG-001', name: 'Paracetamol 500mg', ordered: 100 },
    { id: 'BRG-002', name: 'Amoxicillin 250mg', ordered: 50 },
]

const PenerimaanBarangView = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Terima Barang dari Supplier' />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  options={dummyPOs}
                  getOptionLabel={(option) => `${option.id} - ${option.supplier}`}
                  renderInput={(params) => <TextField {...params} label='Pilih Purchase Order (PO)' />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type='date'
                  label='Tanggal Penerimaan'
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Detail Barang Diterima' />
          <CardContent>
            <Typography variant='body2' sx={{ mb: 2 }}>
                Berikut adalah daftar barang berdasarkan PO yang dipilih. Masukkan jumlah yang diterima.
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID Barang</TableCell>
                    <TableCell>Nama Barang</TableCell>
                    <TableCell align='right'>Dipesan</TableCell>
                    <TableCell align='right'>Diterima</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyPOItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align='right'>{item.ordered}</TableCell>
                      <TableCell align='right'>
                        <TextField type='number' defaultValue={item.ordered} sx={{ maxWidth: 100 }}/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} className='flex justify-end'>
          <Button variant='contained' color='primary'>
            Simpan Penerimaan
          </Button>
      </Grid>
    </Grid>
  )
}

export default PenerimaanBarangView
